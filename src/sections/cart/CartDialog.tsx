import { Dispatch, SetStateAction } from 'react'
import { ProductInStorage } from '~/@types/models'
import { CartItem } from '~/components/cartItem'
import { DialogCustom } from '~/components/dialog'
import useResponsive from '~/hooks/useResponsive'
import SummaryCart from '~/sections/cart/SummaryCart'

type CartPopupProps = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  product: ProductInStorage
}

function CartPopup({ open, setOpen, product }: CartPopupProps) {
  const smDown = useResponsive('down', 'sm')

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
        <div className='w-full flex xs:flex-col sm:flex-row items-start xs:p-0 sm:p-5 md:p-[30px]'>
          <div className='w-full flex flex-1 flex-col gap-5 xs:pb-5 sm:pb-0 xs:pr-0 sm:pr-10'>
            <h5 className='text-[32px] font-customBold'>Buy Product</h5>

            <CartItem hideSelect isInCartPopup isInCartResponsive={smDown} cartItem={product} />
          </div>
          <SummaryCart bgColor='bg-white' listProductCheckout={[product]} productIdsCheckout={[product.id]} />
        </div>
      </DialogCustom>
    </section>
  )
}

export default CartPopup
