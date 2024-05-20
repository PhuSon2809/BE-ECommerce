import { createSearchParams, useNavigate } from 'react-router-dom'

import { ProductCart } from '~/@types/model'
import images from '~/assets'
import { Button } from '~/components/button'
import { PATH_PUBLIC_APP } from '~/constants/paths'
import useDialog from '~/hooks/useDialog'
import { CheckConfirmDialog } from '~/sections/checkout'

type SummaryCartProps = {
  listProductCheckout: ProductCart[]
  productIdsCheckout: readonly number[]
  inCartPage?: boolean
  bgColor?: string
}

function SummaryCart({ listProductCheckout, productIdsCheckout, inCartPage = false, bgColor }: SummaryCartProps) {
  const navigate = useNavigate()

  const { isOpen, setIsOpen, handleOpen } = useDialog()

  return (
    <>
      <div className='w-[418px]'>
        <div className={`p-[31.5px] flex flex-col gap-6 ${bgColor ? bgColor : 'bg-greyLight'} rounded mb-5`}>
          <h6 className='text-[32px] font-customBold leading-none capitalize'>summary</h6>
          <div className='w-full flex items-center justify-between'>
            <p className={`text-[20px] ${bgColor ? 'opacity-100' : 'opacity-[.64]'} leading-none`}>Subtotal</p>
            <p className='text-[20px] font-customSemiBold leading-none'>
              $
              {productIdsCheckout.length > 0
                ? listProductCheckout
                    .reduce((total: number, currentProduct: ProductCart) => {
                      return total + currentProduct.quantityInCart * currentProduct.price
                    }, 0)
                    .toFixed(2)
                : (0).toFixed(2)}
            </p>
          </div>
          <div className='w-full flex items-center justify-between'>
            <p className={`text-[20px] ${bgColor ? 'opacity-100' : 'opacity-[.64]'} leading-none`}>Discount code</p>
            <p className='text-[20px] font-customSemiBold leading-none'>-${(20).toFixed(2)}</p>
          </div>
          <div className='w-full flex items-center justify-between'>
            <p className={`text-[20px] ${bgColor ? 'opacity-100' : 'opacity-[.64]'} leading-none`}>
              Estimated Delivery & Handling
            </p>
            <p className='text-[20px] font-customSemiBold leading-none'>Free</p>
          </div>

          <div className='h-[1px] w-full bg-blackMain/[.12]'></div>

          <div className='w-full flex items-center justify-between'>
            <p className='text-[20px] opacity-[.64] leading-none'>Total</p>
            <p className='text-[32px] font-customSemiBold'>
              $
              {productIdsCheckout.length > 0
                ? (
                    listProductCheckout.reduce((total: number, currentProduct: ProductCart) => {
                      return total + currentProduct.quantityInCart * currentProduct.price
                    }, 0) - 20
                  ).toFixed(2)
                : (0).toFixed(2)}
            </p>
          </div>
        </div>

        {inCartPage && (
          <div className='w-full h-[60px] px-5 bg-greyMain focus-within:bg-greyMain flex items-center justify-between rounded mb-5'>
            <input type='text' placeholder='Promocode' className='w-full h-full bg-greyMain border-none outline-none' />
            <img src={images.icons.copy} alt='icon-copy' className='cursor-pointer' />
          </div>
        )}

        <div className='flex flex-col gap-5'>
          <Button
            classNameText='!uppercase'
            className='w-full h-[72px] rounded-[36px]'
            disabled={productIdsCheckout.length === 0}
            onClick={handleOpen}
          >
            checkout
          </Button>
          <Button
            variant='outline'
            className='w-full h-[72px] rounded-[36px]'
            classNameText='!uppercase'
            onClick={() =>
              navigate({
                pathname: PATH_PUBLIC_APP.cart.share,
                search: createSearchParams({
                  cartShareType: 'share-link'
                }).toString()
              })
            }
          >
            share
          </Button>

          <div className='flex items-center gap-[10px]'>
            <img src={images.icons.info} alt='icon-info' />
            <p className=''>hshshshshjhhshhshhshjsshhshhssh</p>
          </div>
        </div>
      </div>

      <CheckConfirmDialog open={isOpen} setOpen={setIsOpen} productIdsCheckout={productIdsCheckout} />
    </>
  )
}

export default SummaryCart
