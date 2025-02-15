"use server"

import { jwtDecode } from "jwt-decode";
import { redirect } from "next/navigation";
import post from "../util/fetch";
import { cookies } from "next/headers";
import { FormError } from "../common/formError.interface";

export default async function login (_prevState:FormError,formData:FormData){
    const errorOrRes=await post("auth/login",formData,{returnRes:true});
    if(errorOrRes && 'error' in errorOrRes){
        return errorOrRes;
    }
    const setCookieHeader=errorOrRes?.headers.get('Set-Cookie')
    if(setCookieHeader){
        const token = setCookieHeader.split(";")[0].split("=")[1];
        cookies().set({
            name:"Authentication",
            value:token,
            secure: true,
httpOnly: true,
expires: new Date(jwtDecode(token).exp! * 1000),
        })
    }
    redirect('/')
}