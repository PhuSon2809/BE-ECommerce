import { createSearchParams, useNavigate } from 'react-router-dom'
// redux
import { useAppSelector } from '~/redux/configStore'
//
import { QueryConfig } from '~/@types/common'
import { ProductInStorage } from '~/@types/models'
import images from '~/assets'
import { Button } from '~/components/button'
import { CartItemCheckout } from '~/components/cartItemCheckout'
import { PATH_PRIVATE_APP } from '~/constants/paths'
import { QUERY_PARAM_STRING } from '~/constants/queryParamString'
import useQueryConfig from '~/hooks/useQueryConfig'
import { CheckoutForm } from '~/sections/checkout'

function Checkout() {
  const navigate = useNavigate()

  const queryConfig: QueryConfig = useQueryConfig()

  const { cart } = useAppSelector((state) => state.cart)

  const listItemCheckout = queryConfig.itemCheckoutIds
    ? cart.filter((item) =>
        queryConfig.itemCheckoutIds
          ?.split(',')
          .map((item) => Number(item))
          .includes(item.id)
      )
    : cart

  return (
    <div className='grid grid-cols-3'>
      <div className='col-span-2'>
        <section className={`h-full px-20 py-10 flex flex-col gap-10`}>
          <div className='w-full h-[52px] flex items-center bg-greyMain rounded-lg relative'>
            <input placeholder='Enter ref code' className='appearance-none w-full h-full px-5 bg-transparent' />
            <img
              src={images.icons.copy}
              alt='icon-copy'
              className='absolute top-1/2 right-5 transform -translate-y-1/2 cursor-pointer'
            />
          </div>

          <div className='w-full flex item-center gap-5'>
            <Button
              fullWidth
              classNameText='text-[16.67px] !uppercase'
              variant={
                queryConfig.checkoutType === QUERY_PARAM_STRING.checkoutType.receiveProduct ? 'container' : 'grey'
              }
              onClick={() =>
                navigate({
                  search: createSearchParams(
                    queryConfig.itemCheckoutIds
                      ? {
                          itemCheckoutIds: queryConfig.itemCheckoutIds,
                          checkoutType: QUERY_PARAM_STRING.checkoutType.receiveProduct
                        }
                      : {
                          checkoutType: QUERY_PARAM_STRING.checkoutType.receiveProduct
                        }
                  ).toString()
                })
              }
            >
              receive product
            </Button>
            <Button
              fullWidth
              classNameText='text-[16.67px] !uppercase'
              variant={
                queryConfig.checkoutType === QUERY_PARAM_STRING.checkoutType.storageForResale ? 'container' : 'grey'
              }
              onClick={() =>
                navigate({
                  pathname: PATH_PRIVATE_APP.checkout.root,
                  search: createSearchParams(
                    queryConfig.itemCheckoutIds
                      ? {
                          itemCheckoutIds: queryConfig.itemCheckoutIds,
                          checkoutType: QUERY_PARAM_STRING.checkoutType.storageForResale
                        }
                      : {
                          checkoutType: QUERY_PARAM_STRING.checkoutType.storageForResale
                        }
                  ).toString()
                })
              }
            >
              Storage for resale
            </Button>
          </div>

          <h6 className='text-[32px] font-customBold leading-none'>Shipping Information</h6>

          <CheckoutForm />
        </section>
      </div>

      {/* list item checkout */}
      <div className='col-span-1'>
        <section className='w-full px-10 py-10 min-h-[100vh] bg-greyMain flex flex-col gap-[30px] sticky top-0'>
          <h6 className='text-[32px] font-customBold leading-none'>Order Summary</h6>
          <div className='flex flex-1 flex-col gap-6 mb-[30px]'>
            {listItemCheckout.map((cartItem) => (
              <CartItemCheckout key={cartItem.id} cartItem={cartItem} />
            ))}
          </div>
          <div className='flex flex-col gap-5'>
            <div className='flex items-center justify-between'>
              <p className='text-[20px] font-customMedium'>Promocode</p>
              <input type='text' placeholder='enter code' className='bg-greyMain text-right outline-none border-none' />
            </div>
            <div className='flex items-center justify-between'>
              <p className='text-[20px] font-customMedium'>Total</p>
              <p className='text-[32px] font-customSemiBold leading-none'>
                $
                {listItemCheckout.length > 0
                  ? listItemCheckout
                      .reduce((total: number, currentProduct: ProductInStorage) => {
                        return total + currentProduct.quantityInCart * currentProduct.price
                      }, 0)
                      .toFixed(2)
                  : (0).toFixed(2)}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Checkout
