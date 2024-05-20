import { Dispatch, SetStateAction } from 'react'
import { DialogCustom } from '~/components/dialog'

type Props = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

function SelectCreateWalletDialog({ open, setOpen }: Props) {
  return (
    <section>
      <DialogCustom
        open={open}
        setOpen={setOpen}
        showBackground
        variant='horizontal'
        positionDialog='items-center'
        className={`!max-w-[1164px] bg-white/[.76] backdrop-blur-0 !rounded-2xl`}
      >
        <h5 className='text-[32px] font-customBold'>wallet</h5>
      </DialogCustom>
    </section>
  )
}

export default SelectCreateWalletDialog
