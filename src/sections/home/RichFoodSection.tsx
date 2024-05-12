import images from '~/assets'
import { Button } from '~/components/button'

function RichFoodSection() {
  return (
    <section className='h-[901px] mt-[50px] relative overflow-hidden'>
      <h1 className='text-[240px] font-customBold text-[#F1F1F1]/[.44] uppercase absolute top-0 left-[-11.5%] leading-none'>
        food
      </h1>
      <div className='ml-[5.2%] mt-[9%] relative z-50'>
        <h1 className='text-[52px] font-customBold capitalize leading-[64px] mb-5'>
          Rich Foods for Optimal <br /> Health and Well-Being
        </h1>
        <p className='w-[572px] text-[18px] font-customRegular mb-10 leading-7'>
          Unlock the potential of wholesome eating with 'Revitalize Your Life.' Delve into the benefits of nutrient-rich
          foods, energize your body, and cultivate a vibrant lifestyle. From boosting immunity to enhancing vitality,
          discover how healthy eating can transform your well-being.
        </p>
        <Button size='large' className='rounded-[26px]'>
          shop now
        </Button>
      </div>
      <img src={images.home.home_rich_food} alt='home-rich-food' className='absolute bottom-0 right-0' />
    </section>
  )
}

export default RichFoodSection
