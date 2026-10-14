"use client";
import { MenuIcon } from "lucide-react";
import { useState } from "react";


const HamburgerMenu = () => {
    const [open,setOpen] = useState(false);
    // need to add modal for hamburgarMenu
    return (
        <div className="">
            <button className="">
                <MenuIcon size={30} color="#070505" strokeWidth={2}/>
            </button>
        </div>
    );
}
 
export default HamburgerMenu;