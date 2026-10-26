import { SearchIcon } from "lucide-react";
import Link from "next/link";

const NavbarSearch = () => {
    return (
        <div className="flex-2 lg:flex-1 bg-gray-100 flex items-center gap-[5px] p-[5px] rounded-sm">
            <Link  href={"/"} className="cursor-pointer">
                <SearchIcon size={20} color="gray" strokeWidth={1}/>
            </Link>
            <input className="outline-none w-full" type="text" placeholder="Search Articles"/>
        </div>
    );
}
 
export default NavbarSearch;