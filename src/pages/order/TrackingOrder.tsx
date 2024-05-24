import images from '~/assets'
import { CartItemCheckout } from '~/components/cartItemCheckout'
import { Search } from '~/components/search'
import { Navbar } from '~/layouts/components/navbar'
import { useAppSelector } from '~/redux/configStore'

const listTracking = [
  { id: 1, time: 'Today, 9:00', content: 'The order has been successfully delivered to you' },
  { id: 2, time: '18/03, 10:00', content: "The order is out for delivery to the customer's address" },
  { id: 3, time: '17/03, 12:00', content: 'The order has been shipped' },
  { id: 4, time: '16/03, 20:05', content: 'The product is being prepared and packed' },
  { id: 5, time: '16/03, 17:05', content: 'The order has been confirmed and is being prepared' },
  { id: 6, time: '16/03, 10:05', content: 'The order is awaiting confirmation from the supplier' },
  { id: 7, time: '15/03, 20:05', content: 'Placed an order for the product on the website' }
]

const trackingDelivery = [
  { id: 1, content: 'Awaiting' },
  { id: 2, content: 'In transit' },
  { id: 3, content: 'Delivered' }
]

function TrackingOrder() {
  const { cart } = useAppSelector((state) => state.cart)
  const trackingDeliveryActive = 3

  return (
    <section className='bg-[#f8f8f9]'>
      <div className='max-w-[1440px] mx-auto py-5 '>
        <div className='flex items-start gap-5'>
          <div className='sticky top-5'>
            <Navbar />
          </div>
          <div className='w-full flex flex-col gap-8'>
            <h1 className='text-[36px] font-customSemiBold leading-none'>Tracking Order</h1>

            <Search variant='outline' />

            <div className='w-full bg-white rounded-xl flex items-start'>
              <div className='w-[52.409%] h-full flex flex-col gap-10'>
                <p className='font-customSemiBold uppercase p-8 pb-0'>Delivery Journey</p>
                <div className='relative'>
                  <div className='w-full border-0 border-b-[2px] border-solid border-[#31D366]/[.22] absolute top-[30%] z-10' />
                  <div className='overflow-hidden flex items-center justify-evenly relative z-20'>
                    {trackingDelivery.map((tracking) => (
                      <div key={tracking.id} className='flex flex-col items-center gap-2'>
                        <div
                          className={`size-12 rounded-full bg-white flex items-center justify-center ${tracking.id === trackingDeliveryActive && 'border-[2px] border-solid border-[#31D366]'}`}
                        >
                          <div className='size-9 rounded-full bg-[#31D366] flex items-center justify-center'>
                            {tracking.id === trackingDeliveryActive ? (
                              <img src={images.icons.delivery} alt='icon-delivery' />
                            ) : (
                              <img src={images.icons.double_check} alt='icon-double-check' />
                            )}
                          </div>
                        </div>
                        <p
                          className={`${tracking.id === trackingDeliveryActive ? 'font-customSemiBold' : 'font-customRegular'}`}
                        >
                          {tracking.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='flex flex-col gap-3 p-8 pt-0'>
                  {listTracking.map((history) => (
                    <div key={history.id} className='flex items-center gap-12'>
                      <p className='w-[130px] text-[18px] text-right'>{history.time}</p>
                      <p className='text-[18px] font-customMedium'>{history.content}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className='w-[47.591%]'>
                <div className='p-8 flex flex-col gap-4 border-0 border-l-[1px] border-b-[1px] border-blackMain/[.1] border-solid'>
                  <p className='font-customSemiBold uppercase'>Product detail</p>
                  <div className='flex flex-col gap-4'>
                    {cart.map((cartItem) => (
                      <CartItemCheckout key={cartItem.id} productCart={cartItem} inOrder />
                    ))}
                  </div>
                </div>
                <div className='p-8 flex items-start border-0 border-l-[1px] border-blackMain/[.1] border-solid'>
                  <div className='w-[30%] flex flex-col gap-[15px]'>
                    <div>
                      <p className='text-[14px] opacity-[.64]'>Order</p>
                      <p className='font-customSemiBold'>#747hhdGhh639</p>
                    </div>
                    <div>
                      <p className='text-[14px] opacity-[.64]'>Date of order</p>
                      <p className='font-customSemiBold'>15/03/2024</p>
                    </div>
                  </div>
                  <div className='w-[35%] flex flex-col gap-[15px]'>
                    <div>
                      <p className='text-[14px] opacity-[.64]'>Payment method</p>
                      <p className='font-customSemiBold'>#Wallet - gf6f ...h87h </p>
                    </div>
                    <div>
                      <p className='text-[14px] opacity-[.64]'>Estimated delivery time</p>
                      <p className='font-customSemiBold'>20/03/2024</p>
                    </div>
                  </div>
                  <div className='w-[35%] flex flex-col gap-[15px]'>
                    <div>
                      <p className='text-[14px] opacity-[.64]'>Shipping fee</p>
                      <p className='font-customSemiBold'>Free shipping</p>
                    </div>
                    <div className='flex gap-2 items-end mt-5'>
                      <p className='text-[14px] opacity-[.64]'>Total price</p>
                      <p className='text-[32px] leading-none font-customSemiBold text-transparent bg-clip-text bg-gradient-to-tr from-[#5495FC] to-[#31D366]'>
                        $360.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrackingOrder
