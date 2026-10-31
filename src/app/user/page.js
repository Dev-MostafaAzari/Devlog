import Image from "next/image";
import Link from "next/link";

const Dashboard = () => {
    return (
        <div className="w-full h-full flex flex-col p-[10px] md:flex-2 overflow-x-hidden overflow-y-scroll md:scrollbar-none">
            <div className="w-full h-full flex flex-col gap-[10px] md:gap-[30px]">
                <div className="w-full p-[10px]">
                    <h1 className="text-[30px]">Dashboard</h1>
                    <p className="text-gray-700 text-[20px]">Welcome back <span className="text-slate-900 font-medium">Username!</span></p>
                </div>
                <div className="w-full p-[10px] gap-[10px] flex flex-col justify-evenly md:flex-row">
                    <div className="flex-1 flex flex-col justify-center items-center p-[10px] md:p-[30px] shadow-xs shadow-gray-500 rounded-md">
                        <span className="text-[18px] text-gray-500 font-medium">Total Articles</span>
                        <span className="text-[20px] text-gray-700 font-medium">10</span>
                    </div>
                    <div className="flex-1 flex flex-col justify-center items-center p-[10px] md:p-[30px]  shadow-xs shadow-gray-500 rounded-md">
                        <span className="text-[18px] text-gray-500 font-medium">Published</span>
                        <span className="text-[20px] text-gray-700 font-medium">8</span>
                    </div>
                    <div className="flex-1 flex flex-col justify-center items-center p-[10px] md:p-[30px]  shadow-xs shadow-gray-500 rounded-md">
                        <span className="text-[18px] text-gray-500 font-medium">Draft</span>
                        <span className="text-[20px] text-gray-700 font-medium">2</span>
                    </div>
                </div>
                <div className="w-full p-[10px]">
                    <div className="w-full h-full flex flex-col">
                        <div className="w-full flex justify-between items-center">
                            <h1 className="text-[20px]">Recent Articles</h1>
                            <Link href={"/"} className="text-blue-500 hover:text-blue-700">View All</Link>
                        </div>
                        <div className="w-full flex flex-col gap-[10px] [&_p]:w-full [&_p]:truncate [&_p]:text-gray-800 [&_p]:font-medium lg:[&_p]:text-[20px]
                            [&_img]:w-[50px] [&_img]:h-[50px] [&_img]:rounded-md [&_img]:object-contain lg:[&_img]:w-[70px] lg:[&_img]:h-[70px] xl:[&_img]:w-[100px] xl:[&_img]:h-[100px]">
                            {/* articles part */}
                            <div className="w-full p-[10px] flex items-center">
                                <div className="flex-1">
                                    <Image src={"/images/mypic.jpg"} width={50} height={50} sizes="100vw" alt="articlePic"/>
                                </div>
                                <div className="flex-2 overflow-hidden">
                                    <p>sasdadasdadasdasdasdasdasdasdasda</p>
                                </div>
                                <div className="flex-1 flex justify-end">
                                    <span className="bg-gray-300 p-[5px] rounded-lg text-[10px]">Published</span>
                                </div>
                            </div>
                            <div className="w-full p-[10px] flex items-center">
                                <div className="flex-1">
                                    <Image src={"/images/mypic.jpg"} width={50} height={50} sizes="100vw" alt="articlePic"/>
                                </div>
                                <div className="flex-2 overflow-hidden">
                                    <p>sasdadasdadasdasdasdasdasdasdasda</p>
                                </div>
                                <div className="flex-1 flex justify-end">
                                    <span className="bg-gray-300 p-[5px] rounded-lg text-[10px]">Published</span>
                                </div>
                            </div>
                            <div className="w-full p-[10px] flex items-center">
                                <div className="flex-1">
                                    <Image src={"/images/mypic.jpg"} width={50} height={50} sizes="100vw" alt="articlePic"/>
                                </div>
                                <div className="flex-2 overflow-hidden">
                                    <p>sasdadasdadasdasdasdasdasdasdasda</p>
                                </div>
                                <div className="flex-1 flex justify-end">
                                    <span className="bg-gray-300 p-[5px] rounded-lg text-[10px]">Published</span>
                                </div>
                            </div>
                            <div className="w-full p-[10px] flex items-center">
                                <div className="flex-1">
                                    <Image src={"/images/mypic.jpg"} width={50} height={50} sizes="100vw" alt="articlePic"/>
                                </div>
                                <div className="flex-2 overflow-hidden">
                                    <p>sasdadasdadasdasdasdasdasdasdasda</p>
                                </div>
                                <div className="flex-1 flex justify-end">
                                    <span className="bg-gray-300 p-[5px] rounded-lg text-[10px]">Published</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Dashboard;