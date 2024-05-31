import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { Dispatch, Fragment, SetStateAction } from 'react'
import { CloseIcon } from '~/components/icons'
import TabProductList from './TabProductList'
import './styles.scss'

type TabCartDialogProps = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

function TabCartDialog({ open, setOpen }: TabCartDialogProps) {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog className='relative z-10' onClose={setOpen}>
        <TransitionChild
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black/[.2] transition-opacity' />
        </TransitionChild>

        <div className='fixed inset-0 z-10 w-screen overflow-y-auto min-h-full wrapper-content'>
          <TransitionChild
            as={Fragment}
            enter='ease-out duration-150'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <DialogPanel className='sm:w-full sm:max-w-[100vw] sm:h-full sm:max-h-[100vh] bg-transparent transition-all'>
              <div className='w-full py-10 flex flex-1 flex-col items-end gap-3'>
                <div
                  onClick={() => setOpen(false)}
                  className='w-[47px] h-8 pl-3 flex items-center bg-gradient-to-r from-greenMain to-blueMain rounded-[10px] rounded-tr-none rounded-br-none'
                >
                  <CloseIcon color='#FFFFFF' className='size-[12px]' />
                </div>
                <TabProductList isInDialog />
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  )
}

export default TabCartDialog
