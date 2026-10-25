"use client";
import { LayoutDashboard, LibraryBig, LogOut, SquarePlus, User } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
    return (
        <div className="w-full h-full flex flex-col p-[10px] shadow-gray-400 shadow-md rounded-[15px]">
            <div className="w-full h-full flex flex-col flex-3 gap-[10px]">
                <div className="w-full flex justify-start items-center gap-[10px] p-[10px]">
                    <Link className="font-medium w-full h-full flex gap-[10px] items-center bg-gray-200 p-[10px] rounded-md" href={"/user/dashboard"}>
                        <LayoutDashboard strokeWidth={2} width={30} height={30} className="text-gray-500"/>
                        <span>Dashboard</span>
                    </Link>
                </div>
                <div className="w-full flex justify-start items-cente gap-[10px] p-[10px]">
                    <Link className="font-medium w-full h-full flex gap-[10px] items-center bg-gray-200 p-[10px] rounded-md" href={"/user/myarticles"}>
                        <LibraryBig strokeWidth={2} width={30} height={30} className="text-gray-500"/>
                        <span>My Articles</span>
                    </Link>
                </div>
                <div className="w-full flex justify-start items-center gap-[10px] p-[10px]">
                    <Link className="font-medium w-full h-full flex gap-[10px] items-center bg-gray-200 p-[10px] rounded-md" href={"/user/addarticle"}>
                        <SquarePlus strokeWidth={2} width={30} height={30} className="text-gray-500"/>
                        <span>Add Article</span>
                    </Link>
                </div>
                <div className="w-full flex justify-start items-center gap-[10px] p-[10px]">
                    <Link className="font-medium w-full h-full flex gap-[10px] items-center bg-gray-200 p-[10px] rounded-md" href={"/user/profile"}>
                        <User strokeWidth={2} width={30} height={30} className="text-gray-500"/>
                        <span>Profile</span>
                    </Link>
                </div>
                
            </div>
            <div className="w-full h-full flex flex-2 xl:flex-1">
                <div className="w-full flex justify-start items-start pl-[10px] text-red-500">
                    <div className="flex flex-row justify-start items-center gap-[10px]">
                        <button className="font-medium flex gap-[10px] items-center cursor-pointer" href={"/"}><LogOut strokeWidth={2} width={30} height={30}/>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Sidebar;