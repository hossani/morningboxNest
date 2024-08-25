"use server";

import axios from "axios";
import { redirect } from "next/navigation";
import { API_URL } from "../constant/apiUrl";
export default async function createUser(

  formData: FormData
) {
const email=formData.get('email')
const password=formData.get('password')
const userName=formData.get('userName')
const fullName=formData.get('fullName')

  const res = await axios.post(`${API_URL}/auth/register`, {email,password,userName,fullName});
  if (res) {
    console.log('created new user')
    return   redirect("/signin");
    ;
  }
}
