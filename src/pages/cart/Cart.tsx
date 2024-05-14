import { useState } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
// redux
import { useAppSelector } from '~/redux/configStore'
//
import { ProductCart } from '~/@types/model'
import images from '~/assets'
import { Button } from '~/components/button'
import { CartItem } from '~/components/cartItem'

function Cart() {
  const navigate = useNavigate()

  const { cart } = useAppSelector((state) => state.product)

  const [selected, setSelected] = useState<readonly number[]>([])

  const handleSelectAll = () => {
    if (selected.length === cart.length) {
      setSelected([])
    } else {
      const newSelected = cart.map((item) => item.id)
      setSelected(newSelected)
    }
  }

  const handleSelectItem = (cartItemId: number) => {
    const selectedIndex = selected.indexOf(cartItemId)
    let newSelected: readonly number[] = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, cartItemId)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1))
    }

    setSelected(newSelected)
  }

  return (
    <section className='max-w-[1440px] mx-auto p-[100px]'>
      <div className='flex items-start justify-between'>
        {/* List cart items */}
        <div className='w-[710px]'>
          <div className='flex items-center justify-between mb-10'>
            <h1 className='text-[32px] font-customBold capitalize'>Buy product</h1>
            <div className='cursor-pointer' onClick={handleSelectAll}>
              <p className='text-[20px] font-customMedium opacity-[.64] transition-all duration-200 ease-in-out'>
                {selected.length === cart.length ? 'Deselect' : 'Select'} all
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-5 mt-4'>
            {cart.map((product, index) => {
              return (
                <div key={product.id} className='flex flex-col gap-5'>
                  <CartItem
                    productCart={product}
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
        <div className='w-[418px]'>
          <div className='h-[280px] p-[31.5px] flex flex-col justify-between bg-greyLight rounded mb-5'>
            <h6 className='text-[32px] font-customBold leading-none capitalize'>summary</h6>
            <div className='w-full flex items-center justify-between'>
              <p className='text-[20px] opacity-[.64] leading-none'>Subtotal</p>
              <p className='text-[20px] font-customSemiBold leading-none'>
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
              <p className='text-[20px] opacity-[.64] leading-none'>Estimated Delivery & Handling</p>
              <p className='text-[20px] font-customSemiBold leading-none'>Free</p>
            </div>

            <div className='h-[1px] w-full bg-blackMain/[.12]'></div>

            <div className='w-full flex items-center justify-between'>
              <p className='text-[20px] opacity-[.64] leading-none'>Total</p>
              <p className='text-[32px] font-customSemiBold'>
                $
                {cart.length > 0
                  ? cart
                      .reduce((total: number, currentProduct: ProductCart) => {
                        return total + currentProduct.quantityInCart * currentProduct.price
                      }, 0)
                      .toFixed(2)
                  : (0).toFixed(2)}
              </p>
            </div>
          </div>
          <div className='w-full h-[60px] px-5 bg-greyMain focus-within:bg-greyMain flex items-center justify-between rounded mb-5'>
            <input type='text' placeholder='Promocode' className='w-full h-full bg-greyMain border-none outline-none' />
            <img src={images.icons.copy} alt='icon-copy' className='cursor-pointer' />
          </div>

          <div className='flex flex-col gap-5'>
            <Button
              className='w-full h-[72px] rounded-[36px]'
              classNameText='!uppercase'
              onClick={() =>
                navigate({
                  pathname: '/checkout',
                  search: createSearchParams({
                    itemCheckoutIds: selected.toString()
                  }).toString()
                })
              }
            >
              checkout
            </Button>
            <Button
              variant='outline'
              className='w-full h-[72px] rounded-[36px]'
              classNameText='!uppercase'
              onClick={() => navigate('/cart-share')}
            >
              share
            </Button>

            <div className='flex items-center gap-[10px]'>
              <img src={images.icons.info} alt='icon-info' />
              <p className=''>hshshshshjhhshhshhshjsshhshhssh</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart
