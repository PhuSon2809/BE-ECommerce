// redux
import { useAppSelector } from '~/redux/configStore'
//
import { useLocation } from 'react-router-dom'
import { CartItem } from '~/components/cartItem'
import { PATH_PUBLIC_APP } from '~/constants/paths'
import useSelectItem from '~/hooks/useSelectItem'
import { SummaryCart } from '~/sections/cart'
import useResponsive from '~/hooks/useResponsive'
import images from '~/assets'

function Cart() {
  const { pathname } = useLocation()

  const smDown = useResponsive('down', 'sm')

  const { cart } = useAppSelector((state) => state.cart)
  const { selected, handleSelectItem, handleSelectAll } = useSelectItem(cart)

  const listItemCheckout =
    selected.length > 0 ? cart.filter((item) => selected.map((item) => Number(item)).includes(item.id)) : []

  return (
    <section className='max-w-[1440px] mx-auto xs:p-0 xs:py-10 sm:p-5 md:p-5 lg:p-[100px]'>
      <div className='flex xs:flex-col sm:flex-col  md:flex-col lg:flex-row items-start justify-between gap-4'>
        {/* List cart items */}
        <div className='xs:w-full sm:w-full md:w-full lg:w-[710px] xs:px-4 sm:px-0'>
          <div className='flex items-center justify-between xs:mb-5 sm:mb-10'>
            <h1 className='text-[32px] font-customBold capitalize'>Buy product</h1>
            <div className='cursor-pointer' onClick={handleSelectAll}>
              <p className='text-[20px] font-customMedium opacity-[.64] transition-all duration-200 ease-in-out'>
                {selected.length > 0 && selected.length === cart.length ? 'Deselect' : 'Select'} all
              </p>
            </div>
          </div>

          <div className='xs:flex sm:hidden w-full h-[60px] px-5 bg-greyMain focus-within:bg-greyMain  items-center justify-between rounded mb-7'>
            <input type='text' placeholder='Promocode' className='w-full h-full bg-greyMain border-none outline-none' />
            <img src={images.icons.copy} alt='icon-copy' className='cursor-pointer' />
          </div>

          <div className='flex flex-col gap-5 mt-4'>
            {cart.map((product, index) => {
              return (
                <div key={product.id} className='flex flex-col gap-5'>
                  <CartItem
                    cartItem={product}
                    isInCartResponsive={smDown}
                    isItemSelected={selected.indexOf(product.id) !== -1}
                    handleSelectItem={handleSelectItem}
                  />
                  {index !== cart.length - 1 && <div className='h-[1px] w-full bg-blackMain/[.12]'></div>}
                </div>
              )
            })}
          </div>
        </div>

        {/* Summary info */}
        <div className='xs:w-full sm:w-fit xs:bg-greyLight sm:bg-transparent'>
          <SummaryCart
            listProductCheckout={listItemCheckout}
            productIdsCheckout={selected}
            inCartPage={pathname === PATH_PUBLIC_APP.cart.root}
          />
        </div>
      </div>
    </section>
  )
}

export default Cart
