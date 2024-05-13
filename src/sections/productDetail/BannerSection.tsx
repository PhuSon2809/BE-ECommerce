import { useState } from 'react'
import images from '~/assets'
import { Button } from '~/components/button'
import { IconButton } from '~/components/iconButton'
import { Popover } from '~/components/popover'
import { ProductCardBanner } from '~/components/productCardBanner'
import useResponsive from '~/hooks/useResponsive'

function BannerSection() {
  const smDown = useResponsive('down', 'sm', 'sm')

  const [showColors, setShowColors] = useState<boolean>(false)
  const [colorSelect, setColorSelect] = useState<string>('#007AFF')

  const listColors = ['#007AFF', '#34C759', '#FF9500', '#FF2D55', '#AF52DE', '#FFCC00', '#0D0D0D', '#FFFFFF']

  return (
    <section className='relative'>
      <div
        className={`xs:h-[844px] sm:h-[810px] bg-gradient-to-bl from-[#F2F3F5] to-[#F6F6F7] flex items-center justify-center overflow-hidden border-b-[3px] border-[#FFFFFF52]`}
      >
        <h1 className='xs:text-[120px] sm:text-[240px] text-white font-customBold leading-[252px] mb-16'>WONDERFUL</h1>
      </div>

      <div className='w-full xs:px-[15px] sm:px-5 flex items-center justify-between absolute xs:top-6 sm:top-5 z-20'>
        <IconButton title='Back' size={smDown ? '44' : '48'} color='white' className='bg-greyMain'>
          <img src={images.icons.arrow_left} alt='icon-arrow-left' className='size-6' />
        </IconButton>
        <Popover
          content={
            <div className='flex flex-col gap-3'>
              <div className='flex items-center justify-between'>
                <button className='xs:h-9 sm:h-8 xs:pl-[6px] sm:pl-1 xs:pr-[6px] sm:pr-2 flex items-center gap-1 rounded-[18px] bg-[#1877F2]'>
                  <img src={images.icons.facebook_fill} alt='icon-facebook' />
                  <p className='xs:hidden sm:flex text-[14px] font-customMedium leading-[14.7px] text-white'>
                    Facebook
                  </p>
                </button>
                <button className='xs:h-9 sm:h-8 xs:pl-[6px] sm:pl-1 xs:pr-[6px] sm:pr-2 flex items-center gap-1 rounded-[18px] bg-white'>
                  <img src={images.icons.instagram_fill} alt='icon-instagram' />
                  <p className='xs:hidden sm:flex text-[14px] font-customMedium leading-[14.7px]'>Instagram</p>
                </button>
                <button
                  className='xs:h-9 sm:h-8 xs:pl-[6px] sm:pl-1 xs:pr-[6px] sm:pr-2 flex items-center gap-1 rounded-[18px] bg-white'
                  style={{
                    background:
                      'radial-gradient(108.91% 108.91% at 19.26% 98.79%, #0099FF 0%, #A033FF 61%, #FF5280 93.5%, #FF7061 100%)'
                  }}
                >
                  <img src={images.icons.message} alt='icon-message' />
                  <p className='xs:hidden sm:flex text-[14px] font-customMedium leading-[14.7px] text-white'>
                    Messenger
                  </p>
                </button>
              </div>
              <div className='w-full h-[44px] px-4 bg-white/[.64] rounded-[22px] flex items-center justify-between'>
                <p className='xs:w-[60px] font-customMedium leading-[16.8px] text-ellipsis overflow-hidden'>
                  linkgdgdgdgdggdgdhdhd...
                </p>
                <p className='xs:text-[14px] sm:text-[16px] font-customMedium text-[#31D366] leading-[16.8px] underline'>
                  Copy link
                </p>
              </div>
            </div>
          }
          className='xs:w-[165px] sm:w-[381px] xs:p-[12.5px] !bg-white/[.64] backdrop-blur-2xl xs:rounded-[24px] sm:rounded-[30px] shadow-popover-custom border-[1px] border-solid border-white'
        >
          <IconButton leftTitle='Share' size={smDown ? '44' : '48'} color='white' className='bg-greyMain'>
            <img src={images.icons.share} alt='icon-share' />
          </IconButton>
        </Popover>
      </div>

      <div className='xs:min-w-[239px] sm:min-w-[377px] xs:h-[44px] sm:h-[88px] p-5 absolute xs:top-[240px] sm:top-[154px] xs:left-1 sm:left-[200px] flex items-center gap-3 bg-white/[.44] xs:rounded-lg sm:rounded-3xl shadow-4xl backdrop-blur-2xl z-20'>
        <div className='flex xs:-space-x-[10px] sm:-space-x-[18px]'>
          {Array.from({ length: 5 }).map((_, index: number) => (
            <img
              key={index}
              className='inline-block xs:size-7 sm:size-12 rounded-full border-[2px] border-white border-solid ring-white shadow-avatar'
              src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
              alt='Image Description'
            />
          ))}
        </div>
        <p className='xs:text-[12px] sm:text-[18px] font-customBold leading-[18.9px]'>+1,040 purchasing</p>
      </div>

      <div className='w-full absolute xs:top-[180px] sm:top-[52px] left-1/2 transform -translate-x-1/2 z-10'>
        <div className='relative'>
          <img
            src={images.product.product_banner}
            alt='product-banner'
            className='xs:h-[438px] xs:w-[380px] sm:h-[740px] mx-auto'
          />
        </div>
        <div className='mb-10 absolute xs:top-[-20%] sm:top-[12%] xs:right-[15px] sm:right-[9%]'>
          <p className='xs:text-[48px] sm:text-[72px] font-customBold leading-[75.6px] mb-3'>23,678+</p>
          <p className='xs:text-[13.67px] sm:text-[20px] font-customMedium capitalize leading-[21px]'>
            purchases in your country
          </p>
        </div>

        <div className='flex flex-col xs:gap-3 sm:gap-5 absolute xs:bottom-[-30%] sm:bottom-[45px] xs:left-[5%] sm:left-[10%] transition-transform duration-300 ease-in-out'>
          <div
            className={`${showColors ? 'xs:gap-[8px] sm:gap-[10px]' : 'xs:w-[48px] sm:w-[60px] gap-[20px]'} xs:h-[48px] sm:h-[60px] flex items-center xs:px-[13px] sm:px-[18px] rounded-[31px] bg-white/[.44] backdrop-blur-[38.71px] shadow-4xl overflow-hidden transition-transform duration-[8000ms] ease-in-out`}
          >
            {listColors.map((color) => (
              <div
                key={color}
                onClick={() => (showColors ? setColorSelect(color) : setShowColors(true))}
                className={`${showColors && color === colorSelect ? 'border-[2px] border-solid border-blackMain rounded-full' : ''} p-[1px] transition-all duration-100 ease-in-out flex items-center justify-center cursor-pointer`}
              >
                <svg
                  width={smDown ? '20' : '24'}
                  height={smDown ? '20' : '24'}
                  viewBox={`0 0 ${smDown ? '20 20' : '24 24'}`}
                  fill='none'
                >
                  <circle
                    cx={smDown ? '9.9999' : '12'}
                    cy={smDown ? '9.9999' : '12'}
                    r={smDown ? '9.6' : '12'}
                    fill={color}
                  />
                </svg>
              </div>
            ))}
            {showColors && (
              <div onClick={() => setShowColors(!showColors)}>
                <img src={images.icons.exit} alt='icon-exit' className='cursor-pointer' />
              </div>
            )}
          </div>
          <div className='flex items-center gap-5'>
            <Button className='xs:w-[173px] sm:w-[200px] xs:h-[48px] sm:h-[54px] rounded-[27px]'>BUY NOW</Button>
            <IconButton size={smDown ? '48' : '54'} variant='outline' color='white'>
              <img src={images.icons.shopping_bag} alt='icon-shopping-bag' className='xs:size-5 sm:size-6' />
            </IconButton>
          </div>
        </div>

        <div className='absolute xs:bottom-[8px] sm:bottom-[95px] xs:right-[3%] sm:right-[240px]'>
          <ProductCardBanner />
        </div>
        <div className='flex items-center gap-2 absolute xs:bottom-[-49%] sm:bottom-[10px] xs:right-[4%] sm:right-[10%]'>
          <p className='xs:text-[16px] sm:text-[18px] font-customMedium leading-[18.9px]'>Discover our product</p>
          <IconButton size={smDown ? '28' : '32'} color='white' shadow>
            <img src={images.icons.play} alt='icon-play' className='xs:size-[8.5px] sm:size-[10px]' />
          </IconButton>
        </div>
      </div>
    </section>
  )
}

export default BannerSection
