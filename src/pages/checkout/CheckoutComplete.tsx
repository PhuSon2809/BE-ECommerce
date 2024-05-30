import { Link } from 'react-router-dom'
import { Button } from '~/components/button'
import './styles.scss'
import images from '~/assets'
import useResponsive from '~/hooks/useResponsive'

function CheckoutComplete() {
  const smDown = useResponsive('down', 'sm')
  const mdDown = useResponsive('down', 'md')

  return (
    <section className='checkout-complete min-w-[100vw] min-h-[100vh] xs:px-4 sm:px-5 md:px-5 lg:px-0 size-full flex flex-col items-center justify-center gap-[30px] text-center'>
      <h6 className='xs:w-full sm:w-full md:w-full lg:w-[969px] xs:text-[18px] sm:text-[28px] font-customSemiBold leading-[42px]'>
        Your order has been successfully completed and will be delivered to you in the near future. You can track the
        delivery status in the Personal Account.
      </h6>

      <div className='size-[274px] p-1 flex items-center justify-center bg-gradient-to-r from-greenMain to-blueMain mt-5'>
        <div className='bg-white size-full flex items-center justify-center'>
          <img src={images.checkout.QR} alt='OR-order' className='size-[243px]' />
        </div>
      </div>

      <p className='xs:w-[100%] sm:w-[80%] md:w-[60%] lg:w-[569px] xs:text-[14px] sm:text-[18px] opacity-[.64]'>
        Use the <span className='font-customSemiBold'>Loyalty App</span> to scan the QR code to collect reward points
        and enjoy exclusive benefits
      </p>

      <div className='w-full last:flex xs:flex-col sm:flex-col lg:flex-row items-center justify-center gap-5'>
        <Link to={'/'} className='xs:w-full sm:w-full md:w-fit xs:order-2 sm:order-2 md:order-1 lg:order-1'>
          <Button
            fullWidth={smDown || mdDown}
            size='large'
            variant='outline'
            classNameText='!uppercase'
            className='w-[260px] h-[56px] rounded-[36px]'
          >
            track your order
          </Button>
        </Link>
        <Link to={'/'} className='xs:w-full sm:w-full md:w-fit xs:order-1 sm:order-1 md:order-2 lg:order-2'>
          <Button
            fullWidth={smDown || mdDown}
            size='large'
            variant='container'
            classNameText='!uppercase'
            className='w-[183px] h-[56px] rounded-[36px]'
          >
            view order
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default CheckoutComplete
