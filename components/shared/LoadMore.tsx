"use client"
import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import { FetchAction } from "@/app/action";
import Image from "next/image";

let page = 2;

type Props={
  isNextPage: boolean | undefined,
  userId:string| undefined
}

type ThreadCard =JSX.Element

type ThreadProps = {
  id:string,
  parentId:string,
  content:string,
  author: {
    userId: string;
    name: string;
    image: string;
};
  createdAt:string,
  children:[]
}


const LoadMore = ({ isNextPage,userId }:Props) => {

    const [data, setData] = useState<ThreadCard[]>([]);
    const [NextPage, setIsNextPage] = useState<boolean | undefined>(isNextPage);
    const { ref, inView } = useInView();
    const [loading, setLoading] = useState(false);


   const fetchData = async () => {
        setLoading(true);
        try {
            const new_data: any  = await FetchAction(page,userId).then((res)=>{
            setData([...data,...res.data])
            setIsNextPage(res.isNextPage)
            page++
            })
        } catch (error) {
            console.error('Fetch error:', error);
        } finally {
            setLoading(false);
        }
    };

 
      useEffect(() => {
        if (inView && !loading && NextPage) {
            fetchData();
        }
       }, [inView, loading, NextPage]);
       
           

    return (
        <div>
            <section>
               <div className='flex flex-col gap-10 '>
                    {data}
                </div>
                
                {NextPage && (
                    <div className="flex justify-center items-center mt-5 " ref={ref}>
                         <Image src="/loader.svg" alt="loader" width={24} height={24} />
                    </div>
                )} 
            </section>
        </div>
    );
};

export default LoadMore;
