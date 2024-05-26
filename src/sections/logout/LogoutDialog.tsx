import { Dispatch, SetStateAction } from 'react'
import { Dialog } from '~/components/dialog'
import { CloseIcon, LogoutIcon } from '~/components/icons'
import { Button } from '~/components/button'

type LogoutDialogProps = { open: boolean; setOpen: Dispatch<SetStateAction<boolean>> }

function LogoutDialog({ open, setOpen }: LogoutDialogProps) {
  return (
    <Dialog open={open} setOpen={setOpen} className='w-[538px] h-[316px] bg-white/[.88] !rounded-2xl'>
      <div className='h-full flex flex-col items-center justify-center gap-4 relative'>
        <LogoutIcon />
        <div className='space-y-3'>
          <h1 className='text-[28px] font-customBold leading-[29.4px]'>Log Out?</h1>
          <p className='text-[20px] text-blackMain/[.76] leading-[21px]'>Are you sure want to log out?</p>
        </div>
        <div className='flex items-center gap-4 mt-4'>
          <Button size='medium' variant='outline' className={`w-[180px]`} classNameText='text-[18px] !uppercase'>
            See detail
          </Button>
          <Button size='medium' className={`w-[180px]`} classNameText='text-[18px] !uppercase'>
            Chat now
          </Button>
        </div>

        <div className='absolute top-4 right-4' onClick={() => setOpen(false)}>
          <CloseIcon className='size-6' />
        </div>
      </div>
    </Dialog>
  )
}

export default LogoutDialog
