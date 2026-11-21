"use client";

import { ChevronLeft, ChevronRight, Ellipsis } from "lucide-react";
import Link from "next/link";

const Pagination = ({lastPage,currentPage}) => {
    let page = Number(currentPage);
    let lastPrevPage = page <=4 ? 0 : page-2;
    let lastNextPage = page + 4;
    return (
        <div className="w-full flex justify-center items-center absolute bottom-[10px]">
            <div className="flex flex-row justify-between items-center gap-[10px]">
                <Link href={page === 1 ? `/user/myarticles?page=${page}` : `/user/myarticles?page=${page-1}`}><ChevronLeft width={20} height={20} className="cursor-pointer text-gray-500/60 hover:text-gray-700"/></Link>
                <div className={`flex gap-[10px] items-center ${(page-1) >=5  ? "" : "hidden"}`}>
                    <Link href={`/user/myarticles?page=1`} className={`PaginationLink bg-gray-400/35`}>1</Link>
                    <Ellipsis width={20} height={20} className="text-gray-500/50"/>
                </div>
                {Array.from({length:lastPage === 0 ? 1 : lastPage},(_,index)=>index).map((item,index) =>(
                    <Link key={index} href={`/user/myarticles?page=${index+1}`} className={`PaginationLink ${(index+1) < lastPrevPage || (index+1) > lastNextPage ? "hidden" : "" } ${(index+1) == page ? "bg-blue-700 text-white":"bg-gray-400/35 text-black"}`}>
                        {index+1}
                    </Link>
                ))}
                <div className={`flex gap-[10px] items-center ${(Number(lastPage)-page) >=5 ? "" : "hidden"}`}>
                    <Ellipsis width={20} height={20} className="text-gray-500/50"/>
                    <Link href={`/user/myarticles?page=${lastPage}`} className={`PaginationLink bg-gray-400/35`}>{lastPage}</Link>
                </div>
                <Link href={page === lastPage ? `/user/myarticles?page=${lastPage}` : `/user/myarticles?page=${page+1}`}><ChevronRight width={20} height={20} className="cursor-pointer text-gray-500/60 hover:text-gray-700"/></Link>
            </div>
        </div>
    );
}
 
export default Pagination;