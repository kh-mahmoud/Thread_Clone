'use server'
import { revalidatePath } from 'next/cache';
import { prisma } from '../prismaClient';
import { clerkClient } from '@clerk/nextjs';


type UserParams = {
  profile_photo: string;
  name: string;
  username: string;
  bio?: string;
};

//update user if exist or create
export const updateUser = async (userId: string, path: string, props: UserParams) => {
  try {
    const { username, name, bio, profile_photo: image } = props;

    const onboarding = await prisma.user.upsert({
      where: { userId},
      update: {
        username: username.toLowerCase(),
        name,
        bio,
        image,
        onboarded: true,
      },
      create: {
        userId,
        username: username.toLowerCase(),
        name,
        bio,
        image,
        onboarded: true,
      },
    });

    if (path === '/profile/edit') {
      revalidatePath(path);
    }
    
    if(onboarding)
    {
      const params = { username}; 
      await clerkClient.users.updateUser(userId, params);

      return {status:200,message:"User updated successfully"}


    }else{
      return {status:400,message:"Failed to update user"}
    }
    
  } catch (error:any) {
      throw new Error(error);
  }finally {
    await prisma.$disconnect();
  }
};


//fetch user by id
export const fetchUser= async (userId:string)=>
{
   try {
    return await prisma.user.findFirst({where: {userId},include:{Thread:true,liked:{include:{author:true,likes:true}}}})
   } 
   catch (error:any) {
      throw new Error(`Failed to fetch user: ${error.message}}`);
   }
   finally {
      await prisma.$disconnect();
   }
}



export const fetchUserThreads= async (userId:string)=>
{
   try {
    const threads= await prisma.user.findFirst({where: {userId},include:{Thread:{include:{author:true,likes:true}}}})

     if(threads){

        return {status:200,threads}
    }else{

      return {status:500,message:"Failed to fetch user threads"}
    }

   } 
   catch (error:any) {
      throw new Error(`Failed to fetch threads: ${error.message}}`);
   }
   finally {
      await prisma.$disconnect();
   }
}



export const  fetchUsers= async ({
  userId,
  searchString = "",
  // pageNumber = 1,
  // pageSize = 20,
}: {
  userId: string;
  searchString?: string;
  pageNumber?: number;
  pageSize?: number;
}) =>  {

     try {
    // Calculate the number of users to skip based on the page number and page size.
    // const skipAmount = (pageNumber - 1) * pageSize;

    // Query users based on provided parameters
    const users = await prisma.user.findMany({
      where: {
        userId: { not: userId }, // Exclude the current user from the results.
        OR: [
          { username: { contains: searchString, mode: 'insensitive' } },
          { name: { contains: searchString, mode: 'insensitive' } },
        ],
      },
      orderBy: { createdAt: "desc" },
      // skip: skipAmount,
      // take: pageSize,
    });

    // Count total users that match the search criteria
    const totalUsersCount = await prisma.user.count({
      where: {
        userId: { not: userId },
        OR: [
          { username: { contains: searchString, mode: 'insensitive' } },
          { name: { contains: searchString, mode: 'insensitive' } },
        ] ,
      },
    });

    // Check if there are more users beyond the current page.
    // const isNext = totalUsersCount > skipAmount + users.length;

    return { users};
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
 
}


export const  getActivity = async (userId:string) =>  {

  try {
  //get an ids array of user comments
    const ThreadsIds:string[]=[]

    const userThreads = await prisma.thread.findMany({where:{authorId:userId},select:{id:true}})

      userThreads.map((thread:{id:string})=>{
        ThreadsIds.push(thread.id)
    })

    const usersReplies= await prisma.thread.findMany({where:{
      AND: [
          { parentId: { not: null } } ,   // Ensure parentId is not null
          { authorId: { not: userId } }, // Ensure authorId is not equal to userId to get just commnents
          { parentId: { in: ThreadsIds } },
        ]

    },include:{author:true}})
 
    revalidatePath("/activity")
    return usersReplies
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
 
}


export const addLikes= async (userId:string | undefined,threadId:string) =>
{
   const checkThread= await prisma.thread.findFirst({where:{id:threadId}})

   try {
      const CheckThread= await prisma.thread.findFirst({where:{id:threadId},include:{likes:true}})
          if(CheckThread)
          {
                const CheckUser = await prisma.thread.findMany({
                  where: {
                    AND: [
                      { likes: { some: { userId: userId } } },
                      { id: threadId }
                    ]
                  }
                });
                
                  if(CheckUser.length>0)
                   { 
                          await prisma.thread.update({
                          where: { id: threadId },
                          data: { likes: { disconnect: { userId: userId } } }
                      });
                   }
                   else
                   {
                     await prisma.thread.update({
                          where: { id: threadId },
                          data: { likes: { connect: { userId: userId } } }
                      });
                   }
                  revalidatePath("/")
                  revalidatePath(`/thread/${threadId}`)
                  revalidatePath(`/profile/${userId}`)
                  revalidatePath(`/profile`)
                  console.log(CheckUser)

                    
          };


   }catch (error:any) {
      throw new Error(`Failed to add like: ${error.message}}`);
   }
   finally {
      await prisma.$disconnect();
   }

}



