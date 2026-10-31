"use client";
import { LogoutUser } from "@/app/redux/features/LoginSlice";
import { icons, LogOut } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Sidebar = () => {
    const dispatch = useDispatch();
    const sidebarLinks = [{title:"Dashboard",link:"/user",icon:"LayoutDashboard"},{title:"My Articles",link:"/user/myarticles",icon:"LibraryBig"}
        ,{title:"Add Article",link:"/user/addarticle",icon:"SquarePlus"},{title:"Profile",link:"/user/profile",icon:"User"}
    ]; // sidebar Links
    const [activeTab,SetActiveTab]=useState("Dashboard");

    return (
        <div className="w-full h-full flex flex-col p-[10px] shadow-gray-400 shadow-md rounded-[15px] overflow-scroll scrollbar-none">
            <div className="w-full flex flex-col flex-3 gap-[10px]">
                {sidebarLinks.map((item) => {
                    const Icon = icons[item.icon];
                    return(
                        <div key={item.title} className="w-full flex justify-start items-center gap-[10px] p-[10px]">
                            <Link onClick={()=>{SetActiveTab(item.title)}} className={`font-medium w-full h-full flex gap-[10px] items-center p-[10px] rounded-md ${activeTab === item.title ? "bg-blue-600 text-white":"bg-gray-200 text-gray-500"}`} href={item.link}>
                                <Icon strokeWidth={2} width={30} height={30}/>
                                <span>{item.title}</span>
                            </Link>
                        </div>
                    )
                })}
            </div>
            <div className="w-full flex flex-2 xl:flex-1">
                <div className="w-full flex justify-start items-start pl-[10px] text-red-500">
                    <div className="flex flex-row justify-start items-center gap-[10px]">
                        <button onClick={()=>{dispatch(LogoutUser())}} className="font-medium flex gap-[10px] items-center cursor-pointer"><LogOut strokeWidth={2} width={30} height={30}/>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Sidebar;