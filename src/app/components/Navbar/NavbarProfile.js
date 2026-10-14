import Image from "next/image";
import Link from "next/link";


const NavbarProfile = () => {
    const isLogin = true;
    return (
        <div className="flex-1 flex justify-left items-center">
            {isLogin ? 
                <Link href={"/"}>
                    <Image src={"/images/mypic.jpg"} width={40} height={40} alt="profilePic" className="rounded-[50%]"/>
                </Link>
                :
                <Link href={"/"} className="p-[10px] bg-blue-600 text-white rounded-md">Login</Link>
            }
        </div>
    );
}
 
export default NavbarProfile;