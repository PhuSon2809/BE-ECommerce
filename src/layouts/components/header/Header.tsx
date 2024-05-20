import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import images from '~/assets'
import { Button } from '~/components/button'
import { IconButton } from '~/components/iconButton'
import { Search } from '~/components/search'
import { PATH_PRIVATE_APP, PATH_PUBLIC_APP } from '~/constants/paths'
import useResponsive from '~/hooks/useResponsive'
import { useAppSelector } from '~/redux/configStore'
import { MenuDialog } from '~/sections/common'

function Header() {
  const { pathname } = useLocation()
  const { cart } = useAppSelector((state) => state.product)

  const smDown = useResponsive('down', 'sm', 'sm')

  const [openMenu, setOpenMenu] = useState<boolean>(false)

  return (
    <>
      <header className='w-full p-4 flex items-center justify-between gap-5'>
        <div className='flex items-center gap-5'>
          <IconButton title={smDown ? '' : 'Menu'} size={smDown ? '40' : '48'} onClick={() => setOpenMenu(true)}>
            <img src={images.icons.menu} alt='icons-menu' className='xs:size-5 sm:size-6' />
          </IconButton>
          {pathname !== PATH_PRIVATE_APP.order.history && !smDown ? (
            <Search />
          ) : (
            <IconButton title={smDown ? '' : 'Menu'} size={smDown ? '40' : '48'} onClick={() => setOpenMenu(true)}>
              <img src={images.icons.search} alt='icons-search' className='xs:size-5 sm:size-6' />
            </IconButton>
          )}
        </div>
        {pathname !== PATH_PRIVATE_APP.order.history && (
          <div className='w-[458.01px] flex items-center justify-end gap-5'>
            <IconButton size={smDown ? '40' : '48'}>
              <img src={images.icons.heart} alt='icons-heart' className='xs:size-5 sm:size-6' />
            </IconButton>
            <div className='relative'>
              <Link to={PATH_PUBLIC_APP.cart.root}>
                <IconButton size={smDown ? '40' : '48'}>
                  <img src={images.icons.shopping_bag} alt='icons-shopping-bag' className='xs:size-5 sm:size-6' />
                </IconButton>
              </Link>
              <div className='xs:size-5 sm:size-6 bg-gradient-to-tr from-blueMain to-greenMain rounded-full flex items-center justify-center absolute xs:top-[-6px] sm:top-[-8px] xs:right-[-6px] sm:right-[-8px]'>
                <p className='text-[14px] text-white font-customMedium'>{cart.length}</p>
              </div>
            </div>
            <Button size='small' className='!text-[18px]'>
              Sign in
            </Button>
          </div>
        )}
      </header>

      <MenuDialog open={openMenu} setOpen={setOpenMenu} variant='horizontal' />
    </>
  )
}

export default Header
