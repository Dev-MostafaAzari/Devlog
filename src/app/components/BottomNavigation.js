"use client";
import { HomeIcon, SquareChartGantt, SquareLibrary, UserRound } from "lucide-react";
import Link from "next/link";

const ButtomNavigation = () => {
    
    return (
        <div className="w-screen absolute bottom-[0px] p-[10px] md:hidden">
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
                    <Link href={"/"} className="flex flex-col items-center gap-[3px] text-[12px] text-[#285A48]"><UserRound size={25} color="#285A48" strokeWidth={2}/><span>Profile</span></Link>
                </div>
            </div>
        </div>
    );
}
 
export default ButtomNavigation;