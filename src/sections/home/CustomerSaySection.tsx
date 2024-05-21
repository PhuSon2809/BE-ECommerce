import images from '~/assets'
import { CustomerSayCard } from '~/components/customerSayCard'

function CustomerSaySection() {
  return (
    <section className='h-[723px] mt-[50px] xs:px-4 sm:px-[100px] relative'>
      <h1 className='xs:text-[32px] sm:text-[52px] font-customBold capitalize xs:leading-[40px] sm:leading-[64px]'>
        Our Customer says <br /> about us
      </h1>

      <div className=''>
        <img
          src={images.icons.quote_linear}
          alt='quote-linear'
          className='xs:size-[60px] sm:size-[96px] absolute xs:top-[68%] sm:top-[34%] xs:left-[18%] sm:left-[20%] z-50'
        />
        <div className='absolute xs:top-[20%] sm:top-[8%] xs:left-[16px] sm:left-[42%]'>
          <CustomerSayCard
            name='Ryan Donin'
            image={images.home.customer_1}
            customerId='6337339393'
            content='"Dazzling array of products, with something to cater to every need and taste!"'
            className='xs:w-[231px] sm:w-[368px] xs:pt-[38px] xs:rounded-tl-[50px] xs:rounded-tr-[25.12px] xs:rounded-[10.05px]'
          />
        </div>
        <div className='absolute xs:top-[44%] sm:top-1/3 xs:right-[16px] sm:right-[10%]'>
          <CustomerSayCard
            bgLinear
            name='Paityn Rosser'
            image={images.home.customer_2}
            customerId='6337339393'
            content='"User-friendly interface, making browsing and purchasing a breeze."'
            className='xs:w-[281px] sm:w-[493px] xs:pl-5 xs:rounded-tl-[57px] xs:rounded-tr-[22.8px] xs:rounded-[9.12px]'
          />
        </div>
        <div className='absolute xs:bottom-[3%] sm:bottom-[30%] xs:left-[16px] sm:left-[10%]'>
          <CustomerSayCard
            name='Livia Botosh'
            image={images.home.customer_3}
            customerId='6337339393'
            content='"Impeccable quality and timely delivery, ensuring customer satisfaction every time"'
            className='xs:w-[237px] sm:w-[493px] xs:pt-[25px] xs:pl-5 xs:rounded-tl-[50px] xs:rounded-tr-[22.88px] xs:rounded-[9.15px]'
          />
        </div>
        <div className='absolute xs:bottom-[-18%] sm:bottom-[-1%] xs:right-0 sm:right-[32%] xs:z-50'>
          <CustomerSayCard
            name='Jocelyn Dokidis'
            image={images.home.customer_4}
            customerId='6337339393'
            content='"Outstanding product selection and unparalleled customer support – truly a standout in online shopping!"'
            className='xs:w-[244px] sm:w-[368px] xs:h-[169px] sm:h-[270px] xs:rounded-tl-[50px] xs:rounded-tr-[23.61px] xs:rounded-[9.44px]'
          />
        </div>
      </div>
    </section>
  )
}

export default CustomerSaySection
