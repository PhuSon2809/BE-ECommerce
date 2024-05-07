import Slider from 'react-slick'
import images from '~/assets'
import { reviews } from '~/assets/mocks/review'
import { ReviewCard } from '~/components/reviewCard'

function ReviewSection() {
  const listRatings = [
    {
      title: 1,
      percent: 5,
      totalRatings: '02'
    },
    {
      title: 2,
      percent: 15,
      totalRatings: '24'
    },
    {
      title: 3,
      percent: 30,
      totalRatings: '120'
    },
    {
      title: 4,
      percent: 40,
      totalRatings: '256'
    },
    {
      title: 5,
      percent: 85,
      totalRatings: '567'
    }
  ]
  return (
    <section className='pt-[100px] pb-[70px]'>
      <div className='px-20 flex items-start justify-between'>
        <div className='w-[620px]'>
          <h1 className='text-[56px] font-bold capitalize tracking-tight'>Why do we look good from others?</h1>
          <p className='text-[20px] leading-[32px]'>Read testimonials what they say about our product</p>
        </div>

        <div className={`min-h-[316px] w-[494px] py-8 px-[44.5px] rounded-[24px] shadow-5xl`}>
          <div className='h-full flex items-center justify-between'>
            {listRatings.map((rating) => (
              <div key={rating.title} className='h-full flex flex-col items-center justify-between gap-3'>
                <p className='text[20px] leading-7'>{rating.totalRatings}</p>
                <div className='h-[180px] min-w-3 w-3 bg-greyMain rounded-[2px] flex'>
                  <div
                    className={`bg-gradient-to-b from-blueMain to-greenMain w-full rounded-[2px] opacity-100 mt-auto`}
                    style={{ height: `${rating.percent}%` }}
                  ></div>
                </div>
                <div className='flex items-center gap-[2px]'>
                  <p className='text[20px]leading-none mt-[1px]'>{rating.title}</p>
                  <img src={images.icons.star} alt='icon-star' className='w-5 h-5' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* List review */}
      <div className='list-review relative pl-20 mt-14'>
        <Slider dots arrows={false} infinite speed={500} slidesToShow={3} slidesToScroll={1}>
          {reviews.map((review) => (
            <ReviewCard review={review} />
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default ReviewSection
