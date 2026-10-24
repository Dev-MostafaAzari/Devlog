"use client";
import { OpenSidebar } from "@/app/redux/features/UiSlice";
import { MenuIcon } from "lucide-react";
import { useDispatch } from "react-redux";


const HamburgerMenu = () => {
    const dispatch = useDispatch();
    return (
        <div className="">
            <button onClick={()=>{dispatch(OpenSidebar())}} className="">
                <MenuIcon size={30} color="#070505" strokeWidth={2}/>
            </button>
        </div>
    );
}
 
export default HamburgerMenu;