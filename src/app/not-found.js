import Image from "next/image";
import Link from "next/link";

const notFoundPage = () => {
    return (
        <div className="w-screen h-[calc(100vh-175px)] md:h-[calc(100vh-100px)] overflow-y-scroll md:scrollbar-none xl:flex xl:justify-center">
            <div className="w-full max-w-[1366px] min-h-full flex justify-center items-center">
                <div className="flex w-full md:w-[400px] xl:w-1/3 gap-[10px] justify-center items-center flex-col">
                    <Image src={"/images/404.jpg"} alt="404Pic" width={200} height={200} sizes="100vw" className="w-full"/>
                    <Link href={"/"} className="p-2 bg-blue-500 rounded-md text-white hover:bg-blue-600">Home Page</Link>
                </div>
            </div>
        </div>
    );
}
 
export default notFoundPage;