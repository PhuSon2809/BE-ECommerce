import images from '~/assets'
import { Button } from '~/components/button'

function CosmeticSection() {
  return (
    <section className='relative'>
      <h1 className='text-[240px] font-customBold text-[#F1F1F1]/[.44] uppercase absolute top-0 right-0'>cosmetic</h1>
      <div className='ml-[5%] mt-[10%] relative z-50'>
        <h1 className='text-[52px] font-customBold capitalize leading-[64px]'>
          Enhancing Your Glow <br /> with Cosmetic Elegance
        </h1>
        <p className='w-[528px] text-[18px] font-customRegular'>
          Our products are crafted to inspire confidence and self-expression, from subtle enhancements to bold
          statements. Experience the transformative power of makeup and embrace your unique style with grace. Let your
          inner radiance shine through with our exquisite collection.
        </p>
        <Button size='large' className='rounded-[26px]'>
          shop now
        </Button>
      </div>
      <img src={images.home.home_cosmetic} alt='home-cosmetic' />
    </section>
  )
}

export default CosmeticSection
