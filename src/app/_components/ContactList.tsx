import React from 'react'
import { ContactType } from '../api/contact'
import Link from 'next/link'
import { FiEdit } from 'react-icons/fi'
import DeleteButton from './DeleteButton'
import { deleteContactActions } from '../actions/contact'

export default function ContactList({contact}:{contact:ContactType[]}) {
  return (
    <div className='space-y-4 '>
      {
              contact.map((contacts:any)=>(
                <div key={contacts.id} className='p-4 border flex justify-between items-center rounded-lg'>
                    <div>
                        <h2 className='text-lg font-semibold'>{contacts.name}</h2>
                        <p>{contacts.email}</p>
                    </div>
                    <div className='flex items-center self-center gap-3'>
                        <Link href={`/contact/edit/${contacts.id}`} className='flex items-center  gap-3 bg-blue-500 hover:bg-blue-400 px-5 py-1 rounded-lg text-white'>
                        <FiEdit className=''/>
                        Edit
                        </Link>
                          <DeleteButton action={deleteContactActions} contact={contact[0]} />
                    </div>
                </div>
              ))
      }
    </div>
  )
}
