import React from 'react'
import ChatTopbar from './ChatTopbar'
import ChatBody from './ChatBody'
import ChatInput from './ChatInput'

const ChatPage = ({ userProfile, messages, authUser }: { userProfile: any, messages: any,authUser:any }) => {
    return (
        <div className='flex flex-col m-2 h-[96%]'>
            <ChatTopbar userProfile={userProfile} />
            <ChatBody messages={messages} authUser={authUser} />
            <ChatInput />
        </div>
    )
}

export default ChatPage