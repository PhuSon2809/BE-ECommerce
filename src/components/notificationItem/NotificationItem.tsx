import images from '~/assets'
import { CircleIcon } from '~/components/icons'

function NotificationItem() {
  return (
    <div className='p-4 bg-white backdrop-blur-[80px] rounded-lg shadow-popover-custom-2 flex items-center gap-4 relative'>
      <img
        src={images.home.home_rich_food_1}
        alt='product-title'
        className='size-[68px] rounded object-cover object-center'
      />
      <div className='space-y-2'>
        <p className='text-[20px] font-customSemiBold leading-[21px]'>The order has been successfully delivered!</p>
        <p className='text-blackMain/[.64] leading-[16.8px]'>
          Please let us know your feedback on the product! Order ID: #24225262262
        </p>
      </div>

      <div className='flex flex-col items-end gap-1 absolute top-[5px] right-[5px]'>
        <CircleIcon color='#31D366' opacity='1' className='size-2' />
        <p className='pr-2 text-blackMain/[.64] leading-[16.8px]'>16/04/2024, 08:25</p>
      </div>
    </div>
  )
}

export default NotificationItem
