"use client";
import { loginUser } from "@/app/redux/features/LoginSlice";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import ProfilePicLoading from "../Loading/ProfilePicLoading";


const NavbarProfile = () => {
    const {isRegistered} = useSelector(state => state.registerSlice);
    const {data , loading ,isLogedIn,isLogedIn2} = useSelector(state => state.loginSlice);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loginUser())
    },[isRegistered,isLogedIn2])

    return (
        <div className="flex-1 flex justify-left items-center">
            {loading ? 
                <div className="w-[40px] h-[40px] rounded-[50%]">
                    <ProfilePicLoading/>
                </div>
                :
                (isLogedIn ? 
                    <Link href={"/"}>
                        <Image src={`${process.env.NEXT_PUBLIC_API_URL}${data?.image}`} width={40} height={40} alt="profilePic" className="rounded-[50%]"/>
                    </Link>
                    :
                    <Link href={"/login"} className="p-[10px] bg-blue-600 text-white rounded-md">Login</Link>
                )
            }
        </div>
    );
}
 
export default NavbarProfile;