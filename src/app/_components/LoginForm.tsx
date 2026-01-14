'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { loginAction } from '../actions/auth'

export default function LoginForm() {
  return (
    <form action={loginAction} className='space-y-6 w-full'>
      <div className='space-y-3'>
        <Label>Email</Label>
        <Input type='email' placeholder='Enter your email' name='email' required  />
      </div>
      <div className='space-y-3 mt-3.5'>
        <Label>Password</Label>
        <Input type='password' placeholder='Enter your password' name='password' required  />
      </div>
      <Button className='mx-auto ' >
        Login
      </Button>
    </form>
  )
}
