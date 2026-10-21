"use client";
import { motion } from "framer-motion";
import { CircleX } from "lucide-react";


const AlertRegister = ({ErrorMessage}) => {
    return (
        <motion.div initial={{opacity:1}} animate={{opacity:0,display:"none"}} transition={{duration:1,delay:1}} className="absolute   w-full h-[100vh] lg:h-full p-[10px] md:p-[15px] flex justify-center items-center backdrop-blur-sm rounded-sm overflow-hidden">
            <div className="flex flex-col w-[200px] h-[200px] p-[10px] md:w-[400px] h-[400px] bg-red-500 rounded-md">
                <div className="flex-1 flex justify-center items-center p-[10px]">
                    <CircleX size={70} strokeWidth={2}/>
                </div>
                <div className="flex-1">
                    <p className="text-[16px] text-center font-bold text-black md:text-[20px]">{ErrorMessage}</p>
                </div>
            </div>
        </motion.div>
    );
}
 
export default AlertRegister;