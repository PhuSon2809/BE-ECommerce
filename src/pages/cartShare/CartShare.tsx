import { useRef, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Slider from 'react-slick'

import { QueryConfig } from '~/@types/common'
import { ProductCart } from '~/@types/model'
import { Button } from '~/components/button'
import { CartShareCard } from '~/components/cartShareCard'
import useQueryConfig from '~/hooks/useQueryConfig'
import { useAppSelector } from '~/redux/configStore'
import images from '~/assets'
import './style.scss'
import { QUERY_PARAM_STRING } from '~/constants/queryParamString'

function CartShare() {
  const sliderRef = useRef<Slider>(null)

  const queryConfig: QueryConfig = useQueryConfig()

  const { cart } = useAppSelector((state) => state.product)

  const [slideActive, setSlideActive] = useState<number>(0)

  return (
    <section className='cart-share-wrapper pb-20'>
      <div className='bg-image'>
        <p className='text-[56px] text-white font-customBold leading-none'>Product list is shared!</p>
      </div>

      <div className='pt-20 pb-10 flex flex-col items-center relative'>
        {queryConfig.cartShareType === QUERY_PARAM_STRING.cartShareType.viewLinkShare && (
          <div className='w-full pl-[60px]'>
            <p className='text-[24px] font-customBold text-left'>Select the product you want to pay for</p>
          </div>
        )}
        <div className='ml-10 w-[1440px]'>
          <Slider
            ref={sliderRef}
            infinite
            arrows={false}
            centerMode={true}
            centerPadding='1px'
            slidesToShow={3}
            slidesToScroll={1}
            beforeChange={(_: number, next: number) => setSlideActive(next)}
          >
            {cart.map((product, index) => {
              return (
                <div key={product.id} className={`${index === slideActive ? 'slide slide-active' : 'slide'} h-[440px]`}>
                  <CartShareCard productCart={product} />
                </div>
              )
            })}
          </Slider>

          <button
            className={`size-12 rounded-full bg-white/[.75] backdrop-blur-[34.29px] shadow-13xl flex items-center justify-center cursor-pointer absolute ${queryConfig.cartShareType === QUERY_PARAM_STRING.cartShareType.viewLinkShare ? 'top-[45%]' : 'top-[43%]'} left-[2.5%]`}
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <img src={images.icons.arrow_left} alt='arrow-left' />
          </button>
          <button
            className={`size-12 rounded-full bg-white/[.75] backdrop-blur-[34.29px] shadow-13xl flex items-center justify-center cursor-pointer absolute ${queryConfig.cartShareType === QUERY_PARAM_STRING.cartShareType.viewLinkShare ? 'top-[45%]' : 'top-[43%]'} right-[2.5%]`}
            onClick={() => sliderRef.current?.slickNext()}
          >
            <img src={images.icons.arrow_right} alt='arrow-right' />
          </button>
        </div>
      </div>
      <div className='w-[1400px] flex items-center justify-between mx-auto'>
        <p className='min-w-[400px] text-[20px] text-blackMain/[.64] font-customMedium flex items-center gap-1'>
          Total amount:{' '}
          <span className='text-[40px] text-blackMain font-customSemiBold leading-[42px]'>
            $
            {cart.length > 0
              ? cart
                  .reduce((total: number, currentProduct: ProductCart) => {
                    return total + currentProduct.quantityInCart * currentProduct.price
                  }, 0)
                  .toFixed(2)
              : (0).toFixed(2)}
          </span>
        </p>

        {queryConfig.cartShareType === 'share-link' ? (
          <div className='flex items-center gap-[10px]'>
            <p className='text-[20px] font-customSemiBold'>Share to</p>
            <button className='h-10 pl-2 pr-3 flex items-center gap-1 rounded-[20px] bg-[#1877F2] shadow-popover-custom'>
              <img src={images.icons.facebook_fill} alt='icon-facebook' />
              <p className='text-[14px] font-customMedium leading-[14.7px] text-white capitalize'>Facebook</p>
            </button>
            <button className='h-10 pl-2 pr-3 flex items-center gap-1 rounded-[20px] bg-white shadow-popover-custom'>
              <img src={images.icons.instagram_fill} alt='icon-instagram' />
              <p className='text-[14px] font-customMedium leading-[14.7px] capitalize'>Instagram</p>
            </button>
            <button className='h-10 pl-2 pr-3 flex items-center gap-1 rounded-[20px] bg-blackMain shadow-popover-custom'>
              <img src={images.icons.twitter} alt='icon-twitter' />
              <p className='text-[14px] font-customMedium leading-[14.7px] text-white capitalize'>twitter</p>
            </button>
            <CopyToClipboard
              text={`http://localhost:3000/cart-share?cartShareType=${QUERY_PARAM_STRING.cartShareType.viewLinkShare}`}
            >
              <button className='h-10 pl-2 pr-3 flex items-center gap-1 rounded-[20px] bg-white shadow-popover-custom'>
                <div className='size-6 bg-gradient-to-br from-blueMain to-greenMain rounded-full flex items-center justify-center'>
                  <img src={images.icons.link} alt='icon-link' />
                </div>
                <p className='text-[14px] font-customMedium leading-[14.7px] capitalize'>Copy link</p>
              </button>
            </CopyToClipboard>
          </div>
        ) : (
          <>
            <Button
              size='large'
              variant='linear'
              className='text-white w-[426px] h-[64px] rounded-[32px]'
              classNameText='!uppercase'
            >
              check out
            </Button>
            <div className='min-w-[400px] flex items-center justify-end gap-1 cursor-pointer'>
              <img src={images.icons.add_to_bag} alt='icon-add-to-bag' />
              <p className='text-[18px] font-customSemiBold uppercase'>add to my bag</p>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default CartShare
