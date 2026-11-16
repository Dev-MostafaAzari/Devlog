import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";

const cookie = await cookies();
const getDashboardData = async ()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}articles/me/dashboard`,{credentials:"include",cache:"no-cache",headers:{Cookie : cookie.toString()}});
    if(!res.ok)
    {
        console.log("error")
    }
    const data = await res.json();
    return data;
}

const Dashboard = async () => {
    const data = await getDashboardData();
    return (
        <div className="UserRouteParent">
            <div className="w-full h-full flex flex-col gap-[10px] md:gap-[30px]">
                <div className="w-full p-[10px]">
                    <h1 className="text-[30px]">Dashboard</h1>
                    <p className="text-gray-700 text-[20px]">Welcome back <span className="text-slate-900 font-medium">{data.userName}</span></p>
                </div>
                <div className="w-full p-[10px] gap-[10px] flex flex-col justify-evenly md:flex-row">
                    <div className="flex-1 flex flex-col justify-center items-center p-[10px] md:p-[30px] shadow-xs shadow-gray-500 rounded-md">
                        <span className="text-[18px] text-gray-500 font-medium">Total Articles</span>
                        <span className="text-[20px] text-gray-700 font-medium">{data.total}</span>
                    </div>
                    <div className="flex-1 flex flex-col justify-center items-center p-[10px] md:p-[30px]  shadow-xs shadow-gray-500 rounded-md">
                        <span className="text-[18px] text-gray-500 font-medium">Published</span>
                        <span className="text-[20px] text-gray-700 font-medium">{data.published}</span>
                    </div>
                    <div className="flex-1 flex flex-col justify-center items-center p-[10px] md:p-[30px]  shadow-xs shadow-gray-500 rounded-md">
                        <span className="text-[18px] text-gray-500 font-medium">Draft</span>
                        <span className="text-[20px] text-gray-700 font-medium">{data.drafted}</span>
                    </div>
                </div>
                <div className="w-full p-[10px] min-h-[400px]">
                    <div className="w-full h-full flex flex-col">
                        <div className="w-full flex justify-between items-center">
                            <h1 className="text-[20px]">Recent Articles</h1>
                            <Link href={"/"} className="text-blue-500 hover:text-blue-700">View All</Link>
                        </div>
                        <div className="RecentArticlesContainer">
                            {/* articles part */}
                            {data.recent.length !== 0 ? 
                                (data.recent.map((item)=>(
                                    <div key={item.id} className="w-full p-[10px] flex items-center">
                                        <div className="flex-1">
                                            <Image src={`${process.env.NEXT_PUBLIC_API_URL_ARTICLE_IMAGE}${item.image}`} width={50} height={50} sizes="100vw" alt="articlePic"/>
                                        </div>
                                        <div className="flex-2 overflow-hidden">
                                            <p>{item.title}</p>
                                        </div>
                                        <div className="flex-1 flex justify-end">
                                            <span className={`${item.state === "draft" ? "bg-gray-300" : "bg-amber-300" } p-[5px] rounded-lg text-[10px]`}>{item.state}</span>
                                        </div>
                                    </div>
                                )))
                            :   
                                <div className="w-full p-[10px] flex justify-center items-center min-h-[300px]">
                                    <p className="text-gray-500 w-full text-center">There are no article</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
 
export default Dashboard;