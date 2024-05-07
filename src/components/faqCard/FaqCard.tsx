import { Dispatch, SetStateAction } from 'react'

import images from '~/assets'
import { FaqProduct } from '~/@types/model'
import { IconButton } from '~/components/iconButton'

type FaqCardProps = {
  faq: Omit<FaqProduct, 'icon'>
  index: number
  isActive: boolean
  setFaqActive: Dispatch<SetStateAction<number>>
}

function FaqCard({ faq, index, isActive, setFaqActive }: FaqCardProps) {
  return (
    <div
      className={` min-h-[580px] p-10 ${isActive && 'pt-20'}  ${isActive ? 'col-span-2 bg-blackMain' : 'col-auto bg-[#F6F6F7]'}  rounded-[60px] flex flex-col gap-12 transition-all duration-300 ease-in-out`}
    >
      <img src={images.icons.faqIcon} alt='faq-icon' className={`w-[72px] h-[72px] ${!isActive && 'hidden'}`} />
      <div className={`h-full flex flex-col  ${isActive ? 'gap-5' : 'items-end justify-between'} text-white`}>
        {!isActive && <div></div>}
        <h1
          className={`${isActive ? 'text-[32px] text-white font-semibold' : 'text-[24px] text-blackMain font-medium'}  leading-[42px]`}
        >
          {faq.title}
        </h1>
        <p className={`text-[18px] font-thin leading-[30px] ${!isActive && 'hidden'}`}>{faq.content}</p>
        {!isActive && (
          <IconButton color='white' size='64' onClick={() => setFaqActive(index)}>
            <img src={images.icons.arrow_top_right} alt='arrow-top-right' />
          </IconButton>
        )}
      </div>
    </div>
  )
}

export default FaqCard
