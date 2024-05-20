import { Link } from 'react-router-dom'
import { Button } from '~/components/button'
import './styles.scss'
import images from '~/assets'

function CheckoutComplete() {
  return (
    <section className='checkout-complete min-w-[100vw] min-h-[100vh] size-full flex flex-col items-center justify-center gap-[30px] text-center'>
      <h6 className='w-[969px] text-[28px] font-customSemiBold leading-[42px]'>
        Your order has been successfully completed and will be delivered to you in the near future. You can track the
        delivery status in the Personal Account.
      </h6>

      <div className='size-[274px] p-1 flex items-center justify-center bg-gradient-to-r from-greenMain to-blueMain mt-5'>
        <div className='bg-white size-full flex items-center justify-center'>
          <img src={images.checkout.QR} alt='OR-order' className='size-[243px]' />
        </div>
      </div>

      <p className='w-[569px] text-[18px] opacity-[.64]'>
        Use the <span className='font-customSemiBold'>Loyalty App</span> to scan the QR code to collect reward points
        and enjoy exclusive benefits
      </p>

      <div className='flex items-center gap-5'>
        <Link to={'/'}>
          <Button
            size='large'
            variant='outline'
            classNameText='!uppercase'
            className='w-[260px] h-[56px] rounded-[36px]'
          >
            track your order
          </Button>
        </Link>
        <Link to={'/'}>
          <Button
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
