import { Dispatch, SetStateAction, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import images from '~/assets'
import {
  NavBoxIcon,
  NavCategoryIcon,
  NavDiamondIcon,
  NavHealthIcon,
  NavHistoryIcon,
  NavHomeIcon,
  NavLogoutIcon,
  NavNetworkIcon,
  NavNotificationIcon,
  NavPlantIcon,
  NavSettingIcon,
  NavTrackingIcon
} from '~/components/icons'
import { PATH_PRIVATE_APP, PATH_PUBLIC_APP } from '~/constants/paths'
import './styles.scss'
import { LogoutDialog } from '~/sections/logout'
import useDialog from '~/hooks/useDialog'

const configNavbar = [
  {
    url: PATH_PUBLIC_APP.home,
    label: 'Home',
    icon: (color: string) => <NavHomeIcon color={color} />
  },
  {
    url: PATH_PUBLIC_APP.home,
    label: 'Product',
    icon: (color: string) => <NavBoxIcon color={color} />
  },
  {
    url: PATH_PUBLIC_APP.home,
    label: 'Health',
    icon: (color: string) => <NavHealthIcon color={color} />
  },
  {
    url: PATH_PUBLIC_APP.home,
    label: 'Cosmetic',
    icon: (color: string) => <NavPlantIcon color={color} />
  },
  {
    url: PATH_PUBLIC_APP.home,
    label: 'Fashion',
    icon: (color: string) => <NavDiamondIcon color={color} />
  },
  {
    url: PATH_PUBLIC_APP.category.list,
    label: 'Food',
    icon: (color: string) => <NavCategoryIcon color={color} />
  },
  {
    url: PATH_PUBLIC_APP.home,
    label: 'Digital',
    icon: (color: string) => <NavNetworkIcon color={color} />
  },
  {
    url: PATH_PRIVATE_APP.order.tracking,
    label: 'Tracking',
    icon: (color: string) => <NavTrackingIcon color={color} />
  },
  {
    url: PATH_PRIVATE_APP.order.history,
    label: 'History',
    icon: (color: string) => <NavHistoryIcon color={color} />
  },
  {
    url: PATH_PRIVATE_APP.notification,
    label: 'Notification',
    icon: (color: string) => <NavNotificationIcon color={color} />
  },
  {
    url: PATH_PRIVATE_APP.setting,
    label: 'Setting',
    icon: (color: string) => <NavSettingIcon color={color} />
  },
  {
    url: '',
    label: 'Logout',
    icon: (color: string) => <NavLogoutIcon color={color} />
  }
]

type NavbarProps = {
  variant?: 'vertical' | 'horizontal'
  className?: string
  setOpenMenu?: Dispatch<SetStateAction<boolean>>
}

function Navbar({ setOpenMenu, className, variant = 'vertical' }: NavbarProps) {
  const { pathname } = useLocation()

  const scrollRef = useRef<HTMLDivElement>(null)

  const { isOpen, setIsOpen, handleOpen } = useDialog()

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (scrollRef.current) {
      const startX = e.pageX
      const startScrollLeft = scrollRef.current.scrollLeft

      const onMouseMove = (e: MouseEvent) => {
        if (scrollRef.current) {
          const x = e.pageX - startX
          scrollRef.current.scrollLeft = startScrollLeft - x
        }
      }

      const onMouseUp = () => {
        window.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('mouseup', onMouseUp)
      }

      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
    }
  }

  const ListNavItem = () => {
    const handleLogout = () => {
      handleOpen()
      setOpenMenu && setOpenMenu(false)
    }

    return (
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        className={`flex ${variant === 'vertical' ? 'flex-col' : 'p-1 flex-row flex-nowrap overflow-auto cursor-grab -mt-1'} gap-[10px] list-nav`}
      >
        {configNavbar.map((nav) =>
          (setOpenMenu && nav.url === PATH_PUBLIC_APP.category.list) || nav.label === 'Logout' ? (
            <div
              key={nav.label}
              onClick={() => (nav.label === 'Logout' ? handleLogout() : setOpenMenu && setOpenMenu(true))}
              className={`${variant === 'vertical' ? 'size-12' : 'h-[46px] px-3 flex items-center gap-[10px]'} flex items-center justify-center rounded-full hover:scale-105 transition duration-300 ease-in-out cursor-pointer
                        ${pathname === nav.url ? 'bg-gradient-to-r from-greenMain to-blueMain backdrop-blur-[40px] shadow-4xl' : variant === 'vertical' ? 'bg-white' : 'bg-transparent'}`}
            >
              {nav.icon(pathname === nav.url ? '#FFFFFF' : '#0D0D0D')}
              {variant === 'horizontal' && (
                <p
                  className={`text-[20px] font-customMedium ${pathname === nav.url ? 'text-[#FFF]' : 'text-blackMain'}`}
                >
                  {nav.label}
                </p>
              )}
            </div>
          ) : (
            <Link key={nav.label} to={nav.url}>
              <div
                className={`${variant === 'vertical' ? 'size-12' : 'h-[46px] px-3 flex items-center gap-[10px]'} flex items-center justify-center rounded-full hover:scale-105 transition duration-300 ease-in-out cursor-pointer
                        ${pathname === nav.url ? 'bg-gradient-to-r from-greenMain to-blueMain backdrop-blur-[40px] shadow-4xl' : 'bg-white'}`}
              >
                {nav.icon(pathname === nav.url ? '#FFFFFF' : '#0D0D0D')}
                {variant === 'horizontal' && (
                  <p
                    className={`text-[20px] font-customMedium ${pathname === nav.url ? 'text-[#FFF]' : 'text-blackMain'}`}
                  >
                    {nav.label}
                  </p>
                )}
              </div>
            </Link>
          )
        )}
        <LogoutDialog open={isOpen} setOpen={setIsOpen} />
      </div>
    )
  }

  return variant === 'vertical' ? (
    <div
      className={`p-[22px] bg-white/[.44] backdrop-blur-[40px] rounded-3xl shadow-4xl flex flex-col items-center gap-[22px] ${className}`}
    >
      <img src={images.logo.logo_e_commerce} alt='logo' className='size-12' />
      {ListNavItem()}
    </div>
  ) : (
    ListNavItem()
  )
}

export default Navbar
