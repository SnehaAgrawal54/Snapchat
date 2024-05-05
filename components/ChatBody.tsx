'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { Dialog, DialogContent } from './ui/dialog';

const ChatBody = ({ messages, authUser }: { messages: any, authUser: any }) => {
  const [previewImage, setPreviewImage] = useState({
    open: false,
    imgURL: ''
  })

  return (
    <div className='flex-1 my-3 p-2 border-2 border-gray-300 overflow-y-auto rounded-lg'>
      {
        messages.map((message: any, idx: number) => {
          const Me = message.senderId._id === authUser.user?._id;
          const senderFullname = message.senderId?.fullname?.toUpperCase();
          const senderUsername = message.senderId?.username?.toUpperCase();
          const isMessageImage = message.messageType === 'image';
          const isPreviousMessageFromSameUser = idx > 0 && message.senderId._id === messages[idx - 1].senderId._id;

          return (
            <div className='w-full' key={idx}>
              {
                !isPreviousMessageFromSameUser && (
                  <p className={`mt-2 font-bold text-sm ${Me ? 'text-red-500' : 'text-blue-400'}`}>
                    {Me ? 'ME' : senderFullname || senderUsername}
                  </p>
                )
              }
              <div className={`border-l-2 ${Me ? 'border-l-red-500' : 'border-l-blue-400'}`}>
                <div className='flex items-center w-1/2 p-2 rounded-sm'>
                  {
                    isMessageImage ? (
                      <Image
                        src={message.content}
                        alt='image' width={80}
                        height={80}
                        className='h-auto w-auto object-cover cursor-pointer'
                        onClick={() => setPreviewImage({ open: true, imgURL: message.content })}
                      />
                    ) : (
                      <p>{message.content}</p>
                    )
                  }
                </div>
              </div>
            </div>
          );
        })
      }
      <Dialog open={previewImage.open} onOpenChange={() => setPreviewImage({ open: false, imgURL: '' })}>
        <DialogContent className='max-w-2xl h-96'>
          {
            previewImage.imgURL && (
              <Image
                src={previewImage.imgURL}
                alt={'image'}
                className='border-2 border-white rounded-lg'
                fill={true}
              />
            )
          }
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ChatBody;
