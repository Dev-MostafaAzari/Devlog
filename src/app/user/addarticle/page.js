"use client";

import Tiptap from "@/app/components/TitTap";
import { FileText, Globe, ImagePlus, LayoutGridCircles, PencilLine } from "lucide-react";
import { useState } from "react";
import {z} from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { createArticle } from "@/app/redux/features/ArticleSlice";

const schema  = z.object({
    title : z.string().min(3,"title must be at least 3 charecters").regex(/^[a-zA-Z]+[0-9]*$/),
    category : z.string().regex(/^[a-zA-Z]+$/),
    state : z.enum(["published","draft"],{error:"article state required"}),
    image : z.custom((files)=> files instanceof FileList).optional().transform((files)=>files?.[0]).refine((file)=> !file || file.size <= 5*1024*1024,"Image must be less than 5MB"),
    content : z.string().min(20,"Content must be at least 20 charecters")
});

const AddArticle = () => {
    const dispatch = useDispatch();
    const {register , handleSubmit, watch, setValue, formState:{errors}} = useForm({resolver:zodResolver(schema),defaultValues:{state : "published"}});
    const [articleContent , setArticleContent] = useState(null);
    const article = {
        title : watch("title"),
        category : watch("category"),
        state : watch("state"),
        image : watch("image"),
        content : articleContent
    };
    const onSubmit = (e)=>{
        e.preventDefault();
        const contentCheck = schema.safeParse({
            content : articleContent.replace(/<[^>]*>/g,"").trim(),
            title : article.title,
            category : article.category,
            image : article.image,
            state : article.state
        });
        if(!contentCheck.success)
        {
            console.log(contentCheck.error.issues);
            return;
        }
        dispatch(createArticle(article));
    }
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
            <form onSubmit={(e)=>handleSubmit(onSubmit(e))} className="w-full p-[10px] flex flex-col justify-center [&_span]:font-medium [&_input]:rounded-md [&_input]:border-gray-400 [&_input]:border-[1px] [&_input]:p-[10px]">
                <div className="w-full p-[10px] flex flex-col gap-[5px]">
                    <span className="">Title</span>
                    <input {...register("title")} type="text" placeholder="Enter article title..." required/>
                </div>
                <div className="w-full p-[10px] gap-[10px] flex flex-col md:flex-row">
                    <div className="flex-1">
                        <div className="w-full flex flex-col gap-[5px]">
                            <span className="">Category</span>
                            <div className="w-full flex gap-[5px] p-[10px] border-gray-400 rounded-md border-[1px]">
                                <span><LayoutGridCircles width={25} height={25}/></span>
                                <select {...register("category")} name="category" className="w-full outline-none" required>
                                    <option value={""} disabled>
                                        Chose a category
                                    </option>
                                    <option value={"JavaScript"}>
                                        JavaScript
                                    </option>
                                    <option value={"Reactjs"}>
                                        ReactJs
                                    </option>
                                    <option value={"Nextjs"}>
                                        NextJs
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="w-full flex flex-col gap-[5px]">
                            <span className="">State</span>
                            <div className="w-full flex border-gray-400 overflow-hidden border-[1px] rounded-md
                                [&_button]:w-full [&_button]:p-[10px] [&_button]:cursor-pointer [&_button]:flex [&_button]:gap-[10px] [&_button]:flex-row [&_button]:items-center [&_button]:justify-center">
                                <div className="flex-1">
                                    <button type="button" onClick={()=>{setValue("state","published")}} className={`${watch("state") === "published" ? "bg-blue-500 text-white":""}`}><Globe width={25} height={25}/>Published</button>
                                </div>
                                <div className="flex-1">
                                    <button type="button" onClick={()=>{setValue("state","draft")}} className={`${watch("state") === "draft" ? "bg-blue-500 text-white" : ""}`}><FileText width={25} height={25}/>Draft</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full p-[10px]">
                    <label className="w-full lg:h-[300px] p-[10px] flex flex-col items-center justify-center cursor-pointer rounded-md border-gray-400 border-dashed border-[1px]">
                        <ImagePlus width={30} height={30} className="text-gray-500"/>
                        <p className="font-medium">Upload an image here</p>
                        <p className="text-gray-600">click to browse</p>
                        <p className="text-gray-600">Max: 5Mb</p>
                        <input {...register("image")} type="file" className="hidden" accept="image/*"/>
                    </label>
                </div>
                <div className="w-full p-[10px] flex flex-col gap-[10px]">
                    <div className="w-full">
                        <span>Content</span>
                    </div>
                    <Tiptap onChange={setArticleContent}/>
                </div>
                <hr className="border-gray-400"/>
                <div className="w-full p-[10px] flex justify-between items-center [&_button]:border-[1px] [&_button]:border-gray-300 [&_button]:cursor-pointer">
                    <button type="reset" className="p-[10px] rounded-md bg-gray-100">Cancel</button>
                    <button type="submit" className="p-[10px] rounded-md bg-blue-500 text-white hover:bg-blue-700">Create Article</button>
                </div>
            </form>
        </div>
    );
}
 
export default AddArticle;