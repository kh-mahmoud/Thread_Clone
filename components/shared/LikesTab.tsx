import { fetchUserThreads } from "@/lib/actions/user.actions"
import { redirect } from "next/navigation"
import ThreadCard from "../cards/ThreadCard"



type Props= {
    userId:string
    accountId:string
    liked:ThreadProps[]
    accountType:string
} 

type ThreadProps = {
  id:string,
  parentId:string,
  content:string,
  author: {
    id:string,
    userId: string;
    name: string;
    image: string;
};
  createdAt:string,
  children:[]
  likes:[
    {
            userId: string ;
     }
      ]
}

const LikesTab = async ({userId,accountId,accountType,liked}:Props) => {
  
  


  return (
    <section className="mt-9 flex flex-col gap-10">
       {liked.reverse() 
          .map((thread: ThreadProps) => (
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

export default LikesTab;
