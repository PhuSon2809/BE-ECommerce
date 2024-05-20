import { Dispatch, SetStateAction } from 'react'
import { ProductCart } from '~/@types/model'
import images from '~/assets'
import { CartItem } from '~/components/cartItem'
import { DialogCustom } from '~/components/dialog'
import SummaryCart from '~/sections/cart/SummaryCart'

type CartPopupProps = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  product: ProductCart
}

function CartPopup({ open, setOpen, product }: CartPopupProps) {
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
        <div className='w-full flex items-start gap-10 p-[30px]'>
          <div className='w-full flex flex-1 flex-col gap-5'>
            <h5 className='text-[32px] font-customBold'>Buy Product</h5>

            <div className='w-full h-[52px] flex items-center bg-white/[.32] border border-solid border-white rounded-xl focus-within:bg-white/[.5] relative'>
              <input
                type='text'
                placeholder='Enter voucher code - gift, referral code'
                className='appearance-none w-full h-full px-5 bg-transparent rounded-tl-xl rounded-bl-xl focus:bg-white/[.5]'
              />
              <img
                src={images.icons.copy}
                alt='icon-copy'
                className='absolute top-1/2 right-5 transform -translate-y-1/2 cursor-pointer'
              />
            </div>

            <CartItem hideSelect isInCartPopup productCart={product} />
          </div>
          <SummaryCart bgColor='bg-white' listProductCheckout={[product]} productIdsCheckout={[product.id]} />
        </div>
      </DialogCustom>
    </section>
  )
}

export default CartPopup
