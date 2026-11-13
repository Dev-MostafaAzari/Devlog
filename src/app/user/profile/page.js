"use client";
import { useEffect, useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { loginUser } from "../../redux/features/LoginSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Pencil, Upload } from "lucide-react";
import ProfileLoading from "../../components/Loading/ProfileLoading";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UpdateUser } from "@/app/redux/features/UserSlice";

const schema = z.object({
    firstname : z.string().min(3,"at least 3 charecters").max(20,"max 20 charecters").regex(/^[A-Za-z]+$/,"Only letters Allowed"),
    lastname : z.string().min(3,"at least 3 charecters").max(20,"max 20 charecters").regex(/^[A-Za-z]+$/,"Only letters Allowed"),
    email : z.string().email("invalid email"),
    mobile : z.string().min(10,"invalid phone number").max(11,"invalid phone number"),
    image : z.custom((files)=> files instanceof FileList).optional().transform((files)=>files?.[0]).refine((file)=> !file || file.size <= 5*1024*1024,"Image must be less than 5MB"),
    social_1 : z.string().regex(/^linkedin\.com(\/.*)?$/,"invalid link"),
    social_2 : z.string().regex(/^github\.com(\/.*)?$/,"invalid link"),
    social_3 : z.string().regex(/^instagram\.com(\/.*)?$/,"invalid link")
});



const Profile = () => {
    const {register,watch,handleSubmit,reset,formState:{errors}} = useForm({resolver:zodResolver(schema)});
    const dispatch = useDispatch();
    const {isLogedIn ,data} = useSelector(state => state.loginSlice);
    const router = useRouter();
    useEffect(()=>{
        dispatch(loginUser());
        if(!isLogedIn)
        {
            router.replace("/")
        }
    },[isLogedIn,router])

    const onSubmit = (data)=>{
        /* dispatch(UpdateUser(data)); */
        console.log(data);
    }

    return (
        <>
            {data ? 
                <>
                    <div className="UserRouteParent">
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-[10px] [&_div]:w-full [&>div]:border-b-1 [&>div]:border-gray-400 ">
                            <div className="flex p-[10px]">
                                <h2 className="text-[20px] font-medium">
                                    Personal Information
                                </h2>
                            </div>
                            <div className="flex p-[10px] justify-between flex-col md:flex-row">
                                <div className="flex gap-[10px]">
                                    <Image src={`${process.env.NEXT_PUBLIC_API_URL}${data?.image}`} width={100} height={100} sizes="100vw" alt="profilePic" className="rounded-[50%]"/>
                                    <div className="flex flex-col justify-center p-[5px] [&_p]:text-center">
                                        <label className="flex justify-end md:justify-start text-[12px] lg:text-[16px]">
                                            <input {...register("image")} type="file" accept="image/*" className="hidden"/>
                                            <p className="flex gap-[5px] items-center text-gray-700 p-[5px] bg-gray-300 rounded-md border-[1px] border-gray-400 cursor-pointer"><Upload/>Upload image</p>
                                        </label>
                                        <div className="flex justify-end md:justify-start p-[5px]">
                                            <p className="text-gray-400">Max: 5Mb</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end pr-[5px]">
                                    <div className="badge">
                                        <span>Member Since :</span>
                                        <span>{data.createdAt.split("-")[0]}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col p-[10px] gap-[20px]">
                                <h3 className="text-[16px] font-medium">
                                    BASIC INFO
                                </h3>
                                <div className="ProfileInputContainer">
                                    <div className="flex flex-col">
                                        <p>Username</p>
                                        <input type="text" className="bg-gray-300/60" disabled placeholder={`${data.name}`}/>
                                    </div>
                                    <div className="flex flex-col">
                                        <p>FirstName<span>{errors.firstname?.message}</span></p>
                                        <input {...register("firstname")} type="text" placeholder={`${data.firstname ? data.firstname : "Firstname"}`}/>
                                    </div>
                                    <div className="flex flex-col">
                                        <p>LastName<span>{errors.lastname?.message}</span></p>
                                        <input {...register("lastname")} type="text" placeholder={`${data.lastname ? data.lastname : "Lastname"}`}/>
                                    </div>
                                </div>
                                <div className="ProfileInputContainer">
                                    <div className="flex flex-col">
                                        <p>Email<span>{errors.email?.message}</span></p>
                                        <input {...register("email")} type="text" placeholder={`${data.email ? data.email : "example@gmail.com"}`}/>
                                    </div>
                                    <div className="flex flex-col">
                                        <p>Phone<span>{errors.mobile?.message}</span></p>
                                        <input {...register("mobile")} type="text" placeholder={`${data.mobile.substr(0,3)+"****"+data.mobile.substr(data.mobile.length-2)}`}/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col p-[10px] gap-[20px]">
                                <h3 className="text-[16px] font-medium">
                                    SOCIAL PROFILES
                                </h3>
                                <div className="ProfileInputContainer">
                                    <div className="flex flex-col">
                                        <p>LinkedIn<span>{errors.social_1?.message}</span></p>
                                        <input {...register("social_1")} type="text" placeholder="linkedin.com/mostafaazari"/>
                                    </div>
                                    <div className="flex flex-col">
                                        <p>GitHub<span>{errors.social_2?.message}</span></p>
                                        <input {...register("social_2")} type="text" placeholder="github.com/dev-mostafaAzari"/>
                                    </div>
                                    <div className="flex flex-col">
                                        <p>Instagram<span>{errors.social_3?.message}</span></p>
                                        <input {...register("social_3")} type="text" placeholder="instagram.com/mostafaazari"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between p-[10px] gap-[20px] border-none">
                                <button type="button" className="FormRestBtn">Cancel</button>
                                <button type="submit" className="FormSubmitBtn hover:bg-blue-900">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </>
                :
                <ProfileLoading/>
            }
        </>
    );
}
 
export default Profile;