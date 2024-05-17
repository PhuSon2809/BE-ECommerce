import { useLocation, useNavigate } from 'react-router-dom'
import images from '~/assets'
import { Button } from '~/components/button'
import { IconButton } from '~/components/iconButton'
import { Search } from '~/components/search'

function Header() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <header className='w-full p-4 flex items-center justify-between'>
      <div className='flex items-center gap-5'>
        <IconButton title='Menu' size='48'>
          <img src={images.icons.menu} alt='icons-menu' />
        </IconButton>
        {pathname !== '/history' && <Search />}
      </div>
      {pathname !== '/history' && (
        <div className='w-[458.01px] flex items-center justify-end gap-5'>
          <IconButton size='48'>
            <img src={images.icons.heart} alt='icons-heart' />
          </IconButton>
          <IconButton size='48' onClick={() => navigate('/cart')}>
            <img src={images.icons.shopping_bag} alt='icons-shopping-bag' />
          </IconButton>
          <Button size='small' className='!text-[18px]'>
            Sign in
          </Button>
        </div>
      )}
    </header>
  )
}

export default Header
