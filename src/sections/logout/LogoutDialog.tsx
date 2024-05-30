import { Dispatch, SetStateAction } from 'react'
import { Dialog } from '~/components/dialog'
import { CloseIcon, LogoutIcon } from '~/components/icons'
import { Button } from '~/components/button'

type LogoutDialogProps = { open: boolean; setOpen: Dispatch<SetStateAction<boolean>> }

function LogoutDialog({ open, setOpen }: LogoutDialogProps) {
  return (
    <Dialog
      open={open}
      setOpen={setOpen}
      className='xs:w-full sm:w-[538px] xs:h-[258px] sm:h-[316px] bg-white/[.88] !rounded-2xl'
    >
      <div className='h-full flex flex-col items-center justify-center gap-4 relative'>
        <LogoutIcon className='xs:size-[60px] sm:size-[80px]' />
        <div className='space-y-3'>
          <h1 className='xs:text-[18px] sm:text-[28px] font-customBold xs:leading-[18.9px] sm:leading-[29.4px]'>
            Log Out?
          </h1>
          <p className='xs:text-[14px] sm:text-[20px] text-blackMain/[.76] xs:leading-[14.7px] sm:leading-[21px]'>
            Are you sure want to log out?
          </p>
        </div>
        <div className='flex items-center gap-4 mt-4'>
          <Button
            size='medium'
            variant='outline'
            className={`xs:w-[120px] xs:h-10 sm:w-[180px] sm:h-12`}
            classNameText='xs:text-[14px] sm:text-[18px] !uppercase'
          >
            See detail
          </Button>
          <Button
            size='medium'
            className={`xs:w-[120px] xs:h-10 sm:w-[180px] sm:h-12`}
            classNameText='xs:text-[14px] sm:text-[18px] !uppercase'
          >
            Chat now
          </Button>
        </div>

        <div className='absolute top-4 right-4' onClick={() => setOpen(false)}>
          <CloseIcon className='xs:size-4 sm:size-6' />
        </div>
      </div>
    </Dialog>
  )
}

export default LogoutDialog
