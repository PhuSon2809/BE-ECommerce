import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { Dispatch, Fragment, SetStateAction } from 'react'
import { CloseIcon, WalletIcon } from '~/components/icons'
import { Navbar } from '~/layouts/components/navbar'
import PurchasesChart from './PurchasesChart'
import RecentPurchases from './RecentPurchases'
import './styles.scss'

type MenuCategoryDialogProps = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  isAuthenticate: boolean
}

function MenuCategoryDialog({ open, setOpen, isAuthenticate }: MenuCategoryDialogProps) {
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
              <div className='w-full py-10 flex gap-3'>
                <Navbar className={`p-[24.5px] !bg-white rounded-tl-none rounded-bl-none`} />
                <div className='w-full flex flex-1 flex-col items-end gap-3'>
                  <div
                    onClick={() => setOpen(false)}
                    className='w-[47px] h-8 pl-3 flex items-center bg-gradient-to-r from-greenMain to-blueMain rounded-[10px] rounded-tr-none rounded-br-none'
                  >
                    <CloseIcon color='#FFFFFF' className='size-[12px]' />
                  </div>
                  <div className='w-full h-[80px] px-[17.5px] flex items-center justify-between bg-white rounded-2xl rounded-tr-none rounded-br-none'>
                    {isAuthenticate ? (
                      <>
                        <div>
                          <p className='text-[18px] font-customSemiBold leading-[26px] capitalize mb-1'>balance</p>
                          <div className='flex items-center gap-1'>
                            <WalletIcon color='#626262' className='size-[14px]' />
                            <p className='text-[14px] text-blackMain/[.64] truncate'>fg8u...o84g</p>
                          </div>
                        </div>
                        <h1 className='text-[38px] font-customSemiBold leading-[39.9px] text-transparent bg-clip-text bg-gradient-to-tr from-[#5495FC] to-[#31D366]'>
                          $3,039
                        </h1>
                      </>
                    ) : (
                      <p className='font-customSemiBold'>
                        Sign In <span className='font-customRegular'>to check your wallet balance!</span>
                      </p>
                    )}
                  </div>

                  <RecentPurchases isAuthenticate={isAuthenticate} />

                  <PurchasesChart />
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  )
}

export default MenuCategoryDialog
