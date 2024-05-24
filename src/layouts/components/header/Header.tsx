import { Dispatch, SetStateAction } from 'react'
import { Link, useLocation } from 'react-router-dom'
import images from '~/assets'
import { Button } from '~/components/button'
import { IconButton } from '~/components/iconButton'
import { FavoriteIcon } from '~/components/icons'
import { Search } from '~/components/search'
import { PATH_PRIVATE_APP, PATH_PUBLIC_APP } from '~/constants/paths'
import useDialog from '~/hooks/useDialog'
import useResponsive from '~/hooks/useResponsive'
import { useAppSelector } from '~/redux/configStore'
import { MenuDialog } from '~/sections/common'

type HeaderProps = {
  hideMenu?: boolean
  hideCart?: boolean
  hideFavorite?: boolean
  setOpenMenu?: Dispatch<SetStateAction<boolean>>
  setOpenCart?: Dispatch<SetStateAction<boolean>>
}

function Header({ setOpenMenu, setOpenCart, hideMenu = false, hideCart = false, hideFavorite = false }: HeaderProps) {
  const { pathname } = useLocation()
  const { cart } = useAppSelector((state) => state.cart)
  const { favorites } = useAppSelector((state) => state.favorite)

  const smDown = useResponsive('down', 'sm')

  const { isOpen, setIsOpen } = useDialog()

  return (
    <header
      className={`w-full p-4 flex items-center justify-between gap-5 ${pathname === PATH_PUBLIC_APP.category.list && '!p-0'}`}
    >
      <div className='flex items-center gap-5'>
        {!hideMenu && (
          <div>
            <IconButton
              title={smDown ? '' : 'Menu'}
              size={smDown ? '40' : '48'}
              className={`${pathname === PATH_PRIVATE_APP.user.tracking && 'bg-white/[.76] backdrop-blur-[80px] shadow-popover-custom-2'}`}
              onClick={() => (setOpenMenu ? setOpenMenu(true) : setIsOpen(!isOpen))}
            >
              <img src={images.icons.menu} alt='icons-menu' className='xs:size-5 sm:size-6' />
            </IconButton>
            <MenuDialog open={isOpen} setOpen={setIsOpen} variant='horizontal' />
          </div>
        )}
        {pathname !== PATH_PRIVATE_APP.order.history &&
          pathname !== PATH_PRIVATE_APP.user.tracking &&
          (!smDown ? (
            <Search />
          ) : (
            <IconButton size={smDown ? '40' : '48'}>
              <img src={images.icons.search} alt='icons-search' className='xs:size-5 sm:size-6' />
            </IconButton>
          ))}
      </div>
      {pathname !== PATH_PRIVATE_APP.order.history && pathname !== PATH_PRIVATE_APP.user.tracking && (
        <div className='xs:w-fit sm:w-[458.01px] flex items-center justify-end gap-5'>
          {!hideFavorite && (
            <div className='relative'>
              <IconButton size={smDown ? '40' : '48'}>
                <FavoriteIcon color='black' className='xs:size-5 sm:size-6' />
                {/* <img src={images.icons.heart} alt='icons-heart' className='xs:size-5 sm:size-6' /> */}
              </IconButton>
              <div className='xs:size-5 sm:size-6 bg-gradient-to-tr from-blueMain to-greenMain rounded-full flex items-center justify-center absolute xs:top-[-6px] sm:top-[-8px] xs:right-[-6px] sm:right-[-8px]'>
                <p className='text-[14px] text-white font-customMedium'>{favorites.length}</p>
              </div>
            </div>
          )}
          {!hideCart && (
            <div className='relative'>
              {setOpenCart ? (
                <IconButton size={smDown ? '40' : '48'} onClick={() => setOpenCart(true)}>
                  <img src={images.icons.shopping_bag} alt='icons-shopping-bag' className='xs:size-5 sm:size-6' />
                </IconButton>
              ) : (
                <Link to={PATH_PUBLIC_APP.cart.root}>
                  <IconButton size={smDown ? '40' : '48'}>
                    <img src={images.icons.shopping_bag} alt='icons-shopping-bag' className='xs:size-5 sm:size-6' />
                  </IconButton>
                </Link>
              )}

              <div className='xs:size-5 sm:size-6 bg-gradient-to-tr from-blueMain to-greenMain rounded-full flex items-center justify-center absolute xs:top-[-6px] sm:top-[-8px] xs:right-[-6px] sm:right-[-8px]'>
                <p className='text-[14px] text-white font-customMedium'>{cart.length}</p>
              </div>
            </div>
          )}

          <Button size='small' className='!text-[18px]'>
            Sign in
          </Button>
        </div>
      )}
    </header>
  )
}

export default Header
