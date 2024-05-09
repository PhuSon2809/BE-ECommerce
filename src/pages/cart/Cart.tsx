import Slider from 'react-slick'
import { ProductCart } from '~/@types/model'
import { listProductInCart } from '~/assets/mocks/product'
import { Button } from '~/components/button'
import { CartItem } from '~/components/cartItem'
import { Header } from '~/layouts/components/header'
import { useAppSelector } from '~/redux/configStore'
import { DiscoverSection } from '~/sections/common'

function Cart() {
  const { cart } = useAppSelector((state) => state.product)

  return (
    <div>
      <Header />

      <section className='w-[1400px] mx-auto mt-10'>
        <div className='grid grid-cols-12'>
          <div className='col-span-8'>
            <h1 className='text-[48px] font-primarySemiBold capitalize'>Items in my cart</h1>
            <div className='flex flex-col gap-5 mt-4'>
              {cart.map((product, index) => {
                return (
                  <div key={index} className='flex flex-col gap-5'>
                    <CartItem productCart={product} />
                    <div className='h-[1px] w-full bg-gray-300'></div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='col-span-4'>
            <div className='w-[418px] ml-auto'>
              <div className='flex flex-col gap-5 bg-greyLight rounded p-5'>
                <h6 className='text-[32px] font-bold leading-none'>Summary</h6>
                <div className='w-full flex items-center justify-between'>
                  <p className='text-[20px]'>Subtotal</p>
                  <p className='text-[20px] font-semibold'>
                    $
                    {cart.length > 0
                      ? cart
                          .reduce((total: number, currentProduct: ProductCart) => {
                            return total + currentProduct.quantityInCart * currentProduct.price
                          }, 0)
                          .toFixed(2)
                      : 0}
                  </p>
                </div>
                <div className='w-full flex items-center justify-between'>
                  <p className='text-[20px]'>Estimated Delivery & Handling</p>
                  <p className='text-[20px] font-semibold'>Free</p>
                </div>

                <div className='h-[1px] w-full bg-gray-400'></div>

                <div className='w-full flex items-center justify-between'>
                  <p className='text-[20px]'>Total</p>
                  <p className='text-[20px] font-semibold'>
                    $
                    {cart.length > 0
                      ? cart
                          .reduce((total: number, currentProduct: ProductCart) => {
                            return total + currentProduct.quantityInCart * currentProduct.price
                          }, 0)
                          .toFixed(2)
                      : 0}
                  </p>
                </div>
              </div>

              <Button className='w-full h-[72px] rounded-[36px] mt-10'>CHECKOUT</Button>
            </div>
          </div>
        </div>
      </section>

      <section className='w-[1400px] mx-auto flex flex-col gap-5 mt-10'>
        <h1 className='text-[48px] font-bold capitalize'>favorites</h1>
        <div>
          <Slider arrows={false} infinite speed={500} slidesToShow={2} slidesToScroll={1}>
            {listProductInCart.map((product, index) => {
              return (
                <div key={index} className='pr-16'>
                  <CartItem productCart={product} isFavorite />
                </div>
              )
            })}
          </Slider>
        </div>
        <p className='text-[20px] font-semibold underline cursor-pointer'>Go to Favorites</p>
      </section>

      {/* Discover section */}
      <DiscoverSection titleVerticalSlide='Best Seller' titleHorizontalSlide='Recommend' />
    </div>
  )
}

export default Cart
