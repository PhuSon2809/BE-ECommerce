import { Dispatch, SetStateAction, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
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
import useDialog from '~/hooks/useDialog'
import { LogoutDialog } from '~/sections/logout'
import './styles.scss'

const configNavbar = [
  {
    url: PATH_PUBLIC_APP.home,
    label: 'Home',
    icon: (color: string) => <NavHomeIcon color={color} className='xs:size-[18px] sm:size-6' />
  },
  {
    url: PATH_PUBLIC_APP.home,
    label: 'Product',
    icon: (color: string) => <NavBoxIcon color={color} className='xs:size-[18px] sm:size-6' />
  },
  {
    url: PATH_PUBLIC_APP.home,
    label: 'Health',
    icon: (color: string) => <NavHealthIcon color={color} className='xs:size-[18px] sm:size-6' />
  },
  {
    url: PATH_PUBLIC_APP.home,
    label: 'Cosmetic',
    icon: (color: string) => <NavPlantIcon color={color} className='xs:size-[18px] sm:size-6' />
  },
  {
    url: PATH_PUBLIC_APP.home,
    label: 'Fashion',
    icon: (color: string) => <NavDiamondIcon color={color} className='xs:size-[18px] sm:size-6' />
  },
  {
    url: PATH_PUBLIC_APP.category.list,
    label: 'Food',
    icon: (color: string) => <NavCategoryIcon color={color} className='xs:size-[18px] sm:size-6' />
  },
  {
    url: PATH_PUBLIC_APP.home,
    label: 'Digital',
    icon: (color: string) => <NavNetworkIcon color={color} className='xs:size-[18px] sm:size-6' />
  },
  {
    url: PATH_PRIVATE_APP.order.tracking,
    label: 'Tracking',
    icon: (color: string) => <NavTrackingIcon color={color} className='xs:size-[18px] sm:size-6' />
  },
  {
    url: PATH_PRIVATE_APP.order.history,
    label: 'History',
    icon: (color: string) => <NavHistoryIcon color={color} className='xs:size-[18px] sm:size-6' />
  },
  {
    url: PATH_PRIVATE_APP.notification,
    label: 'Notification',
    icon: (color: string) => <NavNotificationIcon color={color} className='xs:size-[18px] sm:size-6' />
  },
  {
    url: PATH_PRIVATE_APP.setting,
    label: 'Setting',
    icon: (color: string) => <NavSettingIcon color={color} className='xs:size-[18px] sm:size-6' />
  },
  {
    url: '',
    label: 'Logout',
    icon: (color: string) => <NavLogoutIcon color={color} className='xs:size-[18px] sm:size-6' />
  }
]

type NavbarProps = {
  variant?: 'vertical' | 'horizontal'
  className?: string
  setOpenMenu?: Dispatch<SetStateAction<boolean>>
}

function Navbar({ setOpenMenu, className, variant = 'vertical' }: NavbarProps) {
  const navigate = useNavigate()

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
        className={`flex ${variant === 'vertical' ? 'flex-col' : 'xs:p-0 sm:p-1 flex-row xs:flex-wrap sm:flex-nowrap xs:justify-between overflow-auto cursor-grab xs:mt-0 sm:-mt-1'} xs:gap-2 sm:gap-[10px] list-nav`}
      >
        {configNavbar.map((nav) =>
          (setOpenMenu && nav.url === PATH_PUBLIC_APP.category.list) || nav.label === 'Logout' ? (
            <div
              key={nav.label}
              onClick={() => (nav.label === 'Logout' ? handleLogout() : setOpenMenu && setOpenMenu(true))}
              className={`${variant === 'vertical' ? 'size-12' : 'xs:w-[30%] sm:w-fit xs:h-11 sm:h-[46px] px-3 flex items-center gap-[10px]'} flex items-center justify-center rounded-full hover:scale-105 transition duration-300 ease-in-out cursor-pointer
                        ${pathname === nav.url ? 'bg-gradient-to-r from-greenMain to-blueMain backdrop-blur-[40px] shadow-4xl' : 'bg-white'}`}
            >
              <div>{nav.icon(pathname === nav.url ? '#FFFFFF' : '#0D0D0D')}</div>
              {variant === 'horizontal' && (
                <p
                  className={`xs:text-[14px] sm:text-[17px] md:text-[20px] font-customMedium ${pathname === nav.url ? 'text-[#FFF]' : 'text-blackMain'}`}
                >
                  {nav.label}
                </p>
              )}
            </div>
          ) : (
            <div
              onClick={() => navigate(nav.url)}
              className={`${variant === 'vertical' ? 'size-12' : `${nav.url === PATH_PRIVATE_APP.notification ? 'xs:w-fit' : 'xs:w-[30.5%]'} sm:w-fit xs:h-11 sm:h-[46px] px-3 flex items-center xs:gap-2 sm:gap-[10px]`} flex items-center justify-center rounded-full hover:scale-105 transition duration-300 ease-in-out cursor-pointer
                        ${pathname === nav.url ? 'bg-gradient-to-r from-greenMain to-blueMain backdrop-blur-[40px] shadow-4xl' : 'bg-white'}`}
            >
              <div>{nav.icon(pathname === nav.url ? '#FFFFFF' : '#0D0D0D')}</div>
              {variant === 'horizontal' && (
                <p
                  className={`xs:text-[14px] sm:text-[17px] md:text-[20px] font-customMedium ${pathname === nav.url ? 'text-[#FFF]' : 'text-blackMain'}`}
                >
                  {nav.label}
                </p>
              )}
            </div>
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
