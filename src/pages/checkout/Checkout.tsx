import { useState } from 'react'
// redux
import { useAppSelector } from '~/redux/configStore'
//
import { QueryConfig } from '~/@types/common'
import { ProductCart } from '~/@types/model'
import { CartItemCheckout } from '~/components/cartItemCheckout'
import useQueryConfig from '~/hooks/useQueryConfig'
import { CheckoutForm } from '~/sections/checkout'

function Checkout() {
  const queryConfig: QueryConfig = useQueryConfig()

  const { cart } = useAppSelector((state) => state.product)

  const [step, setStep] = useState<1 | 2>(1)

  const listItemCheckout = cart.filter((item) =>
    queryConfig.itemCheckoutIds
      ?.split(',')
      .map((item) => Number(item))
      .includes(item.id)
  )

  return (
    <div className='grid grid-cols-3 min-h-[90vh] h-full'>
      <div className='col-span-2'>
        <section className={`h-full px-20 py-[80px]`}>
          <h6 className='text-[32px] font-customBold leading-none mb-[30px]'>
            {step === 1 ? 'Shipping Information' : 'Payment Method'}
          </h6>
          <CheckoutForm step={step} setStep={setStep} />
        </section>
      </div>

      {/* list item checkout */}
      <div className='col-span-1'>
        <section className='w-full px-10 py-[80px] min-h-[100vh] h-full bg-greyMain flex flex-col'>
          <h6 className='text-[32px] font-customBold leading-none mb-[30px]'>Order Summary</h6>
          <div className='flex flex-1 flex-col gap-6 mb-[30px]'>
            {listItemCheckout.map((cartItem) => (
              <CartItemCheckout key={cartItem.id} productCart={cartItem} />
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
                {cart.length > 0
                  ? listItemCheckout
                      .reduce((total: number, currentProduct: ProductCart) => {
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
