import { Button } from '~/components/button'

function UnveilingSection() {
  return (
    <section className='h-[803px] mt-[100px] relative'>
      <h1 className='text-[240px] font-customBold text-[#F1F1F1]/[.44] uppercase absolute top-0 right-0 leading-none'>
        fashion
      </h1>
      <div className='flex relative z-50'>
        <div>
          <h1 className='text-[52px] font-customBold capitalize leading-[64px] mb-5'>
            Unveiling the Timeless <br /> Trends of Fashion
          </h1>
          <p className='w-[587px] text-[18px] font-customRegular mb-10'>
            Discover the latest trends, iconic classics, and innovative designs shaping the fashion landscape. From
            haute couture to street style, explore the diversity and creativity defining modern fashion. Join us in
            decoding the language of style and inspiring your wardrobe.
          </p>
          <Button size='large' className='rounded-[26px]'>
            shop now
          </Button>
        </div>
        <div>
          <h1 className='text-[52px] font-customBold capitalize leading-[64px] mb-5'>
            Unveiling the Timeless <br /> Trends of Fashion
          </h1>
          <p className='w-[587px] text-[18px] font-customRegular mb-10'>
            Discover the latest trends, iconic classics, and innovative designs shaping the fashion landscape. From
            haute couture to street style, explore the diversity and creativity defining modern fashion. Join us in
            decoding the language of style and inspiring your wardrobe.
          </p>
          <Button size='large' className='rounded-[26px]'>
            shop now
          </Button>
        </div>
      </div>
    </section>
  )
}

export default UnveilingSection
