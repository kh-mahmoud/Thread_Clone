'use client'
import { currentUser } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import moment from 'moment';
import {
    FacebookShareButton,
} from 'next-share'
import { Like } from '@/app/action';
import Alert from '../shared/Alert';
import DropDown from '../shared/DropDown';


type Props = {
    id: string;
    currentUserId: string | undefined;
    parentId: string;
    content: string;
    author: {
        id: string;
        userId: string;
        name: string;
        image: string;
    };
    createdAt: string;
    comments?: {
        id: string;
        author: {
            id: string;
            userId: string;
            image: string;
        };
    }[];
    likes: [
        {
            userId: string | undefined;
        }
    ]
    isComment: boolean;
};




const ThreadCard = ({ id, currentUserId, parentId, content, author, createdAt, comments, isComment, likes }: Props) => {
    const formatDate = moment(createdAt).format('h:mma - MMM D, YYYY');
    const checklike = likes?.filter((like) => (like.userId === currentUserId))
    let displayedUserIds: string[] = [];


    const [likes_count, setLikes_count] = useState<number>(likes?.length)
    const [isLiked,setIsLiked] = useState<boolean>(checklike?.length>0?true:false)
    const [isOpen, setIsOpen] = useState<boolean>(false);



    const handleClick = async () => {
         if(!currentUserId){
             setIsOpen(true)
             return 
         } 
         
         if(isLiked){
            setLikes_count(likes_count - 1)
            setIsLiked(false)
        }else{
            setLikes_count(likes_count + 1)
            setIsLiked(true)
        }
        const data = await Like(currentUserId, id)
    }



    return (
        <article className={`flex w-full flex-col rounded-xl relative  ${isComment ? 'px-0 xs:px-7' : 'bg-dark-2 p-7'}`}>
            <div className='flex items-start justify-between'>
                <div className='flex w-full flex-1 flex-row gap-4'>
                    <div className='flex flex-col items-center'>
                        <Link href={`/profile/${author?.userId}`} className='relative h-11 w-11'>
                            <Image
                                src={author?.image}
                                alt={'Profile image'}
                                layout='fill'
                                className='rounded-full object-cover cursor-pointer'
                            />
                        </Link>
                        <div className='thread-card_bar' />
                    </div>
                    <div className='w-full flex flex-col '>
                        <Link href={`${author?.userId === currentUserId ? '/profile' : `/profile/${author?.userId}`}`} className='w-fit'>
                            <h2 className='cursor-pointer hover:underline text-base-semibold text-light-1'>{author?.name}</h2>
                        </Link>
                        <p className='text-small-regular text-light-2 mt-2'>{content}</p>

                        <div className='mt-5 flex flex-col gap-3'>
                            <div className='flex items-end gap-3.5'>
                                {isLiked ?
                                    (<div className='flex items-center gap-1'>
                                        <Image src='/heart-filled.svg' onClick={handleClick} className='cursor-pointer object-contain ' alt='heart' width={24} height={24} />
                                        {likes_count === 0 ?'':<p className='text-small-regular  text-gray-1'>{likes_count}</p>}
                                    </div>)
                                    :
                                    (<div className='flex items-center gap-1'>
                                        <Image src='/heart-gray.svg' onClick={handleClick} className='cursor-pointer object-contain hover:invert' alt='heart' width={24} height={24} />
                                        {likes_count === 0 ?'':<p className='text-small-regular  text-gray-1'>{likes_count}</p>}
                                    </div>)
                                }
                                <Link href={`/thread/${id}`}  ><Image src='/reply.svg' className='cursor-pointer object-contain hover:invert' alt='heart' width={24} height={24} /></Link>
                                {/* <Image src='/share.svg' className='cursor-pointer object-contain hover:invert' alt='heart' width={24} height={24} /> */}
                                <FacebookShareButton
                                    url={'https://github.com/next-share'}
                                    quote={'next-share is a social share buttons for your next React apps.'}
                                    className='flex justify-end'
                                >
                                <Image src='/repost.svg' className='cursor-pointer object-contain hover:invert' alt='heart' width={24} height={24}/>
                                </FacebookShareButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-between max-xs:flex-col  gap-2'>
                <div className='flex items-end  gap-2'>
                    <div className='flex -space-x-3' >
                        {comments && comments.length > 0 && comments.slice(0, 5).map((comment) => {
                            // Check if the author's ID is already in the displayedUserIds array
                            if (!displayedUserIds.includes(comment.author.id)) {
                                // If not, add the user ID to the displayedUserIds array
                                displayedUserIds.push(comment.author.id);
                                // Render the comment
                                return (
                                    <div key={comment.id} className='w-6 h-6  rounded-full relative overflow-hidden mt-2 ml-2'>
                                        <Image
                                            src={comment?.author?.image}
                                            alt=''
                                            fill
                                            className='object-cover'
                                        />
                                    </div>
                                );
                            }
                        })}
                    </div>
                    {comments?.length === 0 || undefined ? '' : (
                        <Link href={`/thread/${id}`}>
                            <p className='text-small-medium hover:underline cursor-pointer text-gray-1'>
                                {comments && (comments?.length > 1 ? `${comments?.length} replies` : `${comments?.length} reply`)}
                            </p>
                        </Link>
                    )}
                </div>
                <div className='text-small-regular  text-gray-1 mt-2 flex items-end'>
                    {formatDate}
                </div>
                 
                <div className={`absolute top-3 right-3 ${currentUserId === author?.userId ? 'block' : 'hidden'}`}>
                   <DropDown id={id}/>   
                </div>

            </div>
            {isOpen && <Alert isOpen={isOpen} setIsOpen={setIsOpen}/>}
        </article>
    );
}

export default ThreadCard;
