import React from 'react'
import LogoutButton from './shared/LogoutButton'
import { auth } from '@/auth'
import { Avatar, AvatarImage } from './ui/avatar'
import Searchbar from './Searchbar'
import Friends from './Friends'

const LeftSidebar = async () => {
    const authUser = await auth()

    return (
        <div className='w-[50%] md:w-[25%] m-2 border-2 border-gray-300 rounded-lg'>
            {/* Top part:name,image and logout */}
            <div className='flex items-center justify-between border-b border-gray-300 pb-3 p-4 bg-[#E3E6E8]'>
                <div className='flex items-center gap-2'>
                    {
                        authUser && (
                            <>
                                <Avatar>
                                    <AvatarImage src={authUser.user?.image!} alt="@shadcn" />
                                </Avatar>
                                <h1 className='font-medium'>{authUser.user?.name}</h1>
                            </>
                        )
                    }
                </div>
                <div>
                    <LogoutButton />
                </div>
            </div>
            {/* bottom part:searchbar and friends */}
            <div className='p-2'>
                
                <Friends/>
            </div>
        </div>
    )
}

export default LeftSidebar