"use client";

import Tiptap from "@/app/components/TitTap";
import { FileText, Globe, ImagePlus, LayoutGridCircles, PencilLine } from "lucide-react";
import { useEffect, useState } from "react";
import {z} from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { createArticle } from "@/app/redux/features/ArticleSlice";
import { useRouter } from "next/navigation";

//zod schema
const schema  = z.object({
    title : z.string().min(3,"title must be at least 3 charecters").regex(/^[a-zA-Z]+[0-9]*$/,"Title Must start with letter"),
    category : z.string().regex(/^[a-zA-Z]+$/),
    state : z.enum(["published","draft"],{error:"article state required"}),
    image : z.custom((files)=> files instanceof FileList).optional().transform((files)=>files?.[0]).refine((file)=> !file || file.size <= 5*1024*1024,"Image must be less than 5MB"),
});
const tiptapSchema = z.object({
    content : z.string().min(20,"Content must be at least 20 charecters")
});

const AddArticle = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const {isLogedIn} = useSelector(state => state.loginSlice);
    const {register , handleSubmit, watch, setValue, reset,formState:{errors}} = useForm({resolver:zodResolver(schema),defaultValues:{state : "published"}});
    const [articleContent , setArticleContent] = useState(null);
    const [resetForm , setResetForm] = useState(false);
    useEffect(()=>{
        if(!isLogedIn)
        {
            router.replace("/");
        }
    },[isLogedIn,router])
    const article = {
        title : watch("title"),
        category : watch("category"),
        state : watch("state"),
        image : watch("image"),
        content : articleContent
    };
    const onSubmit = ()=>{
        // need to use safeParse cuz we have to get tiptap data and validated separately
        const contentCheck = tiptapSchema.safeParse({
            content : articleContent?.replace(/<[^>]*>/g,"").trim(),
        });
        if(!contentCheck.success)
        {
            return;
        }
        dispatch(createArticle(article));
    }
    return (
        <div className="UserRouteParent">
            <div className="w-full flex flex-col justify-center">
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
                <form onSubmit={handleSubmit(onSubmit)} className="AddArticleForm">
                    <div className="w-full p-[10px] flex flex-col gap-[5px]">
                        <span className="flex gap-[5px] items-center">Title <p className="text-[12px] text-red-400 ">{errors.title?.message}</p></span>
                        <input {...register("title")} type="text" placeholder="Enter article title..." required/>
                    </div>
                    <div className="w-full p-[10px] gap-[10px] flex flex-col md:flex-row">
                        {/* category */}
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
                        {/* state */}
                        <div className="flex-1">
                            <div className="w-full flex flex-col gap-[5px]">
                                <span className="">State</span>
                                <div className="AddArticleState">
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
                    {/* image */}
                    <div className="w-full flex flex-col gap-[5px] p-[10px]">
                        <span className="flex gap-[5px] items-center">Image<p className="text-[12px] text-red-400 ">{errors.image?.message}</p></span>
                        <label className="w-full lg:h-[300px] p-[10px] flex flex-col items-center justify-center cursor-pointer rounded-md border-gray-400 border-dashed border-[1px]">
                            <ImagePlus width={30} height={30} className="text-gray-500"/>
                            <p className="font-medium">Upload an image here</p>
                            <p className="text-gray-600">click to browse</p>
                            <p className="text-gray-600">Max: 5Mb</p>
                            <input {...register("image")} type="file" className="hidden" accept="image/*"/>
                        </label>
                    </div>
                    {/* text editor (tiptap) */}
                    <div className="w-full p-[10px] flex flex-col gap-[10px]">
                        <div className="w-full">
                            <span className="flex gap-[5px] items-center">Content{articleContent?.replace(/<[^>]*>/g,"").trim().length >= 20 ? null : <p className="text-[12px] text-purple-400">must be at least 20 charecters</p>}</span>
                        </div>
                        <Tiptap onChange={setArticleContent} reset={resetForm}/>
                    </div>
                    <hr className="border-gray-400"/>
                    {/* buttons */}
                    <div className="w-full p-[10px] flex justify-between items-center [&_button]:border-[1px] [&_button]:border-gray-300 [&_button]:cursor-pointer">
                        <button type="reset" onClick={()=>{setResetForm(!resetForm);reset()}} className="p-[10px] rounded-md bg-gray-100">Cancel</button>
                        <button type="submit" className="FormSubmitBtn hover:bg-blue-900">Create Article</button>
                    </div>
                </form>
            </div>
        </div>
        
    );
}
 
export default AddArticle;