"use client";
import { CloseSidebar } from "@/app/redux/features/UiSlice";
import { motion } from "framer-motion";
import { LayoutDashboard, LibraryBig, LogOut, SquarePlus, User, X } from "lucide-react";
import Link from "next/link";
import { useDispatch , useSelector } from "react-redux";

const sidebarAnimation = {
    init : 
    {
        x : "-100%",
        
    },
    close:{
        x : "-100%",
    },
    open:{
        x:0,
        display:"flex"
    }
};
const sidebarContainer = {
    init : 
    {
        display : "none"
    },
    close:
    {
        display : "none"
    },
    open : 
    {
        display : "block"
    }
}
const sidebarContent = {
    open : {
        y : 0,
        opacity : 1,
        transition : {
            duration : 0.4,
            staggerChildren : 0.1
        }
    },
    close : {
        y : 100,
        opacity : 0,
        transition : {
            duration : 0.3,
            staggerChildren : 0.1
        }
    },
    
}

const MobileSidebar = () => {
    const dispatch = useDispatch();
    const {sidebar} = useSelector(state => state.uiSlice);
    return (
        <motion.div initial={sidebarContainer.init} animate={sidebar ? sidebarContainer.open : sidebarContainer.close} transition={{duration:0.5}} className={`h-[100vh] w-[100%] z-[999] absolute top-[0px] backdrop-blur-sm`}>
            <div className="w-full h-full relative">
                <motion.div initial={sidebarAnimation.init} animate={sidebar ? sidebarAnimation.open : sidebarAnimation.close} transition={{duration:0.5,ease:"easeInOut"}}  className="h-full w-[50%] bg-slate-200 flex flex-col absolute">
                    <div className="w-full flex justify-end p-[10px]">
                        <X onClick={()=>{dispatch(CloseSidebar())}} strokeWidth={2} height={30} width={30} className="text-gray-600"/>
                    </div>
                    <div className="w-full h-full flex items-center justify-center">
                        <motion.div variants={sidebarContent}  animate={sidebar? "open": "close"} className="flex flex-col gap-[10px] text-[20px] justify-center p-[10px]">
                            <motion.div variants={sidebarContent} className="w-full flex justify-start items-center gap-[10px]">
                                <LayoutDashboard strokeWidth={2} width={30} height={30} className="text-gray-500"/>
                                <Link onClick={()=>{dispatch(CloseSidebar())}} className="font-medium" href={"/"}>Dashboard</Link>
                            </motion.div>
                            <motion.div variants={sidebarContent} className="w-full flex justify-start items-cente gap-[10px]">
                                <LibraryBig strokeWidth={2} width={30} height={30} className="text-gray-500"/>
                                <Link onClick={()=>{dispatch(CloseSidebar())}} className="font-medium" href={"/"}>My Articles</Link>
                            </motion.div>
                            <motion.div variants={sidebarContent} className="w-full flex justify-start items-center gap-[10px]">
                                <SquarePlus strokeWidth={2} width={30} height={30} className="text-gray-500"/>
                                <Link onClick={()=>{dispatch(CloseSidebar())}} className="font-medium" href={"/"}>Add Article</Link>
                            </motion.div>
                            <motion.div variants={sidebarContent} className="w-full flex justify-start items-center gap-[10px]">
                                <User strokeWidth={2} width={30} height={30} className="text-gray-500"/>
                                <Link onClick={()=>{dispatch(CloseSidebar())}} className="font-medium" href={"/profile"}>Profile</Link>
                            </motion.div>
                            <motion.div variants={sidebarContent} className="w-full flex justify-start items-center pt-[10px] text-red-500">
                                <div className="w-full flex justify-start items-center gap-[10px]">
                                    <LogOut strokeWidth={2} width={30} height={30}/>
                                    <Link onClick={()=>{dispatch(CloseSidebar())}} className="font-medium" href={"/"}>Logout</Link>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
 
export default MobileSidebar;