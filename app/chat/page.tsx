import ChatCamera from '@/components/ChatCamera'
import React from 'react'

function ChatPage() {
  return (
    <div className='flex flex-grow items-center'>
      <div className='bg-chatImage bg-cover bg-right-bottom rounded-lg w-full h-[98%] mx-2 px-6 flex items-center justify-center '>
        <ChatCamera />
      </div>
    </div>
  )
}

export default ChatPage