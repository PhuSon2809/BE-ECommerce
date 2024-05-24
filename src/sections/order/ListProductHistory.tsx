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
            <AwaitingIcon color='white' />
          ) : statusSelected === OrderStatus.IN_TRANSIT ? (
            <InTragicIcon color='white' />
          ) : statusSelected === OrderStatus.DELIVERED ? (
            <DeliveredIcon color='white' />
          ) : statusSelected === OrderStatus.CANCELLED ? (
            <CancelledIcon color='white' />
          ) : (
            <StorageIcon color='white' />
          )}
        </div>
        <p className='text-[20px] font-customSemiBold leading-[21px]'>
          #63674798333 - <span className='font-customRegular'>14/06/2024</span>
        </p>
      </div>
      <div className='p-5 pt-10 border-[2px] border-solid border-blueMain/[.12] rounded-xl'>
        <div className='flex flex-col gap-4 mb-10'>
          {listProducts.map((product) => (
            <ProductOrderHistory
              key={product.id}
              product={product}
              showEditQuantity={statusSelected === OrderStatus.STORAGE}
            />
          ))}
        </div>
        <div className='flex items-end justify-between'>
          <div className='flex items-center gap-[14px]'>
            {statusSelected === OrderStatus.DELIVERED && (
              <Button
                size='small'
                variant='outline-grey'
                className='w-[165px] h-10 rounded-[24px]'
                classNameText='text-[16px] !uppercase'
              >
                Review
              </Button>
            )}
            {statusSelected === OrderStatus.IN_TRANSIT && (
              <Button
                size='small'
                variant='outline-grey'
                className='w-[165px] h-10 rounded-[24px]'
                classNameText='text-[16px] !uppercase'
              >
                Track order
              </Button>
            )}
            {statusSelected === OrderStatus.STORAGE && (
              <Button size='small' className='w-[165px] h-10 rounded-[24px]' classNameText='text-[16px] !uppercase'>
                Add to cart
              </Button>
            )}
            {(statusSelected === OrderStatus.AWAITING ||
              statusSelected === OrderStatus.IN_TRANSIT ||
              statusSelected === OrderStatus.DELIVERED) && (
              <Button
                size='small'
                variant={statusSelected === OrderStatus.DELIVERED ? 'outline-grey' : 'container'}
                className='w-[165px] h-10 rounded-[24px]'
                classNameText='text-[16px] !uppercase'
              >
                Contact
              </Button>
            )}
            {statusSelected === OrderStatus.DELIVERED && (
              <Button size='small' className='w-[165px] h-10 rounded-[24px]' classNameText='text-[16px] !uppercase'>
                Buy again
              </Button>
            )}
          </div>
          <p className='text-[20px] leading-[21px]'>
            Total:{' '}
            <span className='text-[40px] font-customSemiBold leading-[42px]'>
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
