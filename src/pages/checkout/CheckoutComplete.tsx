import { Link } from 'react-router-dom'
import { QueryConfig } from '~/@types/common'
import { ProductCart } from '~/@types/model'
import images from '~/assets'
import { Button } from '~/components/button'
import { CartItemCheckout } from '~/components/cartItemCheckout'
import useQueryConfig from '~/hooks/useQueryConfig'
import { useAppSelector } from '~/redux/configStore'

function CheckoutComplete() {
  const queryConfig: QueryConfig = useQueryConfig()

  const { cart } = useAppSelector((state) => state.product)

  const listItemCheckout = cart.filter((item) =>
    queryConfig.itemCheckoutIds
      ?.split(',')
      .map((item) => Number(item))
      .includes(item.id)
  )

  return (
    <div className='grid grid-cols-3 min-h-[90vh] h-full'>
      <div className='col-span-2'>
        <section className={`h-full px-20 py-[40px]`}>
          <div className='h-full flex flex-col justify-between'>
            <div>
              <img src={images.image.congratulations} alt='checkout-success' className='w-[203px] h-[216px]' />
              <div className='w-[606px] mt-10'>
                <h6 className=' text-[32px] font-customSemiBold leading-[46px]'>
                  Thank you for entrusting your care to us. Please be patient as we process your items as quickly as
                  possible!
                </h6>
                <p className='text-[18px] opacity-[.64]'>
                  Your order has been successfully completed and will be delivered to you in the near future. You can
                  track the delivery status in the Personal Account.
                </p>
              </div>
            </div>
            <Link to={'/'} className='ml-auto'>
              <Button
                size='large'
                variant='outline'
                classNameText='!uppercase'
                className='w-[300px] h-[56px] rounded-[36px]'
              >
                back to homepage
              </Button>
            </Link>
          </div>
        </section>
      </div>

      {/* list item checkout */}
      <div className='col-span-1'>
        <section className='w-full px-10 py-[80px] min-h-[100vh] h-full bg-greyMain flex flex-col justify-between gap-20'>
          <div className='flex flex-col gap-5'>
            <div className='flex items-center gap-3'>
              <p className='min-w-[200px] text-[20px]'>Order no</p>
              <p className='text-[20px] opacity-[.64]'>78hGk89</p>
            </div>
            <div className='flex items-center gap-3'>
              <p className='min-w-[200px] text-[20px]'>Est delivery date</p>
              <p className='text-[20px] opacity-[.64]'>08 Jan 2024</p>
            </div>
            <div className='flex items-start gap-3'>
              <p className='min-w-[200px] text-[20px]'>Shipping detail</p>
              <div>
                <p className='text-[20px] opacity-[.64]'>Chance Curtis</p>
                <p className='text-[20px] opacity-[.64]'>123 Main Street, Springfield, IL 62701</p>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-10'>
            <div className='flex items-center justify-between'>
              <p className='text-[20px] font-customMedium'>Total</p>
              <p className='text-[20px] font-customSemiBold leading-none'>
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
            <div className='flex flex-1 flex-col gap-6'>
              {listItemCheckout.map((cartItem) => (
                <CartItemCheckout key={cartItem.id} productCart={cartItem} />
              ))}
            </div>
            <div className='flex items-center justify-between'>
              <p className='text-[20px] font-customMedium'>Shipping</p>
              <p className='text-[20px] font-customSemiBold leading-none'>Free</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CheckoutComplete
