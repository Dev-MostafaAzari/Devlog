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
        <div className="w-full h-full flex flex-col p-[10px] md:flex-2">
            {data ? 
                <>
                    <div className="flex-1 flex  flex justify-center items-center">
                        <div className="relative">
                            <Image src={`${process.env.NEXT_PUBLIC_API_URL}${data?.image}`} width={200} height={200} alt="profilePic" className="rounded-[50%]"/>
                            <button className="absolute bottom-[10px] right-[10px]">
                                <Pencil strokeWidth={2} width={25} height={25} className="text-gray-700"/>
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col">
                        <div className="flex items-center p-[5px]">
                            <p className="text-gray-800 font-medium">Username : <span className="text-gray-600">{data.name}</span></p>
                        </div>
                        <div className="flex items-center p-[5px]">
                            <p className="text-gray-800 font-medium">Phone Number : <span className="text-gray-600">{data.mobile}</span></p>
                        </div>
                        <div className="flex items-center p-[5px]">
                            <p className="text-gray-800 font-medium">Member Since : <span className="text-gray-600">{data.createdAt.split("T")[0]}</span></p>
                        </div>
                        <div className="flex items-center p-[5px]">
                            <p className="text-gray-800 font-medium">Role : <span className="text-gray-600">{data.role.toUpperCase()}</span></p>
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