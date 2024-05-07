import images from '~/assets'
import { Button } from '~/components/button'
import { IconButton } from '~/components/iconButton'
import { Search } from '~/components/search'

function Header() {
  return (
    <header className='w-full flex items-center justify-between'>
      <div className='flex items-center gap-5'>
        <IconButton title='Menu' size='48' shadow>
          <img src={images.icons.menu} alt='icons-menu' />
        </IconButton>
        <Search />
      </div>
      <img src={images.logo.logo_e_commerce} alt='logo' className='w-12 h-12' />
      <div className='w-[458.01px] flex items-center justify-end gap-5'>
        <IconButton>
          <img src={images.icons.heart} alt='icons-heart' />
        </IconButton>
        <IconButton>
          <img src={images.icons.shopping_bag} alt='icons-shopping-bag' />
        </IconButton>
        <Button className='min-w-[120px] h-10'>SIGN IN</Button>
      </div>
    </header>
  )
}

export default Header
