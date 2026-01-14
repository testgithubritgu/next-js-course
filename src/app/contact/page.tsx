import { getSession } from '@/lib/session'
import React from 'react'
import { getContacts } from '../api/contact'
import ContactList from '../_components/ContactList'

export default async function ContactPage() {
  const user = await getSession()
  if(!user){
    return (
      <div>
        Please{" "}
        <a href="/login" className='text-blue-600 hover:underline'>
        login{" "}
        </a>to view contacts
      </div>
    )
  }
  const contact = await getContacts(user?.id)
 
  if(!contact || contact.length === 0){
    return (
      <div>
       Please 
       <a href="/contact/new" className='text-blue-600 hover:underline'>
       Add to contact
       </a>
       to your contact list
      </div>
    )
  }
  return (
   <div>
      <div className='flex justify-between items-center mb-6'>
        <h1>Your Contacts</h1>
        <a href="/contact/new" className='text-white px-5 py-1 bg-blue-800 rounded-xl'>
          Add Contacts
        </a>
      </div>
      <ContactList contact={contact}/>
   </div>
  )
}
