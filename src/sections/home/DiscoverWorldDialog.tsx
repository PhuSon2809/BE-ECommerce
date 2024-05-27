import { Dispatch, SetStateAction } from 'react'
import { Dialog } from '~/components/dialog'

type DiscoverWorldDialogProps = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

function DiscoverWorldDialog({ open, setOpen }: DiscoverWorldDialogProps) {
  return (
    <Dialog open={open} setOpen={setOpen} className='w-[1400px] h-[674px] bg-white/[.88] !rounded-2xl'>
      DiscoverWorldDialog
    </Dialog>
  )
}

export default DiscoverWorldDialog
