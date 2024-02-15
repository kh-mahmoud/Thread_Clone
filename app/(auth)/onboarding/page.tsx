import AccountProfile from '@/components/forms/AccountProfile';
import React from 'react';
import { currentUser } from '@clerk/nextjs';
import { fetchUser } from '@/lib/actions/user.actions';


async function Page() {

  const user = await currentUser();
  if(!user) return null;
  const userInfo= await fetchUser(user.id)

  const userData={
      id:user?.id,
      userId:userInfo?.userId,
      username:userInfo?.username || user?.username,
      name:userInfo?.name || user?.firstName,
      bio:userInfo?.bio || "",
      image:userInfo?.image || user?.imageUrl
  }

  return (
    <main className='flex mx-auto flex-col justify-start px-10 py-20 max-w-3xl '>
         <h1 className='head-text'>Onboarding</h1>
         <p className='mt-3 text-base-regular text-light-2'>Complete you profile to get started</p>
         <section className='bg-dark-2 mt-9 p-10'>
            <AccountProfile user= {userData} btnTitle="Continue"/>
         </section>
    </main>
  );
}

export default Page;
