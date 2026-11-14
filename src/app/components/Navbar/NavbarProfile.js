"use client";
import { loginUser } from "@/app/redux/features/LoginSlice";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import ProfilePicLoading from "../Loading/ProfilePicLoading";


const NavbarProfile = () => {
    const {isRegistered} = useSelector(state => state.registerSlice);
    const {data , loading ,isLogedIn} = useSelector(state => state.loginSlice);
    const {isUserEdited} = useSelector(state => state.userSlice);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loginUser())
    },[isRegistered,isLogedIn,isUserEdited])

    return (
        <div className="flex-1 flex justify-left items-center">
            {loading ? 
                <div className="w-[40px] h-[40px] rounded-[50%]">
                    <ProfilePicLoading/>
                </div>
                :
                (isLogedIn ? 
                    <Link href={"/user"}>
                        <Image src={`${process.env.NEXT_PUBLIC_API_URL_IMAGE}${data?.image}`} width={40} height={40} alt="profilePic" className="rounded-[50%] w-[40px] h-[40px] object-content"/>
                    </Link>
                    :
                    <Link href={"/login"} className="FormSubmitBtn hover:bg-blue-900">Login</Link>
                )
            }
        </div>
    );
}
 
export default NavbarProfile;