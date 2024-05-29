import { Product } from '~/@types/models'
import { ArrowTopRightIcon } from '~/components/icons'

type ProductTopSearchProps = { product: Product }

function ProductTopSearch({ product }: ProductTopSearchProps) {
  return (
    <div className='xs:w-[126px] xs:h-[150px] sm:w-[226px] sm:h-[270px] md:w-[226px] md:h-[270px] lg:w-[360px] lg:h-[424px] xs:rounded-2xl sm:rounded-3xl md:rounded-[28px] lg:rounded-[32px] relative'>
      <img
        src={product.image}
        alt={product.title}
        className='size-full object-cover object-center xs:rounded-2xl sm:rounded-3xl md:rounded-[28px] lg:rounded-[32px'
      />
      <div className='size-full xs:p-2 sm:p-3 md:p-4 flex flex-col items-end justify-between absolute inset-0'>
        <div className='pr-1 pt-1 cursor-pointer'>
          <ArrowTopRightIcon color='white' className='xs:size-[6px] sm:size-[10px] md:size-[14px] lg:size-[16px]' />
        </div>
        <div className='w-full xs:p-2 sm:p-3 md:p-4 flex items-center justify-between bg-white/[.75] backdrop-blur-[28.31px] shadow-15xl xs:rounded-[5.66px] sm:rounded-[8px] md:rounded-[12px] lg:rounded-2xl'>
          <p className='xs:text-[7.08px] sm:text-[12px] md:text-[16px] lg:text-[20px] font-customMedium xs:leading-[7.43px] lg:leading-[21px]'>
            {product.title}
          </p>
          <div className='h-full flex flex-col xs:gap-1 md:gap-2'>
            <p className='xs:text-[8.49px] sm:text-[14px] md:text-[18px] lg:text-[24px] font-customSemiBold xs:leading-[8.92px] lg:leading-[25.2px]'>
              10,040+
            </p>
            <div className='flex xs:-space-x-[3px] sm:-space-x-[5px] lg:-space-x-[10px]'>
              {Array.from({ length: 5 }).map((_, index: number) => (
                <img
                  key={index}
                  className='inline-block xs:size-[8.5px] sm:size-[16px] lg:size-6 rounded-full border-[1px] border-white border-solid ring-white shadow-avatar'
                  src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
                  alt='Image Description'
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductTopSearch
