import { Product } from '~/@types/models'
import { ArrowTopRightIcon } from '~/components/icons'

type ProductTopSearchProps = { product: Product }

function ProductTopSearch({ product }: ProductTopSearchProps) {
  return (
    <div className='w-[360px] h-[424px] rounded-[32px] relative'>
      <img src={product.image} alt={product.title} className='size-full object-cover object-center rounded-[32px]' />
      <div className='size-full p-4 flex flex-col items-end justify-between absolute inset-0'>
        <div className='pr-1 pt-1 cursor-pointer'>
          <ArrowTopRightIcon color='white' />
        </div>
        <div className='w-full p-4 flex items-center justify-between bg-white/[.75] backdrop-blur-[28.31px] shadow-15xl rounded-2xl'>
          <p className='text-[20px] font-customMedium leading-[21px]'>{product.title}</p>
          <div className='h-full flex flex-col gap-2'>
            <p className='text-[24px] font-customSemiBold leading-[25.2px]'>10,040+</p>
            <div className='flex xs:-space-x-[10px] sm:-space-x-[10px]'>
              {Array.from({ length: 5 }).map((_, index: number) => (
                <img
                  key={index}
                  className='inline-block xs:size-5 sm:size-6 rounded-full border-[1px] border-white border-solid ring-white shadow-avatar'
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
