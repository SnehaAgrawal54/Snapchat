import React from 'react'
import { Button } from '../ui/button'
import { IoMdLogOut } from 'react-icons/io'
import { logoutHandler } from '@/lib/serveractions'

const LogoutButton = () => {
    //inline server action
    // const logoutHandler = async () => {
    //     'use server'
    //     try {
    //         await signOut()
    //     } catch (error) {
    //         console.log(error);
    //         throw error
    //     }
    //     redirect('/login')
    // }

    return (
        <form action={logoutHandler}>
            <Button className='rounded-full' size={'icon'}>
                <IoMdLogOut size={'18px'} />
            </Button>
        </form>
    )
}

export default LogoutButton