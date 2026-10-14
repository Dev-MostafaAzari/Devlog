import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import NavbarSearch from "./NavbarSearch";
import NavbarProfile from "./NavbarProfile";

const Navbar = () => {
    return (
        <div className="w-screen h-[100px] p-[10px] flex justify-center items-center">
            <div className="w-full p-[5px] flex justify-between items-center gap-[10px] md:justify-evenly ">
                <div className="flex-2 flex justify-between items-center md:justify-evenly">
                    <Image src="/images/Devlog.png" alt="logo" width={75} height={75} className=""/>
                    <div className="hidden justify-evenly items-center gap-[20px] md:flex lg:gap-[50px] xl:gap-[70px] sm:justify-between">
                        <Link href={"/"} className="" >Home</Link>
                        <Link href={"/"} className="" >Articles</Link>
                        <Link href={"/"} className="" >Categoryes</Link>
                        <Link href={"/"} className="" >About</Link>
                    </div>
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