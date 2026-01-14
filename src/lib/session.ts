'use server'
import { UserType } from "@/app/_components/type";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


//set session cookies
export const setSession = async (user:UserType) =>{
    (await cookies()).set('session',JSON.stringify(user),{
        httpOnly:true,
       
        maxAge:60*60*24*7,
        path:"/"
    })
}

//get session cookie
export const getSession = async()=>{
    const session = (await cookies()).get("session")?.value
    if(!session) return null
    const user = JSON.parse(session) as UserType
    return user
}

//delete session cookie
export const deleteSession = async () =>{
    const cookieStore = await cookies()
    cookieStore.delete("session")
}

//handel logout Actions
export const logoutAction = async ()=>{
    await deleteSession()
    redirect("/login")
}