import images from '~/assets'

function RecentPurchases() {
  return (
    <section className='w-full bg-greyMain rounded-2xl'>
      <div className='flex items-end border-t-0 border-l-0 border-r-0 border-b-[1px] border-solid border-blackMain/[.32]'>
        <div>
          <p>Recent Purchases</p>
          <div className='flex items-center gap-[10px]'>
            <img src={images.icons.arrow_left} alt='icon-arrow-left' />
            <img src={images.icons.arrow_right} alt='icon-arrow-right' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecentPurchases
