'use client'
import { readFileAsDataURL } from '@/lib/utils'
import { CameraIcon } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { PreviewImageDialog } from './PreviewImageDialog'
import { PreviewUsersDialog } from './PreviewUsersDialog'

const ChatCamera = () => {
    const imageRef = useRef<HTMLInputElement>(null)
    const [selectedFile, setSelectedFile] = useState<string>("")
    const [flag, setFlag] = useState(false)

    const fileChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target?.files?.[0]
        // setSelectedFile(file)
        if (file) {
            const dataUrl = await readFileAsDataURL(file)
            setSelectedFile(dataUrl)
        }
    }
    // console.log(selectedFile);

    const closeDialog = () => {
        setSelectedFile('')
        setFlag(false)
    }

    return (
        <>
            <div className='flex flex-col items-center justify-center m-2 p-5 rounded-md border bg-clip-padding backdrop-blur-sm bg-opacity-5'>
                <div className='rounded-full p-8 bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 border border-gray-200 cursor-pointer text-white'
                    onClick={() => imageRef.current?.click()}>
                    <CameraIcon size={'50px'} />
                    <input type='file' accept='image/' hidden ref={imageRef} onChange={fileChangeHandler} />
                </div>
                <p className='w-2/3 mt-4 text-lg text-center text-white font-semibold'>
                    Click the Camera to send your image.
                </p>
            </div>
            {
                flag === false ? (
                    <PreviewImageDialog
                        selectedFile={selectedFile}
                        close={closeDialog}
                        imageChange={() => imageRef.current?.click()}
                        setFlag={setFlag}
                    />
                ) : (
                    <PreviewUsersDialog
                        selectedFile={selectedFile}
                        close={closeDialog}
                        onPreview={() => setFlag(false)}
                    />
                )
            }
        </>
    )
}

export default ChatCamera