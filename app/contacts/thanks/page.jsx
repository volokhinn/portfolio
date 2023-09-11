import React from 'react'
import Link from 'next/link'

const Thanks = () => {
  return (
    <div className={`flex items-center my-80 flex-col gap-5`}>
        <h1 className={`text-white text-2xl`}>Thank you! 🤘</h1>
        <p className={`text-center`}>Your message has been accepted. <br></br> You will recieve answer really soon!</p>
        <Link href="/contacts" className={`bg-[#1C2B3A] py-3 px-4 text-white rounded-xl`}>send-new-message</Link>
    </div>
  )
}

export default Thanks