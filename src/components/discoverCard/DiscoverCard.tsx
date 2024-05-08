import { Discover } from '~/@types/model'
import images from '~/assets'

type DiscoverCardProps = {
  discover: Discover
}

function DiscoverCard({ discover }: DiscoverCardProps) {
  return (
    <div className='h-[366px] pb-[10px] relative'>
      <img src={discover.image} alt='discover-img' className='w-full h-full rounded-[48px]' />
      <img src={images.icons.heart} alt='icon-heart' className='size-8 absolute top-[8%] right-[8%]' />

      <div className='w-full absolute bottom-[2.5%]'>
        <div className='p-5'>
          <div className='absolute bottom-[20px] w-[371.4px] h-[110.63px] backdrop-blur-2xl rounded-[23px]'>
            <img src={images.image.bg_content_discover} alt='bg-content-discover' />
          </div>

          <div className=' px-6 py-3 rounded-[26px] relative'>
            <div className='flex items-center justify-between'>
              <h6 className='text-[22.55px] font-bold'>{discover.title}</h6>
              <p className='text-blackMain/[.8]'>
                Left: <span className='text-blackMain font-semibold'>{discover.numberItem} items</span>
              </p>
            </div>
            <p className='text-blackMain/[.8]'>
              Retail/VIP Price: <span className='text-[32px] font-semibold'>60$</span>{' '}
              <span className='text-[21px] font-medium'>/58$</span>
            </p>

            <div className='border-solid border-transparent'>
              <button className='size-10 rounded-full flex items-center justify-center bg-gradient-to-tr from-greenMain to-blueMain cursor-pointer absolute bottom-0 right-0 border-[5px] '>
                <img src={images.icons.add} alt='icon-add' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiscoverCard
