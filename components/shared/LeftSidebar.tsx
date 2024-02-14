'use client'
import React from 'react';
import { sidebarLinks } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname,useRouter } from 'next/navigation';
import { SignOutButton, SignedIn } from '@clerk/clerk-react';


const LeftSidebar = () => {
  const router=useRouter()
  const pathname=usePathname()

  return (
    <section className='leftsidebar custom-scrollbar '>
        <div className='flex flex-col w-full gap-6 px-6'>
            {sidebarLinks.map((link)=>
            {
               const isActive=(pathname===(link.route) || pathname === link.route)
              return(
                <Link className={`leftsidebar_link ${isActive && "bg-primary-500"}`} key={link.label} href={link.route}>
                    <Image
                    src={link.imgURL}
                    width={24}
                    height={24}
                    alt={link.label}/>
  
                    <p className='text-light-1'>
                      {link.label}
                    </p>
                </Link>
              )
            })}
        </div>
        <div className='px-6 mt-10'>
          <SignedIn>
                 <SignOutButton signOutCallback={()=>{
                     router.push("/")
                 }}>
                     <div className='flex cursor-pointer gap-6 p-4'>
                         <Image
                             src={"/logout.svg"}
                             alt='logo'
                             width={24}
                             height={24}
                         
                         />
                      <p className='text-light-2 max-lg:hiddden'>Logout</p>
                     </div>
                 </SignOutButton>
          </SignedIn>
        </div>
    </section>
  );
}

export default LeftSidebar;
