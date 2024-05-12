import images from '~/assets'
import { CustomerSayCard } from '~/components/customerSayCard'

function CustomerSaySection() {
  return (
    <section className='h-[723px] mt-[50px] px-[100px] relative'>
      <h1 className='text-[52px] font-customBold capitalize leading-[64px]'>
        Our Customer says <br /> about us
      </h1>

      <div className=''>
        <img src={images.icons.quote_linear} alt='quote-linear' className='absolute top-[34%] left-[20%] z-50' />
        <div className='absolute top-[8%] left-[42%]'>
          <CustomerSayCard
            name='Ryan Donin'
            image={images.home.customer_1}
            customerId='6337339393'
            content='"Dazzling array of products, with something to cater to every need and taste!"'
            className='w-[368px]'
          />
        </div>
        <div className='absolute top-1/3 right-[10%]'>
          <CustomerSayCard
            bgLinear
            name='Paityn Rosser'
            image={images.home.customer_2}
            customerId='6337339393'
            content='"User-friendly interface, making browsing and purchasing a breeze."'
            className='w-[493px]'
          />
        </div>
        <div className='absolute bottom-[30%] left-[10%]'>
          <CustomerSayCard
            name='Livia Botosh'
            image={images.home.customer_3}
            customerId='6337339393'
            content='"Impeccable quality and timely delivery, ensuring customer satisfaction every time"'
            className='w-[493px]'
          />
        </div>
        <div className='absolute bottom-[-2%] right-[32%]'>
          <CustomerSayCard
            name='Jocelyn Dokidis'
            image={images.home.customer_4}
            customerId='6337339393'
            content='"Outstanding product selection and unparalleled customer support – truly a standout in online shopping!"'
            className='w-[368px] h-[270px]'
          />
        </div>
      </div>
    </section>
  )
}

export default CustomerSaySection
