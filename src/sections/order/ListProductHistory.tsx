import { OrderStatus } from '~/@types/enums'
import { Product } from '~/@types/models'
import { listProducts } from '~/assets/mocks/product'
import { Button } from '~/components/button'
import { AwaitingIcon, CancelledIcon, DeliveredIcon, InTragicIcon, StorageIcon } from '~/components/icons'
import { ProductOrderHistory } from '~/components/productOrderHistory'

type ListProductHistoryProps = {
  statusSelected: string
}

function ListProductHistory({ statusSelected }: ListProductHistoryProps) {
  return (
    <section className='relative'>
      <div className='pr-[10px] flex items-center gap-2 bg-greyLight absolute top-[-1.5%] left-5'>
        <div className='size-10 rounded-full flex items-center justify-center bg-gradient-to-br from-greenMain to-blueMain'>
          {statusSelected === OrderStatus.AWAITING ? (
            <AwaitingIcon color='white' className='size-5' />
          ) : statusSelected === OrderStatus.IN_TRANSIT ? (
            <InTragicIcon color='white' className='size-5' />
          ) : statusSelected === OrderStatus.DELIVERED ? (
            <DeliveredIcon color='white' className='size-5' />
          ) : statusSelected === OrderStatus.CANCELLED ? (
            <CancelledIcon color='white' />
          ) : (
            <StorageIcon color='white' className='size-5' />
          )}
        </div>
        <p className='xs:text-[16px] sm:text-[20px] font-customSemiBold xs:leading-[16.8px] sm:leading-[21px]'>
          #63674798333 - <span className='font-customRegular'>14/06/2024</span>
        </p>
      </div>
      <div className='xs:p-4 sm:p-5 xs:pt-10 sm:pt-10 border-[2px] border-solid border-blueMain/[.12] rounded-xl'>
        <div className='flex flex-col xs:gap-[14px] sm:gap-4 mb-10'>
          {listProducts.map((product) => (
            <ProductOrderHistory
              key={product.id}
              product={product}
              showEditQuantity={statusSelected === OrderStatus.STORAGE}
            />
          ))}
        </div>
        <div className='flex xs:flex-col sm:flex-col md:flex-row items-end justify-between gap-4'>
          <div className='xs:w-full sm:w-full md:w-fit flex xs:justify-end sm:justify-end md:items-center xs:gap-3 sm:gap-[14px] xs:order-2 sm:order-2 md:order-1 lg:order-1'>
            {statusSelected === OrderStatus.DELIVERED && (
              <Button
                size='small'
                variant='outline-grey'
                className='xs:w-[105px] sm:w-[105px] md:w-[165px] h-10 rounded-[24px]'
                classNameText='xs:text-[14px] sm:text-[16px] !uppercase'
              >
                Review
              </Button>
            )}
            {statusSelected === OrderStatus.IN_TRANSIT && (
              <Button
                size='small'
                variant='outline-grey'
                className='xs:w-[135px] sm:w-[135px] md:w-[165px] h-10 rounded-[24px]'
                classNameText='xs:text-[14px] sm:text-[16px] !uppercase'
              >
                Track order
              </Button>
            )}
            {statusSelected === OrderStatus.STORAGE && (
              <Button
                fullWidth
                size='small'
                className='xs:w-full sm:w-full md:w-[165px] h-10 rounded-[24px]'
                classNameText='xs:text-[14px] sm:text-[16px] !uppercase'
              >
                Add to cart
              </Button>
            )}
            {(statusSelected === OrderStatus.AWAITING ||
              statusSelected === OrderStatus.IN_TRANSIT ||
              statusSelected === OrderStatus.DELIVERED) && (
              <Button
                size='small'
                variant={statusSelected === OrderStatus.DELIVERED ? 'outline-grey' : 'container'}
                className='xs:w-[105px] sm:w-[105px] md:w-[165px] h-10 rounded-[24px]'
                classNameText='xs:text-[14px] sm:text-[16px] !uppercase'
              >
                Contact
              </Button>
            )}
            {statusSelected === OrderStatus.DELIVERED && (
              <Button
                size='small'
                className='xs:w-[105px] sm:w-[105px] md:w-[165px] h-10 rounded-[24px]'
                classNameText='xs:text-[14px] sm:text-[16px] !uppercase'
              >
                Buy again
              </Button>
            )}
          </div>
          <p className='xs:text-[16px] sm:text-[20px] xs:leading-[16.8px] sm:leading-[21px] xs:order-1 sm:order-1 md:order-2 lg:order-2'>
            Total:{' '}
            <span className='xs:text-[30px] sm:text-[40px] font-customSemiBold xs:leading-[31.5px] sm:leading-[42px]'>
              $
              {listProducts.length > 0
                ? listProducts
                    .reduce((total: number, currentProduct: Product) => {
                      return total + 5 * currentProduct.vipPrice
                    }, 0)
                    .toFixed(2)
                : (0).toFixed(2)}
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default ListProductHistory
