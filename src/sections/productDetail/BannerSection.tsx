import images from '~/assets'
import { Button } from '~/components/button'
import { IconButton } from '~/components/iconButton'
import { ProductCardBanner } from '~/components/productCardBanner'

function BannerSection() {
  return (
    <section className='relative'>
      <div
        className={`h-[810px] bg-gradient-to-bl from-[#F2F3F5] to-[#F6F6F7] flex items-center justify-center overflow-hidden border-b-[3px] border-[#FFFFFF52]`}
      >
        <h1 className='text-[232px] text-white font-semibold'>WONDERFUL</h1>
      </div>
      <div className='w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className='relative'>
          <img src={images.product.product_banner} alt='product-banner' className='h-[745px] mx-auto' />
        </div>
        <div className='absolute bottom-[45px] left-[90px]'>
          <div className='mb-10'>
            <p className='text-[72px] font-bold leading-none'>23,678+</p>
            <p className='text-[20px] font-medium capitalize'>purchases in your country</p>
          </div>

          <div className='flex items-center gap-5'>
            <Button className='w-[200px] h-[54px] rounded-[27px]'>BUY NOW</Button>
            <IconButton variant='outline' color='white'>
              <img src={images.icons.shopping_bag} alt='icon-shopping-bag' />
            </IconButton>
          </div>
        </div>
        <div className='p-5 absolute top-[110px] left-[180px] flex items-center gap-3 bg-[#FFFFFF70] rounded-3xl shadow-[0px_0px_80px_0px_#0000000D] backdrop-blur-2xl'>
          <div className='flex -space-x-[18px]'>
            {Array.from({ length: 5 }).map((_, index: number) => (
              <img
                key={index}
                className='inline-block size-12 rounded-full ring-2 ring-white'
                src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
                alt='Image Description'
              />
            ))}
          </div>
          <p className='text-[18px] font-semibold'>+1,040 purchasing</p>
        </div>
        <div className='absolute bottom-[85px] right-[220px]'>
          <ProductCardBanner />
        </div>
        <div className='flex items-center gap-2 absolute top-[50px] right-[8%]'>
          <p className='text-[18px]'>Discover our product</p>
          <IconButton size='32' color='white' shadow>
            <img src={images.icons.play} alt='icon-play' />
          </IconButton>
        </div>
      </div>

      <div className='flex items-center gap-2 absolute top-[30px] left-[30px]'>
        <IconButton title='Back' size='48' color='white' shadow>
          <img src={images.icons.arrow_left} alt='icon-arrow-left' />
        </IconButton>
      </div>
    </section>
  )
}

export default BannerSection
