import LoadMore from "@/components/shared/LoadMore";
import ThreadCard from "@/components/cards/ThreadCard";
import { fetchThreads } from "@/lib/actions/thread.actions";
import { currentUser } from "@clerk/nextjs";


type ThreadProps = {
  id:string,
  parentId:string,
  content:string,
  author: {
    id:string
    userId: string;
    name: string;
    image: string;
};
  createdAt:string,
  children:[],
  likes: [
        {
            userId: string | undefined;
        }
    ]}

export default async function page() {

   const result = await fetchThreads(1,3)
   const user = await currentUser()

  return (
    <>
       <h1 className="head-text text-left">Home</h1>
       <section className='mt-9 flex flex-col gap-10'>
           {result?.threads.length===0?(
             <p className='no-result'>No threads found</p>
           ):(
             <>
                {result?.threads.map((thread:any)=>(
                  <ThreadCard key={thread.id}
                    id={thread.id}
                    currentUserId={user?.id}
                    parentId={thread.parentId}
                    content = {thread.content}
                    author = {thread.author}
                    createdAt = {thread.createdAt}
                    comments = {thread.children}
                    isComment={false}
                    likes={thread.likes}
                    />
                ))}
             </>
           )}
           <LoadMore  userId={user?.id} isNextPage={result?.isNextPage} />
       </section>
    </>
  )
} 
