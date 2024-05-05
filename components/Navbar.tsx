import Image from 'next/image'
import React from 'react'
import { Input } from './ui/input'
import snapchatLogo from '@/public/snapchat-logo.png'
import { Button } from './ui/button'
import { TbGridDots } from "react-icons/tb";
import LogoutButton from './shared/LogoutButton'
import { auth } from '@/auth'
import Link from 'next/link'

const Navbar = async () => {
    const authUser = await auth()

    return (
        <div className='w-screen px-10 py-4 flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <Image src={snapchatLogo} alt='snapchat-logo' width={50} height={50} />
                <Input type="text" placeholder="Search" className='rounded-full' />
            </div>
            <div>
                <Button variant={'ghost'}>Stories</Button>
                <Button variant={'ghost'}>Spotlight</Button>
                <Button variant={'ghost'}>Chat</Button>
                <Button variant={'ghost'}>Lenses</Button>
            </div>
            <div className='flex items-center gap-5'>
                <Button variant={'secondary'} className='rounded-full bg-white text-black' size={'icon'}>
                    <TbGridDots />
                </Button>
                <Button className='rounded-full'>Snapchat Ads</Button>
                <Button className='rounded-full'>Download</Button>
                {authUser ? (
                    <LogoutButton />
                ) : (
                    <Link href={'/login'}>
                        <Button className='rounded-full'>Login</Button>
                    </Link>
                )
                }
            </div>
        </div>
    )
}

export default Navbar
