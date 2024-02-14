'use client'
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';


type Props={
    id: number;
    name: string;
    username: string;
    imageUrl: string;
}

const UserCard = ({id,name,username,imageUrl}:Props) => {
    
    const router= useRouter()

  return (
    <article className='user-card mt-10'>
        <div className='user-card__avatar'>
            <Image
             src={imageUrl}
             alt={"logo"}
             height={48}
             width={48} 
             className='rounded-full' />
        </div>

        <div className='flex-1 text-ellipsis'>
            <h4 className='text-base-semibold text-light-1'>{name}</h4>
            <p className='text-small-medium text-gray-1'>@{username}</p>
        </div>
        
        <Button onClick={()=>router.push(`/profile/${id}`)} className='user-card_btn'>
           View
        </Button>
      
    </article>
  );
}

export default UserCard;
