'use server'
import ThreadCard from "@/components/cards/ThreadCard"
import { deleteThread, fetchThreads } from "@/lib/actions/thread.actions"
import { addLikes} from "@/lib/actions/user.actions";




export const FetchAction=async (page:number,userId:string | undefined)=>
{
    const data =await fetchThreads(page,3)

 return {data:data?.threads.map((thread:any) => (
      <ThreadCard key={thread.id}
            id={thread.id}
            currentUserId={userId}
            parentId={thread.parentId}
            content = {thread.content}
            author = {thread.author}
            createdAt = {thread.createdAt}
            comments = {thread.children}
            isComment={false}
            likes={thread.likes}/>
    )),isNextPage:data?.isNextPage}
}


  export const Like = async(currentUserId:string | undefined,id:string)=>
  {
     const like = await addLikes(currentUserId,id)
  }

  export const DeleteThread = async(id:string)=>
  {
     const like = await deleteThread(id)
  }





