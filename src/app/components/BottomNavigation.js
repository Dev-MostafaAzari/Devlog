"use client";
import { HomeIcon, SquareChartGantt, SquareLibrary, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ButtomNavigation = () => {
    const {isLogedIn ,data} = useSelector(state => state.loginSlice);
    useEffect(()=>{
        
    },[isLogedIn])
    return (
        <div className="w-screen h-[75px] absolute bottom-[0px] p-[10px] md:hidden z-999 bg-white">
            <div className="w-full flex justify-evenly items-center gap-[3px]">
                <div className="p-[5px] flex justify-center">
                    <Link href={"/"} className="flex flex-col items-center gap-[3px] text-[12px] text-[#285A48]"><HomeIcon size={25} color="#285A48" strokeWidth={2}/><span>Home</span></Link>
                </div>
                <div className="p-[5px] flex justify-center">
                    <Link href={"/"} className="flex flex-col items-center gap-[3px] text-[12px] text-[#285A48]"><SquareChartGantt size={25} color="#285A48" strokeWidth={2}/><span>Articles</span></Link>
                </div>
                <div className="p-[5px] flex justify-center">
                    <Link href={"/"} className="flex flex-col items-center gap-[3px] text-[12px] text-[#285A48]"><SquareLibrary size={25} color="#285A48" strokeWidth={2}/><span>Categoryes</span></Link>
                </div>
                <div className="p-[5px] flex justify-center">
                    <Link href={isLogedIn ? "/user" : "/login"} className="flex flex-col items-center gap-[3px] text-[12px] text-[#285A48]">
                        {isLogedIn ? 
                            <Image src={`${process.env.NEXT_PUBLIC_API_URL}${data.image}`} width={25} height={25} alt="User" className="rounded-[50%]" />
                            :
                            <UserRound size={25} color="#285A48" strokeWidth={2}/>   
                        }
                        {isLogedIn ? 
                            <span>You</span>
                            :
                            <span>Profile</span>
                        }
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default ButtomNavigation;