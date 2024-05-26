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
    <section className='px-5 pt-[90px] pb-5 space-y-5 bg-gradient-to-b from-white to-greyLight'>
      <SelectFilter
        isSortBy
        label='Sort by'
        options={listFilterOption}
        selected={sortBy}
        setSelected={setSortBy}
        className='w-[216px] h-12 rounded-lg ring-greyLight focus:ring-blackMain/[.1] hover:ring-blackMain/[.1]'
      />
      <div className='flex flex-col gap-5'>
        {listUserInfo.map((user) => (
          <UserInfoItem key={user.id} user={user} />
        ))}
      </div>

      <div className='py-2 flex items-center justify-center gap-4 mt-[15px]'>
        <img src={images.icons.arrow_left} alt='arrow-left-icon' className='size-8 cursor-pointer' />
        <SliderPagination
          className='!size-[10px]'
          activeIndex={activeSlide}
          slideToGo={handleChangePage}
          slideCount={4}
        />
        <img src={images.icons.arrow_right} alt='arrow-right-icon' className='size-8 cursor-pointer' />
      </div>
    </section>
  )
}

export default ListUserInfo
