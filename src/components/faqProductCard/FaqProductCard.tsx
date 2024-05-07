import { FaqProduct } from '~/@types/model'
import { Button } from '~/components/button'

type FaqProductCardProps = {
  faq: FaqProduct
}

function FaqProductCard({ faq }: FaqProductCardProps) {
  return (
    <div className='p-10 w-full h-[606px] bg-[#F8F8F9] rounded-tl-[88px] rounded-br-[88px] rounded-tr-[4px] rounded-bl-[4px] flex flex-col justify-between'>
      <div className='w-[96px] h-[96px] bg-transparent flex items-center justify-center rounded-full border-[1px] border-white border-solid'>
        <div className='w-[72px] h-[72px] bg-white/[.44] flex items-center justify-center rounded-full backdrop-blur-[37.89px]'>
          <img src={faq.icon} alt='icon' />
        </div>
      </div>
      <h1 className='text-[32px] font-semibold leading-[42px] tracking-tight'>{faq.title}</h1>
      <p className='text-[18px] leading-[30px]'>{faq.content}</p>
      <Button className='w-[196px] h-[52px] uppercase'>See more</Button>
    </div>
  )
}

export default FaqProductCard
