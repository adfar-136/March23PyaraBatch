"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Linkk() {
    const router = useRouter();
  return (
    <div>
        <Link href="/about">Click to go to about page</Link>
        <button onClick={()=>router.push("/about")}>Go to about</button>
    </div>
  )
}
