import { listProducts } from '~/assets/mocks/product'
import { Button } from '~/components/button'
import { CircleIcon } from '~/components/icons'
import { ProductOrderHistory } from '~/components/productOrderHistory'

function PayoutBoxInfo() {
  return (
    <div className='bg-white border-[2px] border-solid border-blackMain/[.07] rounded-[20px] shadow-card'>
      <div className='xs:h-[77px] sm:h-[72px] px-5 flex xs:flex-col sm:flex-row xs:items-start sm:items-center xs:justify-center sm:justify-between gap-2 bg-greyLight rounded-tl-[20px] rounded-tr-[20px] border-0 border-b-[2px] border-blackMain/[.07]  border-solid'>
        <div className='flex items-center gap-2'>
          <p className='xs:text-[16px] sm:text-[18px] md:text-[20px] text-blackMain/[.64] xs:leading-[16.8px] sm:leading-[18.9px] md:leading-[21px] text-nowrap'>
            ID Customer: <span className='text-blackMain font-customSemiBold'>758855775</span>
          </p>
          <CircleIcon className='xs:size-[5px] sm:size-[6px]' />
          <p className='xs:text-[16px] sm:text-[18px] md:text-[20px] text-blackMain/[.64] xs:leading-[16.8px] sm:leading-[18.9px] md:leading-[21px] text-nowrap'>
            Dealer: <span className='text-blackMain font-customSemiBold'>Marchy</span>
          </p>
        </div>
        <p className='xs:text-[16px] sm:text-[18px] md:text-[20px] font-customSemiBold text-transparent xs:leading-[16.8px] sm:leading-[18.9px] md:leading-[21px] bg-gradient-to-tr from-greenMain to-blueMain bg-clip-text'>
          12/05/2024, 11:57:06
        </p>
      </div>

      <div className='xs:p-3 xs:py-6 sm:p-4 sm:py-4 space-y-4'>
        <div className='flex flex-col gap-4'>
          {listProducts.map((product) => (
            <ProductOrderHistory key={product.id} product={product} />
          ))}
        </div>
        <div className='flex xs:items-start sm:items-end justify-between'>
          <div className='flex flex-col gap-2'>
            <p className='xs:text-[14px] sm:text-[16px] text-blackMain/[.64] xs:leading-[14.7px] sm:leading-[16.8px]'>
              Order number
            </p>
            <p className='xs:text-[16px] sm:text-[18px] font-customSemiBold xs:leading-[16.8px] sm:leading-[18.9px]'>
              #747hhdGhh639
            </p>
          </div>
          <div className='flex flex-col items-end gap-5 xs:mt-4'>
            <p className='xs:text-[18px] sm:text-[20px] text-blackMain/[.64] xs:leading-[18.9px] sm:leading-[21px]'>
              Total:{' '}
              <span className='xs:text-[24px] sm:text-[32px] text-blackMain font-customSemiBold xs:leading-[25.2px] sm:leading-[33.6px]'>
                ${(300).toFixed(2)}
              </span>
            </p>
            <Button
              size='small'
              variant='linear'
              className='xs:w-[120px] xs:h-[40px] sm:w-[160px] sm:h-[42px] md:w-[197px] md:h-[44px] !bg-gradient-to-r'
              classNameText='xs:text-[14px] sm:text-[16px] text-white !uppercase'
            >
              chat now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PayoutBoxInfo
