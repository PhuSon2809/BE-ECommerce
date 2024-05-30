import { SelectFilter } from '~/components/form'
import { useState } from 'react'
import { OptionSelect } from '~/@types/common'
import { listUserInfo } from '~/assets/mocks/user'
import { UserInfoItem } from '~/components/userInfoItem'
import { SliderPagination } from '~/components/sliderPagination'
import images from '~/assets'

const listFilterOption: OptionSelect[] = [
  {
    value: 'heath',
    label: 'Heath'
  },
  {
    value: 'cosmetic',
    label: 'Cosmetic'
  },
  {
    value: 'fashion',
    label: 'Fashion'
  }
]

function ListUserInfo() {
  const [sortBy, setSortBy] = useState<OptionSelect>({ value: '', label: '' })

  const [activeSlide, setActiveSlide] = useState<number>(0)

  const handleChangePage = (index: number) => {
    setActiveSlide(index)
  }

  return (
    <section className='xs:px-4 sm:px-5 xs:pt-[110px] sm:pt-[90px] pb-5 xs:space-y-4 sm:space-y-5 bg-gradient-to-b from-white/[.8] to-greyLight'>
      <SelectFilter
        isSortBy
        label='Sort by'
        options={listFilterOption}
        selected={sortBy}
        setSelected={setSortBy}
        className='xs:min-w-[173px] xs:h-11 sm:min-w-[216px] sm:h-12 rounded-lg ring-greyLight focus:ring-blackMain/[.1] hover:ring-blackMain/[.1]'
      />
      <div className='flex flex-col xs:gap-4 sm:gap-5'>
        {listUserInfo.map((user) => (
          <UserInfoItem key={user.id} user={user} />
        ))}
      </div>

      <div className='py-2 flex items-center justify-center gap-4 mt-[15px]'>
        <img src={images.icons.arrow_left} alt='arrow-left-icon' className='xs:size-6 sm:size-8 cursor-pointer' />
        <SliderPagination
          className='xs:!size-[7.5px] sm:!size-[10px]'
          activeIndex={activeSlide}
          slideToGo={handleChangePage}
          slideCount={4}
        />
        <img src={images.icons.arrow_right} alt='arrow-right-icon' className='xs:size-6 sm:size-8 cursor-pointer' />
      </div>
    </section>
  )
}

export default ListUserInfo
