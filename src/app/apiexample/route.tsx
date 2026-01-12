import { NextResponse } from 'next/server'
import React from 'react'

export  function GET() {
  return NextResponse.json({
    message:"Hello, this is the api route!!",
    status:"success"
  })
}
