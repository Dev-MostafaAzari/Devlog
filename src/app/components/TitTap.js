"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useState } from "react";


const Tiptap = ({onChange ,reset}) => {   // geting onClick fn from parent component
    const [active , setActive] = useState({bold:false,italic:false,heading1:false,heading2:false,list:false});
    const editor = useEditor({  // editor config
        extensions: [StarterKit],
        content: "",
        immediatelyRender: false,
        onUpdate: ({ editor }) => { // when content changes we save the content using given fn (onChange)
           onChange(editor.getHTML());
        },
    });
    //reset
    useEffect(()=>{
        editor?.commands.clearContent();
    },[reset])

    return (
        <div className="rounded-xl border border-gray-300">
            {/* Toolbar */}
            <div className="flex gap-2 p-3 border-b [&_button]:cursor-pointer [&_button]:p-[5px] [&_button]:min-w-[30px] [&_button]:rounded-md">
                <div className="flex-1 flex justify-evenly lg:justify-start gap-[5px]">
                    <button type="button" className={`${active.bold ? "bg-blue-500 text-white" : "bg-gray-200"} font-bold`} onClick={()=>{editor.chain().focus().toggleBold().run();setActive({...active , bold : !active.bold})}}>
                        B
                    </button>
                    <button type="button" className={`${active.italic ? "bg-blue-500 text-white" : "bg-gray-200"} italic`} onClick={()=>{editor.chain().focus().toggleItalic().run();setActive({...active , italic : !active.italic})}}>
                        i
                    </button>
                    <div className="w-[1px] h-full border-gray-300 border-1"/>
                    <button type="button" className={`${active.heading1 ? "bg-blue-500 text-white" : "bg-gray-200"}`} onClick={()=>{editor.chain().focus().toggleHeading({level: 1,}).run();setActive({...active , heading1 : !active.heading1 , heading2 : false})}}>
                        H1
                    </button>
                    <button type="button" className={`${active.heading2 ? "bg-blue-500 text-white" : "bg-gray-200"}`} onClick={()=>{editor.chain().focus().toggleHeading({level: 2,}).run();setActive({...active , heading2 : !active.heading2 , heading1 : false})}}>
                        H2
                    </button>
                    <button type="button" className={`${active.list? "bg-blue-500 text-white" : "bg-gray-200"}`} onClick={() => {editor.chain().focus().toggleBulletList().run();setActive({...active , list : !active.list})}}>
                        List
                    </button>
                </div>
                <div className="flex-1">

                </div>
            </div>
            {/* Editor */}
            <EditorContent editor={editor} className="w-full h-[300px] p-[10px] [&_.tiptap]:h-full [&_.tiptap]:outline-none" placeholder="Write your article here ..."/>

        </div>
    )
};


export default Tiptap;