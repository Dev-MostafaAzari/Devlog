import Image from "next/image";

const Register = () => {
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
                        <form className="w-full h-full flex-3 flex flex-col gap-[5px]">
                            <div className="flex gap-[10px] flex-col justify-center p-[10px]">
                                <span className="text-[20px]">
                                    Full Name
                                </span>
                                <input type="text" className="border-[1px] border-gray-300  p-[10px] outline-gray-400" placeholder="Enter Name"/>
                            </div>
                            <div className="flex gap-[10px] flex-col justify-center p-[10px]">
                                <span className="text-[20px]">
                                    Phone Number
                                </span>
                                <input type="text" className="border-[1px] border-gray-300 p-[10px] outline-gray-400" placeholder="Enter Mobile"/>
                            </div>
                            <div className="flex gap-[10px] flex-col justify-center p-[10px]">
                                <span className="text-[20px]">
                                    Password
                                </span>
                                <input type="password" className="border-[1px] border-gray-300 p-[10px] outline-gray-400" placeholder="Enter Password"/>
                            </div>
                            <div className="flex gap-[10px] flex-col justify-center p-[10px]">
                                <span className="text-[20px]">
                                    Confirm Password
                                </span>
                                <input type="password" className="border-[1px] border-gray-300 p-[10px] outline-gray-400" placeholder="Confirm Password"/>
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