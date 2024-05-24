import { useState } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { ProductCart } from '~/@types/models'
import images from '~/assets'
import { Button } from '~/components/button'
import { CartItem } from '~/components/cartItem'
import { IconButton } from '~/components/iconButton'
import { PATH_PUBLIC_APP } from '~/constants/paths'
import useDialog from '~/hooks/useDialog'
import useResponsive from '~/hooks/useResponsive'
import useSelectItem from '~/hooks/useSelectItem'
import { useAppSelector } from '~/redux/configStore'
import { CheckConfirmDialog } from '~/sections/checkout'

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

type TabProductListProps = {
  hideFavoriteTab?: boolean
}

function TabProductList({ hideFavoriteTab }: TabProductListProps) {
  const navigate = useNavigate()

  const { cart } = useAppSelector((state) => state.cart)

  const smDown = useResponsive('down', 'sm', 'sm')

  const { isOpen, setIsOpen, handleOpen } = useDialog()
  const { selected, handleSelectItem, handleSelectAll } = useSelectItem(cart)

  const [tabActive, setTabActive] = useState<string>('my-bag')

  const listItemCheckout =
    selected.length > 0 ? cart.filter((item) => selected.map((item) => Number(item)).includes(item.id)) : []

  return (
    <>
      <section
        className={`xs:w-[374px] sm:w-full ${hideFavoriteTab ? 'bg-white' : 'bg-greyMain'}  rounded-2xl xs:rounded-tr-none xs:rounded-br-none`}
      >
        <div className='flex items-end border-t-0 border-l-0 border-r-0 border-b-[1px] border-solid border-blackMain/[.32]'>
          {cart.length === 0 ? (
            <div className='w-full h-[55px] px-5 flex items-center'>
              <p className='text-[20px] font-customSemiBold'>Items in my cart</p>
            </div>
          ) : (
            (hideFavoriteTab ? tabsList.filter((tab) => tab.value === 'my-bag') : tabsList).map((tab) => (
              <div
                key={tab.value}
                onClick={() => setTabActive(tab.value)}
                className={`w-1/2 h-[55px] relative cursor-pointer ${!hideFavoriteTab ? 'hover:bg-blackMain/[.10]' : 'cursor-default'} rounded-tl-2xl rounded-tr-2xl transition-colors duration-300 ease-linear`}
              >
                <div
                  className={`w-full h-full flex ${hideFavoriteTab ? 'pl-5 justify-start' : 'justify-center'} items-center gap-[5px] ${tabActive === tab.value ? 'opacity-100' : 'opacity-[.44]'}`}
                >
                  <img src={tab.icon} alt={tab.value} className='size-6' />
                  <p className={`text-[18px] font-customSemiBold caption-top leading-[26px]`}>{tab.label}</p>
                </div>
                {!hideFavoriteTab && (
                  <div
                    className={`w-full min-h-[3px] h-[3px] ${tabActive === tab.value ? 'bg-gradient-to-r from-greenMain to-blueMain' : 'bg-transparent'}`}
                  />
                )}
              </div>
            ))
          )}
        </div>

        <div className='p-5 pb-0'>
          {cart.length === 0 ? (
            <p className='text-[18px] font-customXLight opacity-[.64]'>There is no item in your bag</p>
          ) : tabActive === 'my-bag' ? (
            cart.map((product, index) => (
              <div key={product.id} className={`flex flex-col gap-3 ${index === 0 ? 'mt-0' : 'mt-4'}`}>
                <CartItem
                  isSmall
                  hideSelect
                  hideHandleQuantity={hideFavoriteTab}
                  productCart={product}
                  handleSelectItem={handleSelectItem}
                  isItemSelected={selected.indexOf(product.id) !== -1}
                />
                <div className='w-full h-[1px] bg-blackMain/[.12]'></div>
              </div>
            ))
          ) : (
            <></>
          )}
        </div>

        <div className='w-full p-5 pb-0 flex items-center justify-between xs:mt-20 sm:mt-0'>
          <div className='flex items-center gap-3'>
            <div className='relative h-fit'>
              <input
                type='checkbox'
                checked={selected.length === cart.length}
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
                  .reduce((total: number, currentProduct: ProductCart) => {
                    return total + currentProduct.quantityInCart * currentProduct.price
                  }, 0)
                  .toFixed(2)
              : (0).toFixed(2)}
          </p>
        </div>

        <div className='w-full p-5 flex items-center justify-between gap-3'>
          <Button
            size='medium'
            fullWidth
            className={`${cart.length === 0 ? 'w-full' : 'xs:w-full sm:w-[233px]'} xs:h-[44px]`}
            classNameText='!uppercase xs:text-[16px] sm:text-[18px]'
            disabled={cart.length === 0}
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
        </div>
      </section>

      <CheckConfirmDialog open={isOpen} setOpen={setIsOpen} />
    </>
  )
}

export default TabProductList
