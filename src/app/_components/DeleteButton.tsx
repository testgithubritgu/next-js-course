'use client'
import React, { useActionState } from 'react'
import { ContactType } from '../api/contact'
import { FiTrash } from 'react-icons/fi'

type DeleteButtonProps = {
    action:(prevState:any , formData:FormData) => Promise<any>,
    contact?:ContactType
}

export default function DeleteButton({ action, contact }: DeleteButtonProps) {
    const [state , formAction] = useActionState(action,null)


  return (
    <form action={formAction} method='post'>
        <input type='hidden' name='id' value={contact?.id}/>
      <button type='submit'  onClick={(e)=>{
        if(!confirm("are you sure to delete this ?")){

        }
      }} className='flex items-center gap-3 bg-red-500 px-5 py-1 rounded-lg hover:bg-red-400'>
        <FiTrash className='text-white text-lg' /> Delete
      </button>
    </form>
  )
}
