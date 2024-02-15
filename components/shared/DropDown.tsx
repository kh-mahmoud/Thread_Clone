'use client'
import { DeleteThread } from "@/app/action";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Image from "next/image";


  
  const DropDown = ({id}:{id:string}) => {
    return (
        <DropdownMenu >
           <DropdownMenuTrigger className="outline-none bg-dark-2 " >
               <div className='hover:bg-gray-600 rotate-90 h-8 w-8 flex items-center justify-center rounded-full'>
                    <Image
                        src={"/three-dots.svg"}
                        alt={'delete'}
                        width={15}
                        height={15}
                    />
               </div>
           </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-dark-2 text-white hover:text-black" >
                <DropdownMenuItem onClick={()=>DeleteThread(id)} className="cursor-pointer">Delete</DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    );
  }
  
  export default DropDown;
  
