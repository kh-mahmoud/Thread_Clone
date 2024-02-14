'use client'
import Image from 'next/image';

const LikeButton = ({handleAddLike}:{handleAddLike:()=>void}) => {
  return (
    <div>
      <Image src='/heart-gray.svg' onClick={handleAddLike}  className='cursor-pointer object-contain hover:invert' alt='heart' width={24} height={24}/>

    </div>
  );
}

export default LikeButton;
