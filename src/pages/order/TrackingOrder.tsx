import images from '~/assets'
import { CartItemCheckout } from '~/components/cartItemCheckout'
import { DeliveredIcon, DoubleCheckIcon } from '~/components/icons'
import { Search } from '~/components/search'
import useDialog from '~/hooks/useDialog'
import { Navbar } from '~/layouts/components/navbar'
import { useAppSelector } from '~/redux/configStore'
import { NavbarDialog } from '~/sections/common'

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

  const { isOpen, setIsOpen } = useDialog()

  return (
    <>
      <section className='bg-[#f8f8f9] xs:pb-4'>
        <div className='max-w-[1440px] min-h-screen mx-auto xs:p-0 sm:py-5'>
          <div className='flex items-start gap-5 xs:p-0 sm:px-5 lg:px-0'>
            <div className='sticky top-5 xs:hidden sm:flex'>
              <Navbar />
            </div>
            <div className='w-full flex flex-col gap-8'>
              <div className='xs:p-4 xs:pb-0 sm:p-0 sm:pb-0'>
                <h1 className='text-[36px] font-customSemiBold leading-none'>Tracking Order</h1>
              </div>

              <div className='flex items-center gap-3 xs:px-4'>
                <div
                  onClick={() => setIsOpen(true)}
                  className='w-20 h-11 xs:flex sm:hidden items-center justify-center bg-white rounded-lg cursor-pointer'
                >
                  <img src={images.icons.menu} alt='icon-menu' className='' />
                </div>
                <div className='w-full'>
                  <Search variant='outline' />
                </div>
              </div>

              <div className='w-full min-h-[500px] xs:bg-transparent lg:bg-white xs:rounded-bl-none xs:rounded-br-none rounded-xl flex xs:flex-col sm:flex-col md:flex-col lg:flex-row items-start xs:gap-5 sm:gap-5 md:gap-5 lg:gap-0'>
                <div className='xs:w-full sm:w-full md:w-full lg:w-[52.409%] min-h-full flex flex-col xs:gap-5 sm:gap-10 xs:bg-white sm:bg-white md:bg-white lg:bg-transparent xs:rounded-tl-xl xs:rounded-bl-xl sm:rounded-xl lg:rounded-none border-0 xs:border-r-0 lg:border-r-[1px] border-blackMain/[.1] border-solid'>
                  <p className='font-customSemiBold uppercase xs:p-4 xs:pb-0 sm:p-8 pb-0'>Delivery Journey</p>
                  <div className='relative'>
                    <div className='w-full border-0 border-b-[2px] border-solid border-[#31D366]/[.22] absolute top-[30%] z-10' />
                    <div className='overflow-hidden flex items-center justify-evenly relative z-20'>
                      {trackingDelivery.map((tracking) => (
                        <div key={tracking.id} className='flex flex-col items-center xs:gap-1 sm:gap-2'>
                          <div
                            className={`xs:size-8 sm:size-12 rounded-full bg-white flex items-center justify-center ${tracking.id === trackingDeliveryActive && 'xs:border-[1.88px] sm:border-[2px] border-solid border-[#31D366]'}`}
                          >
                            <div className='xs:size-[23.58px] sm:size-9 rounded-full bg-[#31D366] flex items-center justify-center'>
                              {tracking.id === trackingDeliveryActive ? (
                                <DeliveredIcon className='xs:size-[16.84px] sm:size-5' />
                              ) : (
                                <DoubleCheckIcon className='xs:size-[16.84px] sm:size-5' />
                              )}
                            </div>
                          </div>
                          <p
                            className={`xs:text-[12px] sm:text-[16px] ${tracking.id === trackingDeliveryActive ? 'font-customSemiBold' : 'font-customRegular'}`}
                          >
                            {tracking.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='flex flex-col gap-3 xs:p-4 xs:pt-0 sm:p-8 pt-0'>
                    {listTracking.map((history) => (
                      <div key={history.id} className='flex items-start xs:gap-5 sm:gap-12'>
                        <p className='xs:min-w-[80px] sm:min-w-[130px] xs:text-[14px] sm:text-[18px] text-right text-nowrap'>
                          {history.time}
                        </p>
                        <p className='xs:text-[14px] sm:text-[18px] font-customMedium'>{history.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='w-full h-full flex flex-1 flex-col justify-between xs:bg-white sm:bg-white md:bg-white lg:bg-transparent xs:rounded-tl-xl xs:rounded-bl-xl sm:rounded-xl'>
                  <div className='h-full xs:p-4 sm:p-8 flex flex-1 flex-col gap-4 border-0 border-b-[1px] border-blackMain/[.1] border-solid'>
                    <p className='font-customSemiBold uppercase'>Product detail</p>
                    <div className='h-full flex flex-1 flex-col gap-4'>
                      {cart.map((cartItem) => (
                        <CartItemCheckout key={cartItem.id} cartItem={cartItem} inOrder />
                      ))}
                    </div>
                  </div>
                  <div className='xs:p-4 sm:p-5 md:p-5 lg:p-8 flex xs:flex-col sm:flex-col md:flex-col lg:flex-row items-start xs:gap-4 sm:gap-4 md:gap-4 lg:gap-0'>
                    <div className='xs:w-full sm:w-full md:w-full lg:w-[30%] flex xs:flex-row sm:flex-row md:flex-row lg:flex-col gap-[15px] justify-between'>
                      <div className='xs:w-1/2 sm:w-1/2 md:w-1/2 lg:w-fit'>
                        <p className='text-[14px] opacity-[.64]'>Order</p>
                        <p className='font-customSemiBold'>#747hhdGhh639</p>
                      </div>
                      <div className='w-1/2 xs:block sm:block md:block lg:hidden'>
                        <p className='text-[14px] opacity-[.64]'>Payment method</p>
                        <p className='font-customSemiBold'>#Wallet - gf6f ...h87h </p>
                      </div>
                      <div className='xs:hidden sm:hidden md:hidden lg:block'>
                        <p className='text-[14px] opacity-[.64]'>Date of order</p>
                        <p className='font-customSemiBold'>15/03/2024</p>
                      </div>
                    </div>
                    <div className='xs:w-full sm:w-full md:w-full lg:w-[35%] flex xs:flex-row sm:flex-row md:flex-row lg:flex-col gap-[15px] justify-between'>
                      <div className='xs:hidden sm:hidden md:hidden lg:block'>
                        <p className='text-[14px] opacity-[.64]'>Payment method</p>
                        <p className='font-customSemiBold'>#Wallet - gf6f ...h87h </p>
                      </div>
                      <div className='w-1/2 xs:block sm:block md:block lg:hidden'>
                        <p className='text-[14px] opacity-[.64]'>Date of order</p>
                        <p className='font-customSemiBold'>15/03/2024</p>
                      </div>
                      <div className='xs:w-1/2 sm:w-1/2 md:w-1/2 lg:w-fit'>
                        <p className='text-[14px] opacity-[.64]'>Estimated delivery time</p>
                        <p className='font-customSemiBold'>20/03/2024</p>
                      </div>
                    </div>
                    <div className='xs:w-full sm:w-full md:w-full lg:w-[35%] flex xs:flex-row sm:flex-row md:flex-row lg:flex-col justify-between gap-[15px]'>
                      <div>
                        <p className='text-[14px] opacity-[.64]'>Shipping fee</p>
                        <p className='font-customSemiBold'>Free shipping</p>
                      </div>
                      <div className='flex gap-2 items-end mt-3'>
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

      <NavbarDialog open={isOpen} setOpen={setIsOpen} />
    </>
  )
}

export default TrackingOrder
