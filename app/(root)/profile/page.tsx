import ProfileHeader from '@/components/shared/ProfileHeader';
import { fetchUser } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { profileTabs } from '@/constants';
import Image from 'next/image';
import ThreadsTab from '@/components/shared/ThreadsTab';
import RepliesTab from '@/components/shared/RepliesTab';
import LikesTab from '@/components/shared/LikesTab';



type ThreadProps = {
  id:string,
  parentId:string,
  content:string,
  author: {
    userId: string;
    name: string;
    image: string;
};
  createdAt:string,
  children:[]
}


 const page = async ()=> {

  const user = await currentUser()
  if (!user) return null
  const userInfo = await fetchUser(user?.id)
  if(!userInfo?.onboarded) return redirect('/') 


  return (
    <section>
        <ProfileHeader
           id={user.id}
           accountId={userInfo.userId}
           name={userInfo.name}
           username={userInfo.username}
           imgUrl={userInfo.image}
           bio= {userInfo.bio}
        />

        <div  className='mt-9'>
            <Tabs defaultValue="threads" className="w-full">
              <TabsList className='tab'>
                   {profileTabs.map((tab)=>(
                      <TabsTrigger key={tab.label} value={tab.value} className='tab'>
                        <Image
                           src={tab.icon}
                           alt={tab.label}
                           width={24}
                           height={24}
                           className='object-contain'
                         /> 
                          <p className='max-sm:hidden'>{tab.label}</p>

                          {tab.label === "Threads" && (
                               <p className="ml-1 rounded-sm h-5 w-5 flex justify-center items-center bg-light-4 px-2 py-1 text-light-2 text-tiny-midium">
                                    {userInfo?.Thread?.filter((thread:ThreadProps)=>thread.parentId === null).length}
                               </p>  
                            )}

                           {tab.label === "Replies" && (
                               <p className="ml-1 rounded-sm h-5 w-5 flex justify-center items-center bg-light-4 px-2 py-1 text-light-2 text-tiny-midium">
                                    {userInfo?.Thread?.filter((thread:ThreadProps)=>thread.parentId != null).length}
                               </p>  
                            )}

                            {tab.label === "Likes" && (
                               <p className="ml-1 rounded-sm h-5 w-5 flex justify-center items-center bg-light-4 px-2 py-1 text-light-2 text-tiny-midium">
                                    {userInfo?.liked?.length}
                               </p>  
                            )}
                       </TabsTrigger>
                   ))}
              </TabsList>
              {profileTabs.map((tab)=>(
                  <TabsContent key={tab.label} value={tab.value} className='w-full text-light-1'>
                     {tab.label === "Threads" && 
                        <ThreadsTab
                            userId={user?.id}
                            accountId={userInfo.userId}
                            accountType="user"
                        />}

                      {tab.label === "Replies" && 
                        <RepliesTab
                            userId={user?.id}
                            accountId={userInfo.userId}
                            accountType="user"
                        />}

                        {tab.label === "Likes" && 
                        <LikesTab
                            userId={user?.id}
                            accountId={userInfo.userId}
                            liked= {userInfo?.liked}
                            accountType="user"
                        />}
                  </TabsContent>
              ))}
            </Tabs>
        </div>
    </section>
  );
}

export default page;
