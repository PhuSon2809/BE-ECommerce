import { useState } from 'react'
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom'
import { ProductInStorage } from '~/@types/models'
import images from '~/assets'
import { Button } from '~/components/button'
import { CartItem } from '~/components/cartItem'
import { IconButton } from '~/components/iconButton'
import { FavoriteIcon, ShoppingBagIcon } from '~/components/icons'
import { PATH_PRIVATE_APP, PATH_PUBLIC_APP } from '~/constants/paths'
import useDialog from '~/hooks/useDialog'
import useResponsive from '~/hooks/useResponsive'
import useSelectItem from '~/hooks/useSelectItem'
import { addMultipleToCart } from '~/redux/cart/cart.slice'
import { useAppDispatch, useAppSelector } from '~/redux/configStore'
import { CheckConfirmDialog } from '~/sections/checkout'

const tabsList = [
  {
    label: 'My bag',
    value: 'my-bag',
    icon: <ShoppingBagIcon className='size-6' />
  },
  {
    label: 'Favorite',
    value: 'favorite',
    icon: <FavoriteIcon color='black' className='size-6' />
  }
]

type TabProductListProps = {
  isCartShare?: boolean
  isInDialog?: boolean
}

function TabProductList({ isCartShare, isInDialog }: TabProductListProps) {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { pathname } = useLocation()

  const { cart } = useAppSelector((state) => state.cart)
  const { favorites } = useAppSelector((state) => state.favorite)

  const smDown = useResponsive('down', 'sm', 'sm')

  const { isOpen, setIsOpen, handleOpen } = useDialog()
  const { selected, handleSelectItem, handleSelectAll } = useSelectItem(cart)

  const [tabActive, setTabActive] = useState<string>('my-bag')

  const listItemCheckout =
    selected.length > 0 ? cart.filter((item) => selected.map((item) => Number(item)).includes(item.id)) : []

  function checkIdsExist(array1: ProductInStorage[], array2: ProductInStorage[]) {
    const idSet = new Set(array1.map((item) => item.id))

    for (let i = 0; i < array2.length; i++) {
      if (!idSet.has(array2[i].id)) {
        return false
      }
    }

    return true
  }

  return (
    <>
      <section
        className={`${isCartShare ? 'xs:w-full' : 'xs:w-[374px]'} sm:w-full ${isCartShare ? 'bg-white' : 'bg-greyMain'}  rounded-2xl xs:rounded-tr-none xs:rounded-br-none`}
      >
        <div className='flex items-end border-t-0 border-l-0 border-r-0 border-b-[1px] border-solid border-blackMain/[.32]'>
          {cart.length === 0 ? (
            <div className='w-full h-[55px] px-5 flex items-center'>
              <p className='text-[20px] font-customSemiBold'>Items in my cart</p>
            </div>
          ) : (
            (isCartShare ? tabsList.filter((tab) => tab.value === 'my-bag') : tabsList).map((tab) => (
              <div
                key={tab.value}
                onClick={() => setTabActive(tab.value)}
                className={`w-1/2 h-[55px] relative cursor-pointer ${!isCartShare ? 'hover:bg-blackMain/[.10]' : 'cursor-default'} rounded-tl-2xl rounded-tr-2xl transition-colors duration-300 ease-linear`}
              >
                <div
                  className={`w-full h-full flex ${isCartShare ? 'pl-5 justify-start' : 'justify-center'} items-center gap-[5px] ${tabActive === tab.value ? 'opacity-100' : 'opacity-[.44]'}`}
                >
                  {tab.icon}
                  <p className={`text-[18px] font-customSemiBold caption-top leading-[26px]`}>{tab.label}</p>
                </div>
                {!isCartShare && (
                  <div
                    className={`w-full min-h-[3px] h-[3px] z-10 ${tabActive === tab.value ? 'bg-gradient-to-r from-greenMain to-blueMain' : 'bg-transparent'}`}
                  />
                )}
              </div>
            ))
          )}
        </div>

        <div className={`p-5 pb-0 ${isInDialog ? 'max-h-[450px] overflow-auto scroll-bar-small' : ''}`}>
          {tabActive === 'my-bag' &&
            (cart.length === 0 ? (
              <p className='text-[18px] font-customXLight opacity-[.64]'>There is no item in your bag</p>
            ) : (
              cart.map((product, index) => (
                <div key={product.id} className={`flex flex-col gap-3 ${index === 0 ? 'mt-0' : 'mt-4'}`}>
                  <CartItem
                    isSmall
                    hideSelect
                    hideFavorite={isCartShare}
                    cartItem={product}
                    handleSelectItem={handleSelectItem}
                    isItemSelected={selected.indexOf(product.id) !== -1}
                  />
                  <div className='w-full h-[1px] bg-blackMain/[.12]'></div>
                </div>
              ))
            ))}
          {tabActive === 'favorite' &&
            (favorites.length === 0 ? (
              <p className='text-[18px] font-customXLight opacity-[.64]'>There is no item in your bag</p>
            ) : (
              favorites.map((product, index) => (
                <div key={product.id} className={`flex flex-col gap-3 ${index === 0 ? 'mt-0' : 'mt-4'}`}>
                  <CartItem
                    isSmall
                    hideSelect
                    isFavorite
                    hideHandleQuantity={isCartShare}
                    cartItem={product}
                    handleSelectItem={handleSelectItem}
                    isItemSelected={selected.indexOf(product.id) !== -1}
                  />
                  <div className='w-full h-[1px] bg-blackMain/[.12]'></div>
                </div>
              ))
            ))}
        </div>
        {tabActive === 'my-bag' && (
          <div
            className={`w-full p-5 pb-0 flex items-center justify-between ${isInDialog || isCartShare ? 'xs:mt-5' : 'xs:mt-20'}  sm:mt-0`}
          >
            <div className='flex items-center gap-3'>
              <div className='relative h-fit'>
                <input
                  readOnly
                  type='checkbox'
                  checked={selected.length > 0 && selected.length === cart.length}
                  onClick={handleSelectAll}
                  className='appearance-none rounded-[4px] xs:size-5 sm:size-6 border-[1px] bg-white border-blackMain border-solid 
                checked:border-none checked:bg-gradient-to-r checked:from-greenMain checked:to-blueMain focus:outline-none hover:shadow-avatar transition-all duration-200 ease-in-out 
                checked:after:content-[" "] checked:after:block checked:after:w-[6px] checked:after:h-[12px] checked:after:border-r-[2px] checked:after:border-b-[2px] 
                checked:after:border-solid checked:after:border-white checked:after:rotate-[45deg] checked:after:absolute xs:checked:after:top-[2px] xs:checked:after:left-[7px] sm:checked:after:top-[4.5px] sm:checked:after:left-[9px]'
                />
              </div>

              <p className='xs:text-[14px] sm:text-[18px] font-customMedium capitalize mb-[5px]'>Select all</p>
            </div>
            <p className='xs:text-[20px] sm:text-[24px] font-customSemiBold bg-gradient-to-r from-greenMain to-blueMain text-transparent bg-clip-text'>
              $
              {selected.length > 0
                ? listItemCheckout
                    .reduce((total: number, currentProduct: ProductInStorage) => {
                      return total + currentProduct.quantityInCart * currentProduct.price
                    }, 0)
                    .toFixed(2)
                : (0).toFixed(2)}
            </p>
          </div>
        )}
        <div className='w-full p-5 flex items-center justify-between gap-3'>
          {pathname === PATH_PRIVATE_APP.order.history ? (
            <Button
              size='medium'
              fullWidth
              className={`w-full xs:h-[44px]`}
              classNameText='!uppercase xs:text-[16px] sm:text-[18px]'
              disabled={selected.length === 0}
              onClick={handleOpen}
            >
              share
            </Button>
          ) : tabActive === 'my-bag' ? (
            <>
              <Button
                size='medium'
                fullWidth
                className={`${cart.length === 0 ? 'w-full' : 'xs:w-full sm:w-[233px]'} xs:h-[44px]`}
                classNameText='!uppercase xs:text-[16px] sm:text-[18px]'
                disabled={selected.length === 0}
                onClick={handleOpen}
              >
                Check out
              </Button>

              <div>
                {cart.length > 0 && (
                  <IconButton
                    size={smDown ? '44' : '48'}
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
            </>
          ) : (
            <Button
              size='medium'
              fullWidth
              className={`w-full xs:h-[44px]`}
              classNameText='!uppercase xs:text-[16px] sm:text-[18px]'
              disabled={favorites.length === 0 || checkIdsExist(cart, favorites)}
              onClick={() => dispatch(addMultipleToCart(favorites))}
            >
              {checkIdsExist(cart, favorites) ? 'All in cart' : 'Add all to cart'}
            </Button>
          )}
        </div>
      </section>

      <CheckConfirmDialog open={isOpen} setOpen={setIsOpen} />
    </>
  )
}

export default TabProductList
