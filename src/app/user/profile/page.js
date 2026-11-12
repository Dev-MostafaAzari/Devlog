"use client";
import { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import { loginUser } from "../../redux/features/LoginSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Pencil, Upload } from "lucide-react";
import ProfileLoading from "../../components/Loading/ProfileLoading";


const Profile = () => {
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

    return (
        <>
            {data ? 
                <>
                    <div className="UserRouteParent">
                        <form className="w-full flex flex-col gap-[10px] [&_div]:w-full [&>div]:border-b-1 [&>div]:border-gray-400 ">
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
                                            <input type="file" accept="image/*" className="hidden"/>
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
                                        <span>Username</span>
                                        <input type="text" className="bg-gray-300/60" disabled placeholder={`${data.name}`}/>
                                    </div>
                                    <div className="flex flex-col">
                                        <span>FirstName</span>
                                        <input type="text" placeholder={`${data.firstname ? data.firstname : "Firstname"}`}/>
                                    </div>
                                    <div className="flex flex-col">
                                        <span>LastName</span>
                                        <input type="text" placeholder={`${data.lastname ? data.lastname : "Lastname"}`}/>
                                    </div>
                                </div>
                                <div className="ProfileInputContainer">
                                    <div className="flex flex-col">
                                        <span>Email</span>
                                        <input type="text" placeholder={`${data.email ? data.email : "example@gmail.com"}`}/>
                                    </div>
                                    <div className="flex flex-col">
                                        <span>Phone</span>
                                        <input type="text" placeholder={`${data.mobile.substr(0,3)+"****"+data.mobile.substr(data.mobile.length-2)}`}/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col p-[10px] gap-[20px]">
                                <h3 className="text-[16px] font-medium">
                                    SOCIAL PROFILES
                                </h3>
                                <div className="ProfileInputContainer">
                                    <div className="flex flex-col">
                                        <span>LinkedIn</span>
                                        <input type="text" placeholder="linkedin.com/mostafaazari"/>
                                    </div>
                                    <div className="flex flex-col">
                                        <span>GitHub</span>
                                        <input type="text" placeholder="github.com/dev-mostafaAzari"/>
                                    </div>
                                    <div className="flex flex-col">
                                        <span>Instagram</span>
                                        <input type="text" placeholder="instagram.com/mostafaazari"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end p-[10px] gap-[20px] border-none">
                                <button type="button" className="FormSubmitBtn hover:bg-blue-900">Save Changes</button>
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