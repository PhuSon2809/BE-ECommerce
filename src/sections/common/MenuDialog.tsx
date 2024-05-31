import { Dispatch, SetStateAction, useRef } from 'react'
import Slider from 'react-slick'
import images from '~/assets'
import { listDiscovers } from '~/assets/mocks/product'

import { DialogCustom } from '~/components/dialog'
import { IconButton } from '~/components/iconButton'
import { CloseIcon } from '~/components/icons'
import { ProductFeatured } from '~/components/productFeatured'
import useResponsive from '~/hooks/useResponsive'
import { Navbar } from '~/layouts/components/navbar'
import SliderFeatureProduct from '~/sections/common/SliderFeatureProduct'

const listCategories = [
  {
    value: 'food1',
    label: 'Food 1'
  },
  {
    value: 'food2',
    label: 'Food 2'
  },
  {
    value: 'food3',
    label: 'Food 3'
  },
  {
    value: 'food4',
    label: 'Food 4'
  },
  {
    value: 'food5',
    label: 'Food 5'
  }
]

type MenuDialogProps = {
  variant?: 'vertical' | 'horizontal'
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

function MenuDialog({ open, setOpen, variant = 'vertical' }: MenuDialogProps) {
  const smDown = useResponsive('down', 'sm')

  const sliderRef = useRef<Slider>(null)

  return (
    <section>
      <DialogCustom
        open={open}
        setOpen={setOpen}
        variant={variant}
        positionDialog='xs:!px-0 items-start'
        className={`${variant === 'vertical' ? 'max-w-[1347px] ml-[175px] mt-[20px]' : 'max-w-[1400px] mt-[80px]'} xs:!p-0 xs:my-0 xs:rounded-none xs:min-h-screen`}
      >
        <div className='xs:flex sm:hidden w-full items-center justify-end pt-4'>
          <div
            onClick={() => setOpen(false)}
            className='w-[47px] h-8 pl-3 flex items-center bg-gradient-to-r from-greenMain to-blueMain rounded-[10px] rounded-tr-none rounded-br-none'
          >
            <CloseIcon color='#FFFFFF' className='size-[12px]' />
          </div>
        </div>
        <div className='xs:p-4 sm:p-0'>
          {variant === 'horizontal' && (
            <div className='flex items-center gap-[15px] mb-5 text-white'>
              <div className='xs:hidden sm:block cursor-pointer' onClick={() => setOpen(false)}>
                <CloseIcon color='#0D0D0D' />
              </div>
              <Navbar variant='horizontal' />
            </div>
          )}
          <div className='flex xs:flex-col sm:flex-col md:flex-row items-start gap-10'>
            <div
              className={`${variant === 'horizontal' ? 'xs:w-full sm:w-[300px]' : 'w-[250px]'} flex flex-col xs:gap-4 sm:gap-5`}
            >
              <h5 className='xs:text-[24px] sm:text-[28px] font-customSemiBold'>Food</h5>
              <p className='xs:w-full sm:w-[225px] text-[14px]'>
                From gourmet snacks to pantry staples, find everything you need to elevate your dining experience.
              </p>

              <div className='flex flex-col gap-3'>
                {listCategories.map((category) => (
                  <div key={category.label} className='flex flex-col gap-3'>
                    <div>
                      <p className='xs:text-[16px] sm:text-[18px] font-customMedium'>{category.label}</p>
                      <p className='xs:w-full sm:w-[226px] text-[14px] truncate opacity-[.64]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur alias ipsum voluptas quae
                        omnis impedit maiores earum quam dolores ullam animi voluptatum, harum reiciendis unde qui
                        molestias, tempore, rem officia?
                      </p>
                    </div>

                    <div className='border-0 border-b-[1px] border-blackMain/[.12] border-solid' />
                  </div>
                ))}
              </div>
            </div>
            <div className='flex flex-col gap-[10px]'>
              <p className='xs:hidden sm:block text-[20px] font-customSemiBold'>Special Products</p>

              {smDown ? (
                <div className='overflow-hidden'>
                  <div className='feature-product-slide-responsive-dialog relative mt-[-120px]'>
                    <div className='w-[358px]'>
                      <Slider
                        infinite
                        ref={sliderRef}
                        arrows={false}
                        slidesToShow={3}
                        slidesToScroll={1}
                        vertical={true}
                        verticalSwiping={true}
                      >
                        {listDiscovers.map((product) => (
                          <div key={product.id}>
                            <ProductFeatured product={product} isMenuDialog />
                          </div>
                        ))}
                      </Slider>
                    </div>

                    <div className='flex flex-row items-center gap-2 absolute top-[32%] right-[1%]'>
                      <IconButton size='40'>
                        <img
                          src={images.icons.arrow_left}
                          alt='arrow-left'
                          className='size-5'
                          onClick={() => sliderRef.current?.slickPrev()}
                        />
                      </IconButton>
                      <IconButton size='40'>
                        <img
                          src={images.icons.arrow_right}
                          alt='arrow-right'
                          className='size-5'
                          onClick={() => sliderRef.current?.slickNext()}
                        />
                      </IconButton>
                    </div>
                  </div>
                </div>
              ) : (
                <SliderFeatureProduct />
              )}
            </div>
          </div>
        </div>
      </DialogCustom>
    </section>
  )
}

export default MenuDialog
