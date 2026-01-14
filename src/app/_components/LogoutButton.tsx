'use client'

import { Button } from '@/components/ui/button'
import { logoutAction } from '@/lib/session'

export default function LogoutButton() {
  const handelLogout = async () =>{
    await logoutAction()
  }
  return (
    <Button onClick={() => handelLogout()}>
      Logout
    </Button>
  )
}
