import { useRef } from 'react'
import Slider from 'react-slick'

import { ProductRecent } from '~/@types/models'
import images from '~/assets'
import { listProductsRecent } from '~/assets/mocks/product'

type RecentPurchasesProps = {
  isAuthenticate: boolean
}

function RecentPurchases({ isAuthenticate }: RecentPurchasesProps) {
  const sliderRef = useRef<Slider>(null)

  const separateArray = (array: ProductRecent[], chunkSize: number): ProductRecent[][] => {
    const result: ProductRecent[][] = []
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize))
    }
    return result
  }

  const listProductSeparate = separateArray(listProductsRecent, 4)

  return (
    <section className={`w-full pb-5 bg-greyMain rounded-2xl xs:rounded-tr-none xs:rounded-br-none`}>
      <div className='flex items-end border-t-0 border-l-0 border-r-0 border-b-[1px] border-solid border-blackMain/[.32]'>
        <div className='w-full h-[55px] xs:px-4 sm:px-5 flex items-center justify-between'>
          <p className='xs:text-[18px] sm:text-[20px] font-customSemiBold leading-[26px]'>Recent Purchases</p>
          <div className='flex items-center gap-[5px]'>
            <img
              src={images.icons.arrow_left}
              alt='icon-arrow-left'
              className='size-6 opacity-[.64] cursor-pointer hover:opacity-100 transition-opacity duration-200 ease-linear'
              onClick={() => sliderRef.current?.slickPrev()}
            />
            <img
              src={images.icons.arrow_right}
              alt='icon-arrow-right'
              className='size-6 opacity-[.64] cursor-pointer hover:opacity-100 transition-opacity duration-200 ease-linear'
              onClick={() => sliderRef.current?.slickNext()}
            />
          </div>
        </div>
      </div>

      <div className={`xs:w-[281px] sm:w-[341px] xs:px-4 sm:px-5`}>
        <Slider ref={sliderRef} infinite arrows={false} slidesToShow={1} slidesToScroll={1}>
          {listProductSeparate.map((products, index) => (
            <div key={index} className='chunk'>
              {products.map((product, index) => {
                return (
                  <div key={product.id} className='w-full flex flex-col gap-3 mt-3'>
                    <div className='w-full flex items-center justify-center'>
                      <div className='w-full flex items-center xs:gap-[6px] sm:gap-2'>
                        <img
                          src={product.image}
                          alt={product.title}
                          className='xs:size-[22px] sm:size-6 rounded-[3.67px] sm:rounded'
                        />
                        <p className='xs:text-[14px] sm:text-[16px] font-customSemiBold capitalize leading-[26px]'>
                          {product.title}
                        </p>
                      </div>
                      <p className='xs:text-[14px] sm:text-[16px] opacity-[.76] whitespace-nowrap'>
                        {isAuthenticate ? product.time : `${product.purchases} purchases`}
                      </p>
                    </div>
                    {index !== products.length - 1 && <div className='max-h-[1px] h-[1px] w-full bg-blackMain/[.22]' />}
                  </div>
                )
              })}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default RecentPurchases
