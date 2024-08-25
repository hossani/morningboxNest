"use server"

import { redirect } from "next/navigation";
import getMe from "../get-me";

export async function executionGetMe(){
    const me = await getMe();
    if(!me.email) {return redirect('/')};
    console.log('afficher',me)
}
