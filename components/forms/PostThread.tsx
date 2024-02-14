'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
// import { updateUser } from '@/lib/actions/user.actions';
import { usePathname,useRouter } from 'next/navigation';
import { useState } from 'react';
import { threadValidation } from '@/lib/validations/thread';
import { createThread } from '@/lib/actions/thread.actions';





 

const PostThread = ({userId}:{userId:string}) => {

    const path=usePathname()
    const router=useRouter()
    const [loading,setLoading] = useState(false)




    const form = useForm<z.infer<typeof threadValidation >>({
        resolver: zodResolver(threadValidation),
        defaultValues: {
            thread:"",
            accountId: userId
        }
    })
 

    const onSubmit = async(values: z.infer<typeof threadValidation>) => {
        setLoading(true)
        const res = await createThread(
        {
          content:values.thread,
          community:null,
          author:userId,
          path
        })

        if(res?.status===200)
        {
          router.push('/')
        }
        else
        {
          setLoading(false)
          console.log("error occured")
        }
    }
  return (
         <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col mt-10 gap-10 justify-start">
            
                    <FormField
                        control={form.control}
                        name="thread"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-base-semibold text-light-2'>
                                    Content
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                        rows={10}
                                        className='account-form_input no-focus'
                                        placeholder='Content'
                                        {...field} />
                                </FormControl>
                                    <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className='bg-primary-500' disabled={loading}>{loading ? "Loading..." : "Post Thread"}</Button>
                </form>
            </Form>
  );
}

export default PostThread;
