"use client";
import { motion } from "framer-motion";
import { LoaderCircle } from "lucide-react";

const ProfilePicLoading = () => {
    return (
        <motion.div initial={{rotate:"0deg"}} animate={{rotate:"360deg"}} transition={{duration:3,repeat:Infinity}} className="w-full h-full text-gray-600">
            <LoaderCircle strokeWidth={2} className="w-full h-full"/>
        </motion.div>
    );
}
 
export default ProfilePicLoading;