import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { Dispatch, Fragment, ReactNode, SetStateAction, useRef } from 'react'

type DialogCustomProps = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  children: ReactNode
  className?: string
}

function DialogCustom({ open, setOpen, children, className }: DialogCustomProps) {
  const cancelButtonRef = useRef(null)

  return (
    <Transition show={open} as={Fragment}>
      <Dialog className='relative z-10' initialFocus={cancelButtonRef} onClose={setOpen}>
        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-start justify-center ml-[122px]'>
            <TransitionChild
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <DialogPanel
                className={`transform overflow-hidden bg-white/[.44] backdrop-blur-[40px] shadow-4xl rounded-tr-xl rounded-br-xl transition-all my-3 w-full max-w-[1308px] min-h-[500px] ${className}`}
              >
                <div className='px-5 py-5'>{children}</div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default DialogCustom
