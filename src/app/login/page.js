"use client";
import AlertLogin from "../components/Alerts/AlertLogin";
import SignInLoading from "../components/Loading/SignInLoading";
import { useEffect, useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import Image from "next/image";
import { LoginUserWithPass } from "../redux/features/LoginSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";


const UserLogin = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [mobile , setMobile] = useState("");
    const [password , setPassword] = useState("");
    const {loading2, error2, errorMessage2, isLogedIn2} = useSelector(state => state.loginSlice);
    useEffect(()=>{
        if(isLogedIn2)
        {
            router.push("/");
        }
    },[isLogedIn2]);
    const submit = (e)=>{
        e.preventDefault();
        dispatch(LoginUserWithPass({mobile : mobile , password : password}));
    };
    return (
        <div className="w-screen h-[calc(100vh-175px)] md:h-[calc(100vh-100px)] overflow-y-scroll md:scrollbar-none relative xl:flex xl:justify-center">
            {error2 ? <AlertLogin ErrorMessage={errorMessage2}/> : null}
            <div className="w-full h-full p-[30px] xl:w-[1366px]">
                <div className="w-full h-full flex justify-center items-center flex-col lg:flex-row">
                    <div className="w-full h-full hidden flex-2 xl:flex-2 rounded-md overflow-hidden md:flex items-center">
                        <Image src={"/images/login.jpg"}  quality={100} width={100} height={100} sizes="100vw" alt="pic" className="w-full h-full object-contain"/>
                    </div>
                    <div className="w-full h-full flex md:flex-2 flex-col gap-[10px] justify-center p-[10px]">
                        <div className="w-full h-full flex-1 flex flex-col items-center justify-end">
                            <h1 className="text-[30px] text-gray-600">Login</h1>
                            <h2 className="text-[22px] text-gray-600">Sign in to your account to continue</h2>
                        </div>
                        <form onSubmit={(e)=>{submit(e)}} className="w-full h-full flex-3 md:flex-2 flex flex-col gap-[5px]">
                            <div className="flex gap-[10px] flex-col justify-center p-[10px]">
                                <span className="text-[20px]">
                                    Phone Number
                                </span>
                                <input type="text" value={mobile} onChange={(e)=>{setMobile(e.target.value)}} className="border-[1px] border-gray-300  p-[10px] outline-gray-400" placeholder="Phone Number" required/>
                            </div>
                            <div className="flex gap-[10px] flex-col justify-center p-[10px]">
                                <span className="text-[20px]">
                                    Password
                                </span>
                                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="border-[1px] border-gray-300 p-[10px] outline-gray-400" placeholder="Password" required/>
                            </div>
                            <div className="flex justify-end items-center p-[10px]">
                               <Link className="text-blue-500 hover:text-blue-600" href={"/register"}>Create your Account</Link>
                            </div>
                            <div className="flex justify-center items-center p-[10px]">
                                <button disabled={loading2 ? true : false}  type="submit" className={`w-[130px] h-[45px] p-[10px] bg-blue-700 text-white rounded-md cursor-pointer ${loading2 ? "" : "hover:bg-blue-900"}`}>{loading2 ? <SignInLoading/> : "Login"}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default UserLogin;