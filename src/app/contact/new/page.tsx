'use client'
import ContactList from '@/app/_components/ContactList'
import { addContact } from '@/app/actions/contact'
import React, { useActionState, useEffect, useState } from 'react'

export default function NewContactPage() {
  const [state, formState] = useActionState(addContact,null)
  
  return (
    <div className="min-h-[80vh] bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-6">
        {/* Header */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-1">
          Add New Contact
        </h2>
        <p className="text-gray-500 mb-6">
          Fill in the details to create a new contact
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Notes
            </label>
            <textarea
              rows="3"
              placeholder="Additional information..."
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="flex-1 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Save Contact
            </button>

            <button
              type="button"
              className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
