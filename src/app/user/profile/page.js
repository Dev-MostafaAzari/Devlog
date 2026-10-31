"use client";
import { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import { loginUser } from "../../redux/features/LoginSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Pencil } from "lucide-react";
import ProfileLoading from "../../components/Loading/ProfileLoading";


const Profile = () => {
    const dispatch = useDispatch();
    const {isLogedIn ,data} = useSelector(state => state.loginSlice);
    const router = useRouter();
    useEffect(()=>{
        dispatch(loginUser());
        if(!isLogedIn)
        {
            router.push("/");
        }
    },[isLogedIn])

    return (
        <div className="w-full h-full flex flex-col p-[10px] md:flex-2 overflow-scroll md:scrollbar-none">
            {data ? 
                <>
                    <div className="flex-1 flex  flex justify-center items-center">
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
                    </div>
                </>
                :
                <ProfileLoading/>
            }
        </div>
    );
}
 
export default Profile;