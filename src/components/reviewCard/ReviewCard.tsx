import { Review } from '~/@types/models'
import images from '~/assets'

type ReviewCard = {
  review: Review
}

function ReviewCard({ review }: ReviewCard) {
  return (
    <div className='flex flex-col xs:gap-4 sm:gap-7'>
      <div className='flex items-center gap-2'>
        <div className='flex items-center gap-[1px]'>
          {Array.from({ length: 5 }).map((_, index: number) => (
            <img key={index} className='xs:size-[18px] sm:size-6' src={images.icons.star} alt='icon-star' />
          ))}
        </div>
        <p className='xs:text-[18px] sm:text-[24px] leading-none mt-1'>{review.ratings.toFixed(1)}</p>
      </div>
      <p className='xs:text-[14px] sm:text-[20px] font-customMedium xs:leading-6 sm:leading-8'>{review.content}</p>
      <h6 className='xs:text-[18px] sm:text-[24px] font-customSemiBold leading-none'>
        ID Customer: <span>{review.idCustomer}</span>
      </h6>
    </div>
  )
}

export default ReviewCard
