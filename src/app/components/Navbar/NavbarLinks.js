"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

//link underline variant
const linkUnderLine = {
    init:{
        width : "0px",
        opacity: 0
    },
    show : {
        width : "100%",
        opacity: 1,
        transition : {
            duration: 0.3,
        }
    },
    hide : {
        width : "0px",
        opacity: 0,
        transition : {
            duration: 0.2,
        }
    }
}

const NavbarLinks = () => {
    const router = useRouter();
    const path = usePathname();
    const [pathName , setPathName] = useState(path);
    useEffect(()=>{
        setPathName(path)
    },[path,router])
    return (
        <div className="hidden text-gray-500 [&_div]:hover:text-blue-900 font-medium justify-evenly sm:justify-between items-center gap-[20px] lg:gap-[50px] xl:gap-[70px] md:flex  ">
            <div className="flex flex-col">
                <Link className={`${pathName === "/" ? "text-blue-900" : ""}`} href={"/"}>Home</Link>
                <motion.hr variants={linkUnderLine} initial={"init"} animate={pathName === "/" ? "show" : "hide"} className="border-[1px] border-blue-900"/>
            </div>
            <div className="flex flex-col">
                <Link className={`${pathName === "/Articles" ? "text-blue-900" : ""}`} href={"/"}>Articles</Link>
                <motion.h variants={linkUnderLine} initial={"init"} animate={pathName === "/Articles" ? "show" : "hide"} className="border-[1px] border-blue-900"/>
            </div>
            <div className="flex flex-col">
                <Link className={`${pathName === "/Categoryes" ? "text-blue-900" : ""}`} href={"/"}>Categoryes</Link>
                <motion.h variants={linkUnderLine} initial={"init"} animate={pathName === "/Categoryes" ? "show" : "hide"} className="border-[1px] border-blue-900"/>
            </div>
            <div className="flex flex-col">
                <Link className={`${pathName === "/About" ? "text-blue-900" : ""}`} href={"/"}>About</Link>
                <motion.h variants={linkUnderLine} initial={"init"} animate={pathName === "/About" ? "show" : "hide"} className="border-[1px] border-blue-900"/>
            </div>
        </div>
    );
}
 
export default NavbarLinks;