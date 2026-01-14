'use client'

import { Button } from '@/components/ui/button'
import { logoutAction } from '@/lib/session'
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()
  const handelLogout = async () =>{
   try {
     await logoutAction()
     //The redirect happens in the server action
     //this client side redirects is as a fallback
     //redirect("/login")
    router.push("/login");
    router.refresh();
   } catch (error:any) {
    throw new Error("logout error",error)
   }
  }
  return (
    <Button onClick={() => handelLogout()}>
      Logout
    </Button>
  )
}
