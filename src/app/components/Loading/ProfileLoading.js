import { motion } from "framer-motion";

const ProfileLoading = () => {
    return (
        <>
            <div className="flex-1 flex  flex justify-center items-center">
                <div className="relative">
                    <div className="w-[150px] h-[150px] rounded-[50%]">
                        <motion.div initial={{ background: "linear-gradient(110deg , #a2ada9d7 30%, #ffffff 50%, #a2ada9d7 70%)", backgroundSize: "250% 100%" }} className="w-[150px] h-[150px] rounded-[50%]" animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}></motion.div>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-[10px]">
                <div className="flex items-center p-[5px]">
                    <motion.div initial={{ background: "linear-gradient(110deg , #a2ada9d7 30%, #ffffff 50%, #a2ada9d7 70%)", backgroundSize: "250% 100%" }} className="w-[150px] h-[20px]" animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}></motion.div>
                </div>
                <div className="flex items-center p-[5px]">
                    <motion.div initial={{ background: "linear-gradient(110deg , #a2ada9d7 30%, #ffffff 50%, #a2ada9d7 70%)", backgroundSize: "250% 100%" }} className="w-[170px] h-[20px]" animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}></motion.div>
                </div>
                <div className="flex items-center p-[5px]">
                    <motion.div initial={{ background: "linear-gradient(110deg , #a2ada9d7 30%, #ffffff 50%, #a2ada9d7 70%)", backgroundSize: "250% 100%" }} className="w-[190px] h-[20px]" animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}></motion.div>
                </div>
                <div className="flex items-center p-[5px]">   
                    <motion.div initial={{ background: "linear-gradient(110deg , #a2ada9d7 30%, #ffffff 50%, #a2ada9d7 70%)", backgroundSize: "250% 100%" }} className="w-[200px] h-[20px]" animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}></motion.div>
                </div>
            </div>
        
        </>
    );
}
 
export default ProfileLoading;