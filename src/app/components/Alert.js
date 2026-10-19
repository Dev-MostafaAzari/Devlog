"use client";
import { motion } from "framer-motion";


const Alert = ({ErrorMessage}) => {
    return (
        <motion.div initial={{opacity:1}} animate={{opacity:0,display:"none"}} transition={{duration:1,delay:1}} className="absolute right-[10px] p-[10px] w-[90%] md:p-[15px] md:w-[500px] bg-red-500 rounded-sm overflow-hidden">
            <p className="text-right text-[20px] font-medium">{ErrorMessage}</p>
        </motion.div>
    );
}
 
export default Alert;