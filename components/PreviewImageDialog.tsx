import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog"
import Image from "next/image"

export function PreviewImageDialog(
  { selectedFile, close, imageChange, setFlag }:
    { selectedFile: string, close: () => void, imageChange: any, setFlag: any }
) {
  return (
    <Dialog open={!!selectedFile}>
      <DialogContent
        onInteractOutside={close}
        className="sm:max-w-[425px] bg-white border max-w-xl flex flex-col">
        <DialogHeader>
          <div className="flex items-center relative h-3/4 my-auto">
            <Image src={selectedFile} alt="selectedfile" height={400} width={400} className="rounded-md border mx-auto border-gray-400 object-contain" />
          </div>
        </DialogHeader>

        <DialogFooter className="mx-auto flex items-center">
          <DialogClose asChild>
            <Button variant={'destructive'} size={'sm'} onClick={close} className="rounded-full">Cancel</Button>
          </DialogClose>
          <Button size={'sm'} onClick={imageChange} className="rounded-full">Change</Button>
          <Button size={'sm'} onClick={() => setFlag && setFlag(true)} className="rounded-full px-4 bg-green-500 hover:bg-green-400">Next</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
