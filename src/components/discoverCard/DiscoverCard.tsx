import { Discover } from '~/@types/models'
import images from '~/assets'

type DiscoverCardProps = {
  discover: Discover
}

function DiscoverCard({ discover }: DiscoverCardProps) {
  return (
    <div className='xs:h-[290px] sm:h-[366px] pb-[10px] relative'>
      <img src={discover.image} alt='discover-img' className='w-full h-full xs:rounded-[30px] sm:rounded-[48px]' />
      <img src={images.icons.heart} alt='icon-heart' className='size-8 absolute top-[8%] right-[8%]' />

      <div className='w-full absolute bottom-[2.5%]'>
        <div className='p-5'>
          <div className='absolute bottom-[20px] xs:w-[326px] sm:w-[413px] xs:h-[80px] sm:h-[110.63px] backdrop-blur-2xl rounded-[23px]'>
            <img src={images.image.bg_content_discover} alt='bg-content-discover' className='w-full h-full' />
          </div>

          <div className=' px-6 xs:py-1 sm:py-3 rounded-[26px] relative'>
            <div className='flex items-center justify-between'>
              <h6 className='xs:text-[18px] sm:text-[22.55px] font-customBold'>{discover.title}</h6>
              <p className='xs:text-[14px] sm:text-[16px] font-customRegular'>
                Left: <span className='text-blackMain font-customSemiBold'>{discover.numberItem} items</span>
              </p>
            </div>
            <p className='xs:text-[14px] sm:text-[16px] font-customRegular'>
              Retail/VIP Price: <span className='xs:text-[26px] sm:text-[32px] font-customSemiBold'>60$</span>{' '}
              <span className='xs:text-[16px] sm:text-[21px] font-customMedium'>/58$</span>
            </p>

            <div className='border-solid border-transparent'>
              <button className='xs:size-[31.19px] sm:size-10 rounded-full flex items-center justify-center bg-gradient-to-tr from-greenMain to-blueMain cursor-pointer absolute bottom-0 xs:right-[-10px] sm:right-0 border-[5px] '>
                <img
                  src={images.icons.shopping_bag_white}
                  alt='icon-shopping-bag-white'
                  className='xs:size-[17.82px] sm:size-[22.22px]'
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiscoverCard
