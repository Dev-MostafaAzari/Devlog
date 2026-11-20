import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import Pagination from "@/app/components/pagination";

const cookie = await cookies();
const getArticles = async (page)=>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}articles/me/myArticles?page=${page}`,{credentials:"include",cache:"no-cache",headers:{Cookie : cookie.toString()}});
    if(!response.ok)
    {
        throw new Error("Faild to fetch Articles");
    }
    const data = await response.json();
    return data;
}

const MyArticle = async ({searchParams}) => {
    const {page} = await searchParams;
    const {articles,lastPage,currentPage} = await getArticles(page);
    

    return (
        <div className="UserRouteParent min-h-[600px]">
            <div className="w-full flex flex-col gap-[10px]">
                <div className="w-full text-gray-500 text-2xl">
                    <h3>MyArticles</h3>
                </div>
                <hr className="border-gray-500/35"/>
                {articles ? 
                    <>
                        <div className="ArticlesContainer">
                            {articles.map(item =>(
                                <Link key={item.id} href={"/"} className="AriticleLink">
                                    <Image src={`${process.env.NEXT_PUBLIC_API_URL_ARTICLE_IMAGE}${item.image}`} width={100} height={100} sizes="100vw"  alt="ArticlePic"/>
                                    <div className="flex-2 overflow-hidden flex items-center text-center">
                                        <p>{item.title}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <span className={`${item.state === "draft" ? "bg-gray-300" : "bg-amber-300" } p-[5px] rounded-lg text-[10px] md:text-[16px]`}>{item.state.toUpperCase()}</span>
                                    </div>
                                </Link> 
                            ))}
                        </div>
                        <Pagination/>
                    </>
                    :
                    <div className="w-full h-[500px] flex justify-center items-center">
                        <p className="text-gray-500/80 font-medium md:text-[20px]">No Article Found</p>
                    </div>
                }
                
            </div>
        </div>
    );
}
 
export default MyArticle;