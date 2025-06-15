"use client"
import React from 'react'
import {Button} from "@/components/ui/button";
import {toast} from "sonner";

const My_toaster = ({text , notification}: { text: string,notification:string } ) => {
    return (
       <Button className="button-style" onClick={()=>{
           toast(`${notification}`, {
               action:{
                   label:"Dismiss",
                   onClick:()=>{
                       toast.dismiss()
                   }
               }
           })
            }
       }>{text}</Button>
    )
}
export default My_toaster
