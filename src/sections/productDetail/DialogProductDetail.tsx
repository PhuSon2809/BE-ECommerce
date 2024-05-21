import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { Dispatch, Fragment, SetStateAction } from 'react'
import { ProductDetail } from '~/pages/productDetail'

type DialogProductDetailProps = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

function DialogProductDetail({ open, setOpen }: DialogProductDetailProps) {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog className='relative z-10' onClose={setOpen}>
        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center sm:items-center'>
            <TransitionChild
              as={Fragment}
              enter='ease-out duration-150'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <DialogPanel className='sm:w-full sm:max-w-[100vw] sm:h-full sm:max-h-[100vh] bg-white transition-all overflow-y-auto'>
                <ProductDetail setOpen={setOpen} />
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default DialogProductDetail
