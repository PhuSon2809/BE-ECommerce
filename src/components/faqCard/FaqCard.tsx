import { Dispatch, SetStateAction } from 'react'

import images from '~/assets'
import { FaqProduct } from '~/@types/model'
import { IconButton } from '~/components/iconButton'
import useResponsive from '~/hooks/useResponsive'

type FaqCardProps = {
  faq: Omit<FaqProduct, 'icon'>
  index: number
  isActive: boolean
  setFaqActive: Dispatch<SetStateAction<number>>
}

function FaqCard({ faq, index, isActive, setFaqActive }: FaqCardProps) {
  const smDown = useResponsive('down', 'sm', 'sm')

  return (
    <div
      className={`xs:min-h-[140px] ${isActive ? 'xs:h-fit' : 'xs:h-[140px]'} sm:min-h-[580px] h-full xs:p-6 sm:p-8 md:p-10 ${isActive ? 'xs:pt-6 sm:pt-16 md:pt-20' : ''}  ${isActive ? 'bg-blackMain xs:w-full sm:w-2/5' : 'bg-[#F6F6F7] xs:w-full sm:w-1/5'}  xs:rounded-[30px] sm:rounded-[45px] md:rounded-[60px] flex flex-col xs:gap-6 sm:gap-12 transition-colors duration-500 ease-in-out`}
    >
      <img
        src={images.icons.faqIcon}
        alt='faq-icon'
        className={`xs:size-11 sm:size-[60px] md-size-[72px] ${!isActive ? 'hidden' : ''}`}
      />
      <div
        className={`${smDown ? 'w-full' : ''} flex ${isActive ? 'xs:flex-col h-fit' : 'xs:flex-row h-[500px]'} sm:flex-col ${isActive ? (smDown ? 'justify-between gap-5' : 'gap-5') : 'items-end justify-between'} text-white`}
      >
        {!isActive && !smDown && <div className='text-black'></div>}
        <h1
          className={`${smDown ? 'w-[205px]' : 'w-fit'} ${isActive ? 'xs:text-[24px] sm:text-[32px] text-white font-semibold' : 'text-[24px] text-blackMain font-medium'} leading-none`}
        >
          {faq.title}
        </h1>
        <p className={`xs:text-[16px] sm:text-[18px] font-customRegular leading-[30px] ${!isActive ? 'hidden' : ''}`}>
          {faq.content}
        </p>
        {!isActive && (
          <IconButton color='white' size={smDown ? '44' : '64'} onClick={() => setFaqActive(index)}>
            <img src={images.icons.arrow_top_right} alt='arrow-top-right' className='xs:size-[16.5px] sm:size-[24px]' />
          </IconButton>
        )}
      </div>
    </div>
  )
}

export default FaqCard
