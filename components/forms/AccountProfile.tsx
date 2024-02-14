'use client'
import React, { useState } from 'react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { array, z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { userValidation } from '@/lib/validations/user';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import Image from 'next/image';
import { Textarea } from '../ui/textarea';
import { useUploadThing } from '@/lib/uploadthing';
import { updateUser } from '@/lib/actions/user.actions';
import { usePathname,useRouter } from 'next/navigation';


type Props={
    user:
    {
      id:string,
      userId:string,
      username:string,
      name:string,
      bio:string,
      image:string
    },
    btnTitle:string
}

const AccountProfile = ({user,btnTitle}:Props) => {

    const [files,setFiles] = useState<File[]>([])
    const [hasImagechanged,sethasImagechanged] = useState(false)
    const {startUpload} = useUploadThing("media")
    const path=usePathname()
    const router=useRouter()
    const [loading,setLoading] = useState(false)




    const form = useForm<z.infer<typeof userValidation>>({
        resolver: zodResolver(userValidation),
        defaultValues: {
            profile_photo: '' || user?.image,
            name: '' || user?.name,
            username: '' || user?.username,
            bio: '' || user?.bio,
        }
    })
    const handleImage = (e: React.ChangeEvent<HTMLInputElement | undefined>, fieldChange: (value: string) => void) => {
        e.preventDefault()
        const fileReader = new FileReader();
        if (e.target.files && e.target.files?.length > 0) {
            const file = e.target.files[0]
            setFiles(Array.from(e.target.files))

            if (!file.type.includes('image')) return

            fileReader.onload = async (e) => {
                const imageUrl = e.target?.result?.toString() || ''
                fieldChange(imageUrl)
            }

            fileReader.readAsDataURL(file)
            sethasImagechanged(true)
        }

    }

    const onSubmit = async(values: z.infer<typeof userValidation>) => {
       setLoading(true)
       if(hasImagechanged){ 
        sethasImagechanged(false)
        const imgRes=await startUpload(files)

         if (imgRes && imgRes[0]?.url) {
          values.profile_photo = imgRes[0]?.url;
         }
      }

      const res = await updateUser(user?.id,path,values)
      if(res.status===400) setLoading(false)

      if(path==="/profile/edit")
      {
        router.push("/profile")
      }
      else{
        router.push("/")
      } 
    }


    return (
        <div>
        
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-10 justify-start">
                    <FormField
                        control={form.control}
                        name="profile_photo"
                        render={({ field }) => (
                            <FormItem className='flex items-center gap-4 '>
                                <FormLabel>
                                    <div className='account-form_image-label relative overflow-hidden'>
                                        {field.value ? (
                                            <Image
                                                src={field.value}
                                                alt="profile"
                                                fill
                                                priority
                                                className='object-cover absolute top-0 left-0'
                                            />
                                        ) : (
                                            <Image
                                                src="/profile.svg"
                                                alt="profile"
                                                width={45}
                                                height={45}
                                                priority
                                                className='rounded-full'
                                            />)
                                        }
                                    </div>

                                </FormLabel>
                                <FormControl className='cursor-pointer'>
                                    <Input
                                        type='file'
                                        className='account-form_image-input'
                                        accept='image/*'
                                        placeholder='Upload a photo'
                                        onChange={(e) => handleImage(e, field.onChange)} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-base-semibold text-light-2'>
                                    Name
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        className='account-form_input no-focus'
                                        type='text'
                                        placeholder='Name'
                                        {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem >
                                <FormLabel className='text-base-semibold text-light-2'>
                                    UserName
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        className='account-form_input no-focus'
                                        type='text'
                                        placeholder='userName'
                                        {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="bio"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-base-semibold text-light-2'>
                                    Bio
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                        rows={10}
                                        className='account-form_input no-focus'
                                        placeholder='Bio'
                                        {...field} />
                                </FormControl>
                                    <FormMessage />
                            </FormItem>
                        )}
                    />


                    <Button type="submit" disabled={loading}>{loading ? "Loading..." : btnTitle}</Button>
                </form>
            </Form>
        </div>
    );
}

export default AccountProfile;
