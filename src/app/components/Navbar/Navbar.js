import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu";
import NavbarSearch from "./NavbarSearch";
import NavbarProfile from "./NavbarProfile";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
    return (
        <div className="w-screen h-[100px] p-[10px] flex justify-center items-center">
            <div className="w-full 2xl:w-[1366px] p-[5px] flex justify-between items-center gap-[10px] md:justify-evenly ">
                <div className="flex-2 flex justify-between items-center md:justify-evenly">
                    <Image src="/images/Devlog.png" alt="logo" width={75} height={75} className=""/>
                    <NavbarLinks/>
                    <div className="flex justify-center items-center p-[5px] md:hidden">
                        <HamburgerMenu/>
                    </div>
                </div>
                <div className="p-[5px] flex-1 hidden md:flex gap-[20px]">
                    <NavbarSearch/>
                    <NavbarProfile/>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;