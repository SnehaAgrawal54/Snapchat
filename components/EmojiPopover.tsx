'use client'
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { EmojiArray } from "@/lib/emoji"
import { sendSnapMessage } from "@/lib/serveractions"
import { readFileAsDataURL } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useState } from "react"
import { MdEmojiEmotions } from "react-icons/md"

export function EmojiPopover() {
    const [loading, setLoading] = useState(false)
    const { id } = useParams<{ id: string }>()

    const sendEmojiHandler = async (srcUrl: string) => {
        setLoading(true)
        try {
            const blob = await fetch(srcUrl).then((res) => res.blob())
            const dataUrl = await readFileAsDataURL(blob)
            await sendSnapMessage(dataUrl, id, 'image')
        } catch (error) {
            console.log(error);
            throw error
        } finally {
            setLoading(false)
        }
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" size={'icon'} className="rounded-full">
                    {
                        loading ?
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> :
                            <MdEmojiEmotions size={'20px'} />
                    }
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="flex flex-wrap items-center gap-4">
                    {
                        EmojiArray.map((emoji, idx) => {
                            return (
                                <div key={idx} className="cursor-pointer scale-90 hover:scale-110 transition-transform duration-100" onClick={() => sendEmojiHandler(emoji.src)}>
                                    <Image src={emoji.src} alt={emoji.alt} width={35} height={35} />
                                </div>
                            )
                        })
                    }
                </div>
            </PopoverContent>
        </Popover>
    )
}
