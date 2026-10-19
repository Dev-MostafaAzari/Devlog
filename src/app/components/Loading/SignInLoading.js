"use client";
import { motion } from "framer-motion";
import { polygon } from "framer-motion/client";


const SignInLoading = () => {
    return (
        <div className="w-full h-full flex justify-center items-center bg-blue-700 relative">
            <motion.div initial={{clipPath:"polygon(50% 0% ,50% 50% ,100% 70% ,100% 0%)",rotate:"0deg"}} animate={{rotate:"360deg"}}
             transition={{duration:1.5,ease:"easeInOut",repeat:Infinity}} className="bg-white w-[30px] h-[30px] rounded-[50%]">
                
            </motion.div>
            <div className="bg-blue-700 w-[20px] h-[20px]  rounded-[50%] absolute">

            </div>
        </div>
    );
}
 
export default SignInLoading;