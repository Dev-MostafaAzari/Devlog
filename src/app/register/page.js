"use client";
import Image from "next/image";
import {z} from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useSelector , useDispatch } from "react-redux";
import { RegisterUser } from "../redux/features/RegisterSlice";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


const schema = z.object({
    name : z.string().min(3,"Username must be at least 3 charecters").regex(/^[a-zA-Z]+[0-9]+$/, "Username must contain letters and number"),
    mobile : z.string().min(10,"phone number length must be at least 10 ").max(11,"max 11").regex(/^[0-9]+$/,"must contains only numbers"),
    password : z.string().min(6,"password length must be at least 6 "),
    confirmPassword : z.string(),
}).refine((data)=> data.password === data.confirmPassword , {
    message : "password do not match",
    path : ["confirmPassword"]
});

const Register = () => {
    const {isLoading,isRegistered,error,errorMessage} = useSelector(state => state.registerSlice);
    const {register , handleSubmit ,watch, formState:{errors}} = useForm({resolver:zodResolver(schema)});
    const userData = {name:watch("name"),mobile:watch("mobile"),password:watch("password")};
    const dispatch = useDispatch();
    const router = useRouter();
    useEffect(()=>{
        if(isRegistered)
        {
            setTimeout(()=>{
                router.push("/")
            },3000)
        }
    },[isRegistered])
    const onSubmit =(e)=>{
        dispatch(RegisterUser(userData));
    }

    return (
        <div className="w-screen h-[calc(100vh-175px)] md:h-[calc(100vh-100px)] overflow-y-scroll">
            <div className="w-full h-full p-[30px]">
                <div className="w-full h-full flex justify-center items-center">
                    <div className="w-full h-full hidden flex-1 rounded-md overflow-hidden md:flex">
                        <Image src={"/images/abs.jpg"}  quality={100} width={100} height={100} sizes="100vw" alt="pic" className="w-full h-full object-cover"/>
                    </div>
                    <div className="w-full h-full flex md:flex-2 flex-col gap-[10px] justify-center p-[10px]">
                        <div className="w-full h-full flex-1 flex flex-col items-center justify-end">
                            <h1 className="text-[30px] text-gray-600">Register</h1>
                            <h2 className="text-[22px] text-gray-600">Create your account</h2>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full flex-3 flex flex-col gap-[5px]">
                            <div className="flex gap-[10px] flex-col justify-center p-[10px]">
                                <span className="text-[20px]">
                                    Full Name
                                </span>
                                <input {...register("name")} type="text" className="border-[1px] border-gray-300  p-[10px] outline-gray-400" placeholder="Enter Name"/>
                                <span>{errors.name?.message}</span>
                            </div>
                            <div className="flex gap-[10px] flex-col justify-center p-[10px]">
                                <span className="text-[20px]">
                                    Phone Number
                                </span>
                                <input {...register("mobile")} type="text" className="border-[1px] border-gray-300 p-[10px] outline-gray-400" placeholder="Enter Mobile"/>
                                <span>{errors.mobile?.message}</span>
                            </div>
                            <div className="flex gap-[10px] flex-col justify-center p-[10px]">
                                <span className="text-[20px]">
                                    Password
                                </span>
                                <input {...register("password")} type="password" className="border-[1px] border-gray-300 p-[10px] outline-gray-400" placeholder="Enter Password"/>
                                <span>{errors.password?.message}</span>
                            </div>
                            <div className="flex gap-[10px] flex-col justify-center p-[10px]">
                                <span className="text-[20px]">
                                    Confirm Password
                                </span>
                                <input {...register("confirmPassword")} type="password" className="border-[1px] border-gray-300 p-[10px] outline-gray-400" placeholder="Confirm Password"/>
                                <span>{errors.confirmPassword?.message}</span>
                            </div>
                            <div className="flex justify-center items-center p-[10px]">
                                <button type="submit" className="p-[10px] bg-blue-700 text-white rounded-md cursor-pointer hover:bg-blue-900">Create Account</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Register;