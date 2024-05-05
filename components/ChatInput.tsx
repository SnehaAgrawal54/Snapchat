'use client'
import React, { useState } from 'react'
import { MdPhotoCamera } from 'react-icons/md'
import { Button } from './ui/button'
import { EmojiPopover } from './EmojiPopover'
import { useParams } from 'next/navigation'
import { sendSnapMessage } from '@/lib/serveractions'
import { Loader2 } from 'lucide-react'

const ChatInput = () => {
  const [inputText, setInputText] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const params = useParams<{ id: string }>()
  const receiverId = params.id

  const SubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {//send snap using server action
      setLoading(true)
      await sendSnapMessage(
        inputText,
        receiverId,
        'text'
      )
      setInputText('')
    } catch (error) {
      console.log(error);
      throw error
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex items-center justify-between gap-2'>

      <div className='p-2 cursor-pointer rounded-full bg-gray-200'>
        <MdPhotoCamera size={'24px'} />
      </div>

      <form onSubmit={SubmitHandler} className='w-full'>
        <div className='flex items-center gap-4'>
          <input
            type='text'
            placeholder='Send a snap message'
            className='rounded-full w-full p-2 border border-gray-400 outline-none font-medium'
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          {
            loading ? (
              <Button className='rounded-full'>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                Please wait
              </Button>
            ) : (
              <Button className='rounded-full' type='submit'>Send snap</Button>
            )
          }
        </div>
      </form>

      <div>
        <EmojiPopover />
      </div>

    </div>
  )
}

export default ChatInput