import images from '~/assets'
import { CircleIcon } from '~/components/icons'

function NotificationItem() {
  return (
    <div className='xs:p-[9.5px] sm:p-4 bg-white backdrop-blur-[80px] rounded-lg shadow-popover-custom-2 relative'>
      <div className='xs:pl-[5px] sm:pl-0 flex sm:flex-col xs:items-start sm:items-end xs:justify-between gap-1 xs:relative sm:absolute top-[5px] right-[5px]'>
        <CircleIcon color='#31D366' opacity='1' className='size-2 xs:order-2' />
        <p className='xs:pr-0 sm:pr-2 xs:text-[12px] sm:text-[16px] text-blackMain/[.64] xs:leading-[12.6px] sm:leading-[16.8px]'>
          16/04/2024, 08:25
        </p>
      </div>
      <div className='flex xs:items-start sm:items-center md:items-center  xs:gap-[10px] sm:gap-4 xs:mt-4 sm:mt-0'>
        <img
          src={images.home.home_rich_food_1}
          alt='product-title'
          className='xs:size-[56px] sm:size-[68px] rounded object-cover object-center'
        />
        <div className='xs:space-y-0 sm:space-y-2'>
          <p className='xs:text-[14px] sm:text-[20px] font-customSemiBold leading-[21px]'>
            The order has been successfully delivered!
          </p>
          <p className='xs:text-[12px] sm:text-[16px] text-blackMain/[.64] xs:leading-[20px] sm:leading-[16.8px]'>
            Please let us know your feedback on the product! Order ID: #24225262262
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotificationItem
