import Link from 'next/link'
import React from 'react'
import LogoutButton from './LogoutButton'
import { getSession } from '@/lib/session'

export default async function Navbar() {
    const session = await getSession()
    return (
        <div>
            <nav className="bg-white shadow-sm">
                <div className="container mx-auto p-4 flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold text-blue-600">
                        Contact Manager
                    </Link>

                    <div className="flex items-center space-x-4">
                        {session ? (
                            <>
                                <Link href="/contact" className="hover:text-blue-600 mr-8">
                                    Contacts
                                </Link>
                                <LogoutButton />
                            </>
                        ) : (<>
                            <Link href="/login" className="hover:text-blue-600 mr-5">
                                Login
                            </Link>

                            <Link
                                href="/register"
                                className="text-blue-300 hover:text-blue-600"
                            >
                                Register
                            </Link>
                        </>)}
                    </div>
                </div>
            </nav>
        </div>
    )
}
