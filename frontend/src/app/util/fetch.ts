import { API_URL } from "../constant/apiUrl";
import { getErrorMessage } from "./error";
import { PostOptions } from "../common/post-action.interface";
import { cookies } from "next/headers";

const getHeaders = () => ({
    Cookie: cookies().toString(),
  });

export default async function post (path:string,formData:FormData,options?:PostOptions){
    const res=await fetch(`${API_URL}/${path}`,{
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(Object.fromEntries(formData)),
    });
    const parsedRes=await res.json();
    if(!res.ok){
        return {error:getErrorMessage(parsedRes)};
    }
    if(options?.returnRes){
        return res;
    }
}

export const get = async (path: string) => {
    const res = await fetch(`${API_URL}/${path}`, {
      headers: { ...getHeaders() },
    });
    return res.json();
  };