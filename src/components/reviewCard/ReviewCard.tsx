import { Review } from '~/@types/model'
import images from '~/assets'

type ReviewCard = {
  review: Review
}

function ReviewCard({ review }: ReviewCard) {
  return (
    <div className='flex flex-col gap-7'>
      <div className='flex items-center gap-2'>
        <div className='flex items-center gap-[1px]'>
          {Array.from({ length: 5 }).map((_, index: number) => (
            <img key={index} className='size-6' src={images.icons.star} alt='icon-star' />
          ))}
        </div>
        <p className='text-[24px] leading-none mt-1'>{review.ratings.toFixed(1)}</p>
      </div>
      <p className='text-[20px] font-medium leading-8'>{review.content}</p>
      <h6 className='text-[24px] font-semibold leading-[18px]'>
        ID Customer: <span>{review.idCustomer}</span>
      </h6>
    </div>
  )
}

export default ReviewCard
