import images from '~/assets'
import { IconButton } from '~/components/iconButton'
import { Search } from '~/components/search'

function Header() {
  return (
    <header className='w-full flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <IconButton title='Menu' size='48'>
          <img src={images.icons.menu} alt='icons-menu' />
        </IconButton>
        <Search />
      </div>
      <img src={images.logo.logo_e_commerce} alt='logo' className='w-12 h-12' />
      <div className='flex items-center gap-2'>
        <IconButton>
          <img src={images.icons.heart} alt='icons-heart' />
        </IconButton>
        <IconButton>
          <img src={images.icons.shopping_bag} alt='icons-shopping-bag' />
        </IconButton>
      </div>
    </header>
  )
}

export default Header
