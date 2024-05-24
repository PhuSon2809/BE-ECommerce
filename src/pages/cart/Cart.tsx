// redux
import { useAppSelector } from '~/redux/configStore'
//
import { useLocation } from 'react-router-dom'
import { CartItem } from '~/components/cartItem'
import { PATH_PUBLIC_APP } from '~/constants/paths'
import useSelectItem from '~/hooks/useSelectItem'
import { SummaryCart } from '~/sections/cart'

function Cart() {
  const { pathname } = useLocation()

  const { cart } = useAppSelector((state) => state.cart)
  const { selected, handleSelectItem, handleSelectAll } = useSelectItem(cart)

  const listItemCheckout =
    selected.length > 0 ? cart.filter((item) => selected.map((item) => Number(item)).includes(item.id)) : []

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
        <SummaryCart
          listProductCheckout={listItemCheckout}
          productIdsCheckout={selected}
          inCartPage={pathname === PATH_PUBLIC_APP.cart.root}
        />
      </div>
    </section>
  )
}

export default Cart
