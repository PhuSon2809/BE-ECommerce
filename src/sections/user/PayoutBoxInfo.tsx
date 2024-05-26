import { listProducts } from '~/assets/mocks/product'
import { Button } from '~/components/button'
import { CircleIcon } from '~/components/icons'
import { ProductOrderHistory } from '~/components/productOrderHistory'

function PayoutBoxInfo() {
  return (
    <div className='bg-white border-[2px] border-solid border-blackMain/[.07] rounded-[20px] shadow-card'>
      <div className='h-[72px] px-5 flex items-center justify-between bg-greyLight rounded-tl-[20px] rounded-tr-[20px] border-0 border-b-[2px] border-blackMain/[.07]  border-solid'>
        <div className='flex items-center gap-2'>
          <p className='text-[20px] text-blackMain/[.64] leading-[21px]'>
            ID Customer: <span className='text-blackMain font-customSemiBold'>758855775</span>
          </p>
          <CircleIcon />
          <p className='text-[20px] text-blackMain/[.64] leading-[21px]'>
            Dealer: <span className='text-blackMain font-customSemiBold'>Marchy</span>
          </p>
        </div>
        <p className='text-[20px] font-customSemiBold text-transparent leading-[21px] bg-gradient-to-tr from-greenMain to-blueMain bg-clip-text'>
          12/05/2024, 11:57:06
        </p>
      </div>

      <div className='p-4 space-y-4'>
        <div className='flex flex-col gap-4'>
          {listProducts.map((product) => (
            <ProductOrderHistory key={product.id} product={product} />
          ))}
        </div>
        <div className='flex items-end justify-between'>
          <div className='flex flex-col gap-2'>
            <p className='text-blackMain/[.64] leading-[16.8px]'>Order number</p>
            <p className='text-[18px] font-customSemiBold leading-[18.9px]'>#747hhdGhh639</p>
          </div>
          <div className='flex flex-col items-end gap-5'>
            <p className='text-[20px] text-blackMain/[.64] leading-[21px]'>
              Total:{' '}
              <span className='text-[32px] text-blackMain font-customSemiBold leading-[33.6px]'>
                ${(300).toFixed(2)}
              </span>
            </p>
            <Button
              size='small'
              variant='linear'
              className='w-[197px] h-[44px] !bg-gradient-to-r'
              classNameText='text-[16px] text-white !uppercase'
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
