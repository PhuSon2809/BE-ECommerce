import { useState } from 'react'
import { Link, createSearchParams, useNavigate } from 'react-router-dom'
import images from '~/assets'
import { Button } from '~/components/button'
import { CartItem } from '~/components/cartItem'
import { IconButton } from '~/components/iconButton'
import { PATH_PRIVATE_APP, PATH_PUBLIC_APP } from '~/constants/paths'
import { useAppSelector } from '~/redux/configStore'

const tabsList = [
  {
    label: 'My bag',
    value: 'my-bag',
    icon: images.icons.shopping_bag
  },
  {
    label: 'Favorite',
    value: 'favorite',
    icon: images.icons.heart
  }
]

function TabProductList() {
  const navigate = useNavigate()

  const { cart } = useAppSelector((state) => state.product)

  const [tabActive, setTabActive] = useState<string>('my-bag')

  return (
    <section className='w-full bg-greyMain rounded-2xl'>
      <div className='flex items-end border-t-0 border-l-0 border-r-0 border-b-[1px] border-solid border-blackMain/[.32]'>
        {cart.length === 0 ? (
          <div className='w-full h-[55px] px-5 flex items-center'>
            <p className='text-[20px] font-customSemiBold'>Items in my cart</p>
          </div>
        ) : (
          tabsList.map((tab) => (
            <div
              key={tab.value}
              onClick={() => setTabActive(tab.value)}
              className='w-1/2 h-[55px] relative cursor-pointer hover:bg-blackMain/[.10] rounded-tl-2xl rounded-tr-2xl transition-colors duration-300 ease-linear'
            >
              <div className='w-full h-full flex items-center justify-center gap-[5px]'>
                <img src={tab.icon} alt={tab.value} />
                <p className='text-[18px] font-customSemiBold caption-top leading-[26px]'>{tab.label}</p>
              </div>
              <div
                className={`w-full min-h-[3px] h-[3px] ${tabActive === tab.value ? 'bg-gradient-to-r from-greenMain to-blueMain' : 'bg-transparent'}`}
              />
            </div>
          ))
        )}
      </div>

      <div className='p-5 pb-0'>
        {cart.length === 0 ? (
          <p className='text-[18px] font-customXLight opacity-[.64]'>There is no item in your bag</p>
        ) : tabActive === 'my-bag' ? (
          cart.map((product, index) => (
            <div className={`flex flex-col gap-3 ${index === 0 ? 'mt-0' : 'mt-4'}`}>
              <CartItem key={product.id} productCart={product} isSmall />
              <div className='w-full h-[1px] bg-blackMain/[.12]'></div>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>

      <div className='p-5 flex items-center justify-between'>
        <Link to={cart.length === 0 ? '' : PATH_PRIVATE_APP.checkout.root}>
          <Button
            size='medium'
            className={`${cart.length === 0 ? 'w-full' : 'w-[233px]'}`}
            classNameText='!uppercase text-[18px]'
            disabled={cart.length === 0}
          >
            Check out
          </Button>
        </Link>
        {cart.length > 0 && (
          <IconButton
            size='48'
            variant='outline'
            color='white'
            className='!bg-transparent'
            onClick={() =>
              navigate({
                pathname: PATH_PUBLIC_APP.cart.share,
                search: createSearchParams({
                  cartShareType: 'share-link'
                }).toString()
              })
            }
          >
            <img src={images.icons.share} alt='icon-share' />
          </IconButton>
        )}
      </div>
    </section>
  )
}

export default TabProductList
