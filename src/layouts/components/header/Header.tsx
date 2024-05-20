import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import images from '~/assets'
import { Button } from '~/components/button'
import { IconButton } from '~/components/iconButton'
import { Search } from '~/components/search'
import { PATH_PUBLIC_APP } from '~/constants/paths'
import { useAppSelector } from '~/redux/configStore'
import { MenuDialog } from '~/sections/common'

function Header() {
  const { pathname } = useLocation()
  const { cart } = useAppSelector((state) => state.product)

  const [openMenu, setOpenMenu] = useState<boolean>(false)

  return (
    <>
      <header className='w-full p-4 flex items-center justify-between'>
        <div className='flex items-center gap-5'>
          <IconButton title='Menu' size='48' onClick={() => setOpenMenu(true)}>
            <img src={images.icons.menu} alt='icons-menu' />
          </IconButton>
          {pathname !== '/history' && <Search />}
        </div>
        {pathname !== '/history' && (
          <div className='w-[458.01px] flex items-center justify-end gap-5'>
            <IconButton size='48'>
              <img src={images.icons.heart} alt='icons-heart' />
            </IconButton>
            <div className='relative'>
              <Link to={PATH_PUBLIC_APP.cart.root}>
                <IconButton size='48'>
                  <img src={images.icons.shopping_bag} alt='icons-shopping-bag' />
                </IconButton>
              </Link>
              <div className='size-6 bg-gradient-to-tr from-blueMain to-greenMain rounded-full flex items-center justify-center absolute top-[-8px] right-[-8px]'>
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
