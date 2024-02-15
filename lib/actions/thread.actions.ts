"use server"
import { prisma } from '../prismaClient';
import { revalidatePath } from 'next/cache';

type Props ={
    content:string,
    community?:string | null,
    author:string,
    path:string
}


//Create threads
export const createThread= async (props:Props)=>
{

   try {
    const {content,community,author,path}= props
    const thread = await prisma.thread.create({
        data:{
            content,
            author:{connect:{id:author}}, 
        } ,
    })

    if(thread)
    {
      revalidatePath("/")
      return {status:200,message:"Thread created successfully"}
    }
    else
    {
      return {status:400,message:"Thread creation failed"}
    }
    
   } catch (error:any) {
       console.log(error.message)
   }
   finally {
    await prisma.$disconnect();
  }
}



export const fetchThreads= async (pageNumber=1,pageSize=20)=>
{
   try {
    //pagination skip
    const skipAmount=(pageNumber-1)*pageSize

    //fetch threads
    let threads = await prisma.thread.findMany({
        where: {
          parent: null,
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip: skipAmount,
        take: pageSize,
        include: {
          parent: true,
          author: true,
          children:{include:{author:true}},
          likes:true
        }
    });
    
    //count total number of threads without parentId (comment)
    const totalThreads = await prisma.thread.count({
      where: {
        parent: null,
      },
    });
    
    //check if there are more threads to fetch
    const isNextPage = totalThreads > skipAmount + threads.length
    
    //filter out parent threads

    //  threads = threads.filter((item:any) => (item.parentId === null)) 

     //return threads
     return {threads, isNextPage };

   } catch (error:any) {
       console.log(error.message)
   }
   finally {
    await prisma.$disconnect();
  }
}


export const fetchThreadbyId = async (id:string) =>
{
   try {
      
      const thread= await prisma.thread.findUnique({
        where: {
          id,
        },
        include: {
          author: true,
          children:{include:{author:true,likes:true,children:{include:{author:true,likes:true}}}},
          likes:true

        }
      })
   return thread

   } catch (error:any) {
       console.log(error.message)
   }
   finally {
    await prisma.$disconnect();
  }
}

type CommentProps ={
   userId:string,
   content:string,
   threadId:string,
   path:string
}

export const addComment = async (props:CommentProps) =>
{
const {userId,content,threadId,path}= props

   try {
      
      const thread= await prisma.thread.findUnique({
        where: {
          id:threadId,
        },
      })

      if(!thread) throw new Error("Thread not found")

       const comment= await prisma.thread.create({
        data:{
            content,
            authorId:userId,
            parentId:threadId
        } ,
      })

      if(comment)
      {
        revalidatePath(path)
        revalidatePath("/activity")
        revalidatePath("/")
        return {status:200,message:"Comment added successfully"}
      }
      else
      {
        return {status:400,message:"Comment addition failed"}
      }

   
   } catch (error:any) {
       console.log(error.message)
   }
   finally {
    await prisma.$disconnect();
  }
}


export const deleteThread = async (id:string) =>
{
   try {
      
      const thread= await prisma.thread.delete({
        where: {
          id,
        },
      })
      if(thread)
      {
        return {status:200,message:"Thread deleted successfully"}
      }
      else
      {
        return {status:400,message:"Thread deletion failed"}
      }

   } catch (error:any) {
       console.log(error.message)
   }
   finally {
    await prisma.$disconnect();
  }
}
