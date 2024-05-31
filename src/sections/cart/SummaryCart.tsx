import { createSearchParams, useNavigate } from 'react-router-dom'

import { ProductInStorage } from '~/@types/models'
import images from '~/assets'
import { Button } from '~/components/button'
import { PATH_PUBLIC_APP } from '~/constants/paths'
import useDialog from '~/hooks/useDialog'
import { CheckConfirmDialog } from '~/sections/checkout'

type SummaryCartProps = {
  listProductCheckout: ProductInStorage[]
  productIdsCheckout: readonly number[]
  inCartPage?: boolean
  bgColor?: string
}

function SummaryCart({ listProductCheckout, productIdsCheckout, inCartPage = false, bgColor }: SummaryCartProps) {
  const navigate = useNavigate()

  const { isOpen, setIsOpen, handleOpen } = useDialog()

  return (
    <>
      <div className='xs:w-full sm:w-full md:w-full lg:w-[418px] xs:pb-[30px]'>
        <div
          className={`xs:px-4 xs:py-[30px] sm:p-[31.5px] flex flex-col xs:gap-4 sm:gap-6 ${bgColor ? bgColor : 'bg-greyLight'} rounded mb-5`}
        >
          <h6 className='xs:text-[27px] sm:text-[32px] font-customBold leading-none capitalize'>summary</h6>
          <div className='w-full flex items-center justify-between'>
            <p
              className={`xs:text-[16px] sm:text-[20px] ${bgColor ? 'opacity-100' : 'xs:opacity-100 sm:opacity-[.64]'} leading-none`}
            >
              Subtotal
            </p>
            <p className='xs:text-[16px] sm:text-[20px] font-customSemiBold leading-none'>
              $
              {productIdsCheckout.length > 0
                ? listProductCheckout
                    .reduce((total: number, currentProduct: ProductInStorage) => {
                      return total + currentProduct.quantityInCart * currentProduct.price
                    }, 0)
                    .toFixed(2)
                : (0).toFixed(2)}
            </p>
          </div>
          <div className='w-full flex items-center justify-between'>
            <p
              className={`xs:text-[16px] sm:text-[20px] ${bgColor ? 'opacity-100' : 'xs:opacity-100 sm:opacity-[.64]'} leading-none`}
            >
              Discount code
            </p>
            <p className='xs:text-[16px] sm:text-[20px] font-customSemiBold leading-none'>-${(20).toFixed(2)}</p>
          </div>
          <div className='w-full flex items-center justify-between'>
            <p
              className={`xs:text-[16px] sm:text-[20px] ${bgColor ? 'opacity-100' : 'xs:opacity-100 sm:opacity-[.64]'} leading-none`}
            >
              Estimated Delivery & Handling
            </p>
            <p className='xs:text-[16px] sm:text-[20px] font-customSemiBold leading-none'>Free</p>
          </div>

          <div className='h-[1px] w-full bg-blackMain/[.12]'></div>

          <div className='w-full flex items-center justify-between'>
            <p className='xs:text-[16px] sm:text-[20px] xs:opacity-100 sm:opacity-[.64] leading-none'>Total</p>
            <p className='xs:text-[22.45px] sm:text-[32px] font-customSemiBold'>
              $
              {productIdsCheckout.length > 0
                ? (
                    listProductCheckout.reduce((total: number, currentProduct: ProductInStorage) => {
                      return total + currentProduct.quantityInCart * currentProduct.price
                    }, 0) - 20
                  ).toFixed(2)
                : (0).toFixed(2)}
            </p>
          </div>
        </div>

        <div
          className={`${inCartPage ? 'xs:hidden' : 'xs:flex'} sm:flex w-full h-[60px] px-5 ${bgColor ? bgColor : 'bg-greyMain'} focus-within:bg-greyMain  items-center justify-between rounded mb-5`}
        >
          <input
            type='text'
            placeholder='Promocode'
            className={`w-full h-full ${bgColor ? bgColor : 'bg-greyMain'} border-none outline-none`}
          />
          <img src={images.icons.copy} alt='icon-copy' className='cursor-pointer' />
        </div>

        <div className='flex xs:flex-col sm:flex-row lg:flex-col gap-5 xs:px-4 sm:px-0'>
          <Button
            fullWidth
            classNameText='xs:text-[18px] sm:text-[20px] !uppercase'
            className='xs:h-[58px] sm:h-[72px] rounded-[36px]'
            disabled={productIdsCheckout.length === 0}
            onClick={handleOpen}
          >
            checkout
          </Button>
          <Button
            fullWidth
            variant='outline'
            className='xs:h-[58px] sm:h-[72px] rounded-[36px]'
            classNameText='xs:text-[18px] sm:text-[20px] !uppercase'
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

          <div className='xs:flex sm:hidden items-center gap-[10px]'>
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
