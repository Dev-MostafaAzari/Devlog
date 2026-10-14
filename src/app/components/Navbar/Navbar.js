import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = () => {
    return (
        <div className="w-screen p-[10px]">
            <div className="w-full p-[5px] flex justify-between items-center md:justify-evenly">
                <Image src="/images/Devlog.png" alt="logo" width={75} height={75} className=""/>
                <div className="hidden justify-right items-center gap-[20px] md:flex sm:justify-between">
                    <Link href={"/"} className="" >Home</Link>
                    <Link href={"/"} className="" >Articles</Link>
                    <Link href={"/"} className="" >Categoryes</Link>
                    <Link href={"/"} className="" >About</Link>
                </div>
                <div className="flex justify-center items-center p-[5px] md:hidden">
                    <HamburgerMenu/>
                </div>
                <div className="">
                    
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;