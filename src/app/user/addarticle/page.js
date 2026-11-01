"use client";

import { PencilLine } from "lucide-react";

const AddArticle = () => {
    return (
        <div className="w-full flex flex-col justify-center p-[10px] rounded-md shadow-gray-400 shadow-sm">
            <div className="w-full p-[10px] gap-[10px] flex justify-start">
                <div className="flex items-start">
                    <div className="p-[10px] bg-gray-300 rounded-sm">
                        <PencilLine width={30} height={30} className="text-blue-600" />
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="text-[20px] font-medium">Create Article</h1>
                    <p className="text-gray-400">Share your thoughts with the community</p>
                </div>
            </div>
            <hr className="border-gray-400"/>
            <form className="w-full p-[10px] flex flex-col justify-center [&_span]:font-medium [&_input]:rounded-md [&_input]:border-gray-400 [&_input]:border-[1px] [&_input]:p-[5px]">
                <div className="w-full p-[10px] flex flex-col gap-[5px]">
                    <span className="">Title</span>
                    <input type="text" placeholder="Enter article title..."/>
                </div>
                <div className="w-full p-[10px] gap-[10px] flex flex-col md:flex-row landscape:flex-col">
                    <div className="flex-1">
                        <div className="w-full flex flex-col gap-[5px]">
                            <span className="">Category</span>
                            <input type="text" placeholder="Select a category.."/>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="w-full flex flex-col gap-[5px]">
                            <span className="">Title</span>
                            <input type="text" placeholder="Enter article title..."/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
 
export default AddArticle;