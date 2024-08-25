"use server"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

 const login=()=>{
    redirect('/register')

}

const logout=()=>{
    cookies().delete("Authentication");
    redirect("/");
}

export {logout,login}