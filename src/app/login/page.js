"use client";
import AlertLogin from "../components/Alerts/AlertLogin";
import SignInLoading from "../components/Loading/SignInLoading";
import { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import Image from "next/image";


const UserLogin = () => {
    const {loading , error , errorMessage2} = useSelector(state => state.loginSlice);
    return (
        <div className="w-screen h-[calc(100vh-175px)] md:h-[calc(100vh-100px)] overflow-y-scroll md:scrollbar-none relative xl:flex xl:justify-center">
            {error ? <AlertLogin ErrorMessage={errorMessage2}/> : null}
            <div className="w-full h-full p-[30px] xl:w-[1366px]">
                <div className="w-full h-full flex justify-center items-center flex-col lg:flex-row">
                    <div className="w-full h-full hidden flex-2 xl:flex-2 rounded-md overflow-hidden md:flex items-center">
                        <Image src={"/images/login.jpg"}  quality={100} width={100} height={100} sizes="100vw" alt="pic" className="w-full h-full object-contain"/>
                    </div>
                    <div className="w-full h-full flex md:flex-2 flex-col gap-[10px] justify-center p-[10px]">
                        <div className="w-full h-full flex-1 flex flex-col items-center justify-end">
                            <h1 className="text-[30px] text-gray-600">Login</h1>
                            <h2 className="text-[22px] text-gray-600">Enter your account</h2>
                        </div>
                        <form className="w-full h-full flex-3 md:flex-2 flex flex-col gap-[5px]">
                            <div className="flex gap-[10px] flex-col justify-center p-[10px]">
                                <span className="text-[20px]">
                                    Phone Number
                                </span>
                                <input type="text" className="border-[1px] border-gray-300  p-[10px] outline-gray-400" placeholder="Phone Number"/>
                            </div>
                            <div className="flex gap-[10px] flex-col justify-center p-[10px]">
                                <span className="text-[20px]">
                                    Password
                                </span>
                                <input type="password" className="border-[1px] border-gray-300 p-[10px] outline-gray-400" placeholder="Password"/>
                            </div>
                            <div className="flex justify-center items-center p-[10px]">
                                <button disabled={loading ? true : false}  type="submit" className={`w-[130px] h-[45px] p-[10px] bg-blue-700 text-white rounded-md cursor-pointer ${loading ? "" : "hover:bg-blue-900"}`}>{loading ? <SignInLoading/> : "Login"}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default UserLogin;