"use client";
import { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import { loginUser } from "../../redux/features/LoginSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Pencil, Upload } from "lucide-react";
import ProfileLoading from "../../components/Loading/ProfileLoading";


const Profile = () => {
    /* const dispatch = useDispatch();
    const {isLogedIn ,data} = useSelector(state => state.loginSlice);
    const router = useRouter();
    useEffect(()=>{
        dispatch(loginUser());
        if(!isLogedIn)
        {
            router.push("/");
        }
    },[isLogedIn]) */

    return (
        <>
            {true ? 
                <>
                    {/* <div className="flex-1 flex  flex justify-center items-center">
                        <div className="relative">
                            <Image src={`${process.env.NEXT_PUBLIC_API_URL}${data?.image}`} width={200} height={200} alt="profilePic" className="rounded-[50%]"/>
                            <button className="absolute bottom-[10px] right-[10px] rounded-[50%] bg-blue-800 p-[5px] cursor-pointer">
                                <Pencil strokeWidth={2} width={25} height={25} className="text-gray-300"/>
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col [&_div]:flex [&_div]:items-center [&_div]:p-[5px] [&_p]:text-gray-800 
                        [&_p]:font-medium [&_p]:text-[20px] [&_span]:text-gray-600">
                        <div>
                            <p>Username : <span>{data.name}</span></p>
                        </div>
                        <div>
                            <p>Phone Number : <span>{data.mobile}</span></p>
                        </div>
                        <div>
                            <p>Member Since : <span>{data.createdAt.split("T")[0]}</span></p>
                        </div>
                        <div>
                            <p>Role : <span>{data.role.toUpperCase()}</span></p>
                        </div>
                    </div> */}
                    <div className="w-full p-[10px] rounded-md shadow-gray-400 shadow-sm">
                        <form className="w-full flex flex-col gap-[10px] [&_div]:w-full [&>div]:border-b-1 [&>div]:border-gray-400 ">
                            <div className="flex p-[10px]">
                                <h2 className="text-[20px] font-medium">
                                    Personal Information
                                </h2>
                            </div>
                            <div className="flex p-[10px] gap-[10px]">
                                <Image src={"/images/mypic.jpg"} width={100} height={100} alt="profilePic" className="rounded-[50%]"/>
                                <div className="flex flex-col justify-center p-[5px] [&_p]:text-center">
                                    <label className="flex justify-center md:justify-start">
                                        <input type="file" accept="image/*" className="hidden"/>
                                        <p type="button" className="flex gap-[5px] items-center text-gray-700 p-[5px] bg-gray-300 rounded-md border-[1px] border-gray-400 cursor-pointer"><Upload/>Upload image</p>
                                    </label>
                                    <div className="flex justify-center md:justify-start p-[5px]">
                                        <p className="text-gray-400">Max: 5Mb</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col p-[10px] gap-[20px]">
                                <h3 className="text-[16px] font-medium">
                                    BASIC INFO
                                </h3>
                                <div className="flex flex-col lg:flex-row gap-[5px] [&>div]:gap-[5px] [&_span]:text-gray-600 [&_input]:p-[5px] [&_input]:rounded-md [&_input]:outline-none [&_input]:border-[1px] [&_input]:border-gray-400 ">
                                    <div className="flex flex-col">
                                        <span>FirstName</span>
                                        <input type="text" placeholder="Mostafa"/>
                                    </div>
                                    <div className="flex flex-col">
                                        <span>LastName</span>
                                        <input type="text" placeholder="Azari"/>
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row gap-[5px] [&>div]:gap-[5px] [&_span]:text-gray-600 [&_input]:p-[5px] [&_input]:rounded-md [&_input]:outline-none [&_input]:border-[1px] [&_input]:border-gray-400 ">
                                    <div className="flex flex-col">
                                        <span>Email</span>
                                        <input type="text" placeholder="msari808755@gamil.com"/>
                                    </div>
                                    <div className="flex flex-col">
                                        <span>Phone</span>
                                        <input type="text" placeholder="091*****58"/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col p-[10px] gap-[20px]">
                                <h3 className="text-[16px] font-medium">
                                    SOCIAL PROFILES
                                </h3>
                                <div className="flex flex-col lg:flex-row gap-[5px] [&>div]:gap-[5px] [&_span]:text-gray-600 [&_input]:p-[5px] [&_input]:rounded-md [&_input]:outline-none [&_input]:border-[1px] [&_input]:border-gray-400">
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
                            <div className="flex flex justify-end p-[10px] gap-[20px] border-none">
                                <button type="button" className="p-[10px] rounded-md bg-blue-500 text-white cursor-pointer hover:bg-blue-700">Save Changes</button>
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