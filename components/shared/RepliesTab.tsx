import { fetchUserThreads } from "@/lib/actions/user.actions"
import { redirect } from "next/navigation"
import ThreadCard from "../cards/ThreadCard"



type Props= {
    userId:string
    accountId:string
    accountType:string
} 


const RepliesTab = async ({userId,accountId,accountType}:Props) => {
    const res= await fetchUserThreads(accountId)
    if(!res) redirect("/")


  return (
    <section className="mt-9 flex flex-col gap-10">
       {res?.threads?.Thread
          .filter((thread: any) => thread.parentId != null)
          .reverse()
          .map((thread: any) => (
              <ThreadCard
                  key={thread.id}
                  id={thread.id}
                  currentUserId={userId}
                  parentId={thread.parentId}
                  content={thread.content}
                  author={thread.author}
                  createdAt={thread.createdAt}
                  comments={thread.children}
                  likes={thread.likes}
                  isComment={false}
              />
          ))
}

    </section>
  );
}

export default RepliesTab;
