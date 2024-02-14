'use client'
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { commentsValidation } from '@/lib/validations/thread';
import { addComment, createThread } from "@/lib/actions/thread.actions";
import Image from "next/image";


type Props = {
    threadId:string,
    currentUserImg:string,
    currentUserId:string
}

const Comment = ({threadId,currentUserImg,currentUserId}:Props) => {
    
    const path=usePathname()
    const router=useRouter()
    const [loading,setLoading] = useState(false)
    




    const form = useForm<z.infer<typeof commentsValidation >>({
        resolver: zodResolver(commentsValidation),
        defaultValues: {
            thread:"",
        }
    })
 

    const onSubmit = async(values: z.infer<typeof commentsValidation>) => {
        setLoading(true)
        const comment = await addComment({userId:currentUserId,content:values.thread,threadId,path})

        if(comment?.status===200){
            setLoading(false)
            form.reset()
        }else{
            setLoading(false)
        }
    }

  return (
    <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex comment-form   gap-10 place-items-end justify-between">

            <FormField
                control={form.control}
                name="thread"
                render={({ field }) => (
                    <FormItem className='w-full flex items-center'>
                        <FormLabel className='overflow-hidden h-11 w-12 relative rounded-full '>
                            <Image
                                src={currentUserImg || '/anonym.png'}
                                alt="user"
                                fill
                                className="rounded-full object-cover"
                            />
                        </FormLabel>
                        <FormControl className='border-none bg-transparent'>
                            <Input
                                type="text"
                                placeholder='Comment...'
                                className=' no-focus text-light-1 outline-none'
                                {...field} />
                        </FormControl>
                            <FormMessage />
                    </FormItem>
                )}
            />

            <Button type="submit" className='bg-primary-500' disabled={loading}>{loading ? "Loading..." : "Reply"}</Button>
        </form>
    </Form>
  );
}

export default Comment;
