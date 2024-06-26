'use client'
import React from "react";
import Conversations from "./Conversations";
import SearchInput from "./SearchInput";
import { Toaster } from "react-hot-toast";


const Sidebar = ()=>{
    return(
        <div className="border-r border-slate-500 p-4 flex flex-col bg-blue-500">
            <SearchInput/>
            <div className="divider px-3"/>
            <Conversations/>
            <Toaster/>
        </div>
    )
}

export default Sidebar ;
