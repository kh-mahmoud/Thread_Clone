import { OrganizationSwitcher, SignInButton, SignOutButton, SignedIn,  SignedOut,  UserButton} from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { dark } from '@clerk/themes';


const Topbar = () => {
  
  return (
    <nav className='topbar'>
      <Link href={"/"} className='flex items-center gap-4'>
          <Image
             src="/logo.svg"
             height={28}
             width={28}
             alt='logo'
          />
          <p className='text-heading3-bold text-light-1 max-xs:hidden'>Threads</p>
      </Link>

      <div className='flex items-center gap-3'>
          <div className='md:hidden'>
             <SignedIn>
                 <SignOutButton>
                     <div className='flex cursor-pointer'>
                         <Image
                             src={"/logout.svg"}
                             alt='logo'
                             width={24}
                             height={24}
                         
                         />
                     </div>
                 </SignOutButton>
             </SignedIn>
          </div>

          <OrganizationSwitcher
                appearance={{
                  baseTheme: dark,
                  elements: {
                    organizationSwitcherTrigger: "py-2 px-4",
                  },
                }}
              />

          <SignedOut>
             <div className='flex gap-4'>
               <Link href={"/sign-in"}><div className='sign-in-btn'>Sign In</div></Link>
               <Link href={"/sign-up"}><div className='sign-up-btn'>Sign Up</div></Link>
             </div>
        </SignedOut>
      </div>

     
    </nav>
  );
}

export default Topbar;
