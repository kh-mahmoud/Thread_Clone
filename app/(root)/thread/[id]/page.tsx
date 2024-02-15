import { SignedIn, currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/user.actions";
import { fetchThreadbyId } from "@/lib/actions/thread.actions";
import ThreadCard from "@/components/cards/ThreadCard";
import Comment from "@/components/forms/Comment";
import { redirect } from "next/navigation";


async function page({ params }: { params: { id: string } }) {
    
    const thread = await fetchThreadbyId(params.id)
     if(!thread) return redirect('/') 

    const user:any = await currentUser()
    
    const userInfo = await fetchUser(user?.id)
    if(!userInfo?.onboarded) return redirect('/onboarding') 
    
    return (
        <section className='relative'>
         <div>
            <ThreadCard key={thread?.id}
                id={thread?.id}
                currentUserId={user?.id}
                parentId={thread?.parentId}
                content={thread?.content}
                author={thread?.author}
                createdAt={thread?.createdAt}
                // comments={thread?.children}
                likes={thread?.likes}
                isComment={false}
            />
        </div>
        {!user && <div className="comment-form"/>}
        <SignedIn>
            <div className="mt-7">
                <Comment
                    threadId={thread?.id}
                    currentUserImg={userInfo?.image || user.imageUrl}
                    currentUserId={userInfo?.id}
                />
            </div> 
        </SignedIn>

        <div className="mt-9 flex flex-col gap-8">
           {thread?.children.map((comment:any)=>
               <ThreadCard key={comment.id}
                id={comment.id}
                currentUserId={user?.id}
                parentId={comment.parentId}
                content={comment.content}
                author={comment.author}
                createdAt={comment.createdAt}
                comments={comment.children}
                likes={comment.likes}
                isComment={true}
                />
            )
            }
        </div>
       
        </section>
    );
}

export default page;
