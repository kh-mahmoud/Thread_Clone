'use client'
import Image from 'next/image';
import React, { useEffect } from 'react';
import { Input } from '../ui/input';
import { useRouter } from 'next/navigation';
import useDebounce from '@/lib/Hooks/Debounce';

const SearchBar = () => {
  const router = useRouter();
  const [search, setSearch] = React.useState('');
  useDebounce(search,300)
 




  return (
    <div className='bg-dark-2 p-3 flex gap-3 rounded-md'>
      <Image
        alt="search"
        src="/search.svg"
        width={25}
        height={25}
        className='cursor-pointer'
      />
      <Input
        type="text"
        placeholder='Search Communities'
        className='no-focus text-light-1 border-0 bg-dark-2 outline-none'
        onChange={(e)=>setSearch(e.target.value)}
        value={search}
      />
    </div>
  );
};

export default SearchBar;
