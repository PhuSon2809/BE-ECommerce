import { Dispatch, SetStateAction } from 'react'
import { Link, useLocation } from 'react-router-dom'
import images from '~/assets'
import {
  NavBoxIcon,
  NavCategoryIcon,
  NavDiamondIcon,
  NavHealthIcon,
  NavHomeIcon,
  NavLogoutIcon,
  NavMessageIcon,
  NavNetworkIcon,
  NavNotificationIcon,
  NavPlantIcon,
  NavSettingIcon
} from '~/components/icons'
import { PATH_PUBLIC_APP } from '~/constants/paths'

const configNavbar = [
  {
    url: PATH_PUBLIC_APP.home,
    icon: (color: string) => <NavHomeIcon color={color} />
  },
  {
    url: PATH_PUBLIC_APP.home,
    icon: (color: string) => <NavBoxIcon color={color} />
  },
  {
    url: PATH_PUBLIC_APP.home,
    icon: (color: string) => <NavHealthIcon color={color} />
  },
  {
    url: PATH_PUBLIC_APP.home,
    icon: (color: string) => <NavPlantIcon color={color} />
  },
  {
    url: PATH_PUBLIC_APP.home,
    icon: (color: string) => <NavDiamondIcon color={color} />
  },
  {
    url: PATH_PUBLIC_APP.category.list,
    icon: (color: string) => <NavCategoryIcon color={color} />
  },
  {
    url: PATH_PUBLIC_APP.home,
    icon: (color: string) => <NavNetworkIcon color={color} />
  },
  {
    url: PATH_PUBLIC_APP.home,
    icon: (color: string) => <NavMessageIcon color={color} />
  },
  {
    url: PATH_PUBLIC_APP.home,
    icon: (color: string) => <NavNotificationIcon color={color} />
  },
  {
    url: PATH_PUBLIC_APP.home,
    icon: (color: string) => <NavSettingIcon color={color} />
  },
  {
    url: PATH_PUBLIC_APP.home,
    icon: (color: string) => <NavLogoutIcon color={color} />
  }
]

type NavbarProps = {
  setOpenMenu?: Dispatch<SetStateAction<boolean>>
}

function Navbar({ setOpenMenu }: NavbarProps) {
  const { pathname } = useLocation()

  return (
    <div className='w-[92px] p-[22px] bg-white/[.44] backdrop-blur-[40px] rounded-3xl shadow-4xl flex flex-col items-center gap-[22px]'>
      <img src={images.logo.logo_e_commerce} alt='logo' className='size-12' />
      <div className='flex flex-col gap-[10px]'>
        {configNavbar.map((nav) =>
          setOpenMenu && nav.url === PATH_PUBLIC_APP.category.list ? (
            <div
              onClick={() => setOpenMenu(true)}
              className={`size-12 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 ease-in-out cursor-pointer
                        ${pathname === nav.url ? 'bg-gradient-to-r from-greenMain to-blueMain backdrop-blur-[40px] shadow-4xl' : 'bg-white/[.0]'}`}
            >
              {nav.icon(pathname === nav.url ? '#FFFFFF' : '#0D0D0D')}
            </div>
          ) : (
            <Link to={nav.url}>
              <div
                className={`size-12 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 ease-in-out cursor-pointer
                        ${pathname === nav.url ? 'bg-gradient-to-r from-greenMain to-blueMain backdrop-blur-[40px] shadow-4xl' : 'bg-white/[.0]'}`}
              >
                {nav.icon(pathname === nav.url ? '#FFFFFF' : '#0D0D0D')}
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  )
}

export default Navbar
