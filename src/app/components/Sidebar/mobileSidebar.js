"use client";
import { LogoutUser } from "@/app/redux/features/LoginSlice";
import { CloseSidebar } from "@/app/redux/features/UiSlice";
import { motion } from "framer-motion";
import { LayoutDashboard, LibraryBig, LogOut, SquarePlus, User, X } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
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
    const {isLogedIn} = useSelector(state => state.loginSlice);
    useEffect(()=>{},[isLogedIn]);
    return (
        <div className="h-[100vh] w-[100%] md:hidden">
            <motion.div initial={sidebarContainer.init} animate={sidebar ? sidebarContainer.open : sidebarContainer.close} transition={{duration:0.5}} className={`h-[100vh] w-[100%] z-[999] absolute top-[0px] backdrop-blur-sm`}>
                <div className="w-full h-full relative">
                    <motion.div initial={sidebarAnimation.init} animate={sidebar ? sidebarAnimation.open : sidebarAnimation.close} transition={{duration:0.5,ease:"easeInOut"}}  className="h-full w-[50%] bg-blue-900/90 flex flex-col absolute">
                        <div className="w-full flex justify-end p-[10px]">
                            <X onClick={()=>{dispatch(CloseSidebar())}} strokeWidth={2} height={30} width={30} className="text-white"/>
                        </div>
                        <div className="w-full h-full flex items-center justify-center">
                            {isLogedIn  ? 
                                    <motion.div variants={sidebarContent}  animate={sidebar? "open": "close"} className="flex flex-col gap-[10px] text-[20px] justify-center p-[10px]">
                                        <motion.div variants={sidebarContent} className="MobileSidebarLinkContainer">
                                            <LayoutDashboard strokeWidth={2} width={30} height={30}/>
                                            <Link onClick={()=>{dispatch(CloseSidebar())}} href={"/user"}>Dashboard</Link>
                                        </motion.div>
                                        <motion.div variants={sidebarContent} className="MobileSidebarLinkContainer">
                                            <LibraryBig strokeWidth={2} width={30} height={30}/>
                                            <Link onClick={()=>{dispatch(CloseSidebar())}} href={"/user/myarticles"}>My Articles</Link>
                                        </motion.div>
                                        <motion.div variants={sidebarContent} className="MobileSidebarLinkContainer">
                                            <SquarePlus strokeWidth={2} width={30} height={30}/>
                                            <Link onClick={()=>{dispatch(CloseSidebar())}} href={"/user/addarticle"}>Add Article</Link>
                                        </motion.div>
                                        <motion.div variants={sidebarContent} className="MobileSidebarLinkContainer">
                                            <User strokeWidth={2} width={30} height={30}/>
                                            <Link onClick={()=>{dispatch(CloseSidebar())}} href={"/user/profile"}>Profile</Link>
                                        </motion.div>
                                        <motion.div variants={sidebarContent} className="w-full flex justify-start items-center pt-[10px] text-red-500">
                                            <div className="MobileSidebarLinkContainer">
                                                <LogOut strokeWidth={2} width={30} height={30} className="text-red-500"/>
                                                <Link onClick={()=>{dispatch(CloseSidebar());dispatch(LogoutUser())}} href={"/"}>Logout</Link>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                :
                                <motion.div variants={sidebarContent}  animate={sidebar? "open": "close"} className="flex flex-col gap-[10px] text-[20px] justify-center p-[10px]">
                                    <motion.div variants={sidebarContent} className="text-center text-white">
                                        You need to Login to access this part
                                    </motion.div>
                                    <motion.div variants={sidebarContent} className="flex justify-center items-center p-[10px]">
                                        <Link href={"/login"} onClick={()=>{dispatch(CloseSidebar())}} className="bg-amber-50 text-blue-900 p-[6px] rounded-lg">Login</Link>
                                    </motion.div>
                                </motion.div>
                            }
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
 
export default MobileSidebar;