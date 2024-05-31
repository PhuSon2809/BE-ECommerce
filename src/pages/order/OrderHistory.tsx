import { useState } from 'react'
import { OrderStatus, TimeFilter } from '~/@types/enums'
import { LIST_ORDER_STATUS_OPTIONS, LIST_TIME_FILTER_OPTIONS } from '~/@types/listOptionCommon'
import { Search } from '~/components/search'
import { Header } from '~/layouts/components/header'
import { TabProductList } from '~/sections/category'
import {
  ListCardWallet,
  ListPaymentHistory,
  ListProductHistory,
  PurchaseAmountChart,
  RewardPointsChart
} from '~/sections/order'
import './styles.scss'
import useResponsive from '~/hooks/useResponsive'
import { IconButton } from '~/components/iconButton'
import { ShoppingBagIcon } from '~/components/icons'
import useDialog from '~/hooks/useDialog'
import { Dialog } from '~/components/dialog'

const OrderHistory = () => {
  const smUp = useResponsive('up', 'sm')

  const { isOpen, setIsOpen, handleOpen } = useDialog()

  const [timeFilter, setTimeFilter] = useState<string>(TimeFilter.MONTHS_12)
  const [statusSelected, setStatusSelected] = useState<string>(OrderStatus.AWAITING)

  return (
    <div className='max-w-[1440px] mx-auto bg-greyLight pb-[50px]'>
      <div className='order-history'>
        <Header />

        <div className='flex xs:flex-col sm:flex-col md:flex-row gap-5 xs:px-4 sm:px-5 xs:mt-5 sm:mt-5 md:mt-10'>
          <section className='space-y-6'>
            <div className='xs:w-full sm:w-full md:w-[367px] h-fit p-4 pb-[18px] flex xs:flex-col sm:flex-row md:flex-col xs:rounded-[15.61px] sm:rounded-2xl backdrop-blur-[40px] bg-white/[44%]'>
              <ListCardWallet />
              <ListPaymentHistory />
            </div>
            {smUp && statusSelected === OrderStatus.STORAGE && <TabProductList isCartShare />}
          </section>

          <div className='flex-1 xs:pt-5 sm:pt-[60px]'>
            <section>
              <h2 className='xs:text-[32px] sm:text-[40px] font-customSemiBold xs:leading-[33.6px] sm:leading-[42px] mb-[30px]'>
                Order History
              </h2>
              <div className='w-full flex xs:flex-col sm:flex-col md:flex-row xs:gap-3 sm:gap-5'>
                <PurchaseAmountChart />
                <RewardPointsChart />
              </div>
            </section>

            <section className='flex flex-col xs:gap-3 sm:gap-6 my-6 mb-10'>
              <div className='flex xs:flex-col sm:flex-col md:flex-row justify-between items-center xs:gap-3 sm:gap-4'>
                <div className='w-full flex'>
                  {LIST_TIME_FILTER_OPTIONS.map((item) => (
                    <button
                      key={item.value}
                      onClick={() => setTimeFilter(item.value as string)}
                      className={`xs:w-1/4 sm:w-[120px] md:w-[120px] xs:h-[34px] sm:h-[39px] md:h-11 border-0 border-l-[1px] border-b-[1px] border-solid ${timeFilter === item.value ? 'border-blueMain font-customSemiBold' : 'border-blueMain/[.12]'} flex justify-center items-center hover:scale-[1.02] transition-all duration-200 ease-in-out xs:text-[12px] sm:text-[14px] md:text-[16px]`}
                    >
                      {item.value}
                    </button>
                  ))}
                </div>
                <Search variant='outline' className='xs:w-full sm:w-full md:w-[355px]' />
              </div>

              <div className='w-full xs:h-7 sm:h-8 flex rounded'>
                {LIST_ORDER_STATUS_OPTIONS.map((item) => (
                  <div
                    key={item.value}
                    className={`w-[20%] h-full ${
                      item.value === OrderStatus.AWAITING
                        ? 'bg-blueMain rounded-tl-[4px] rounded-bl-[4px]'
                        : item.value === OrderStatus.IN_TRANSIT
                          ? 'bg-yellowMain'
                          : item.value === OrderStatus.DELIVERED
                            ? 'bg-greenLight'
                            : item.value === OrderStatus.CANCELLED
                              ? 'bg-redMain'
                              : 'bg-purpleMain rounded-tr-[4px] rounded-br-[4px]'
                    }`}
                  />
                ))}
              </div>

              <div className='w-full flex xs:gap-[8px] sm:gap-2 md:gap-4 xs:flex-wrap sm:flex-wrap md:flex-nowrap'>
                {LIST_ORDER_STATUS_OPTIONS.map((item) => {
                  return (
                    <div
                      key={item.value}
                      className='xs:w-[31.82%] sm:w-[31.82%] md:w-[168px] relative hover:scale-[1.02] transition-all duration-300 ease-linear'
                      onClick={() => setStatusSelected(item.value as string)}
                    >
                      <div
                        className={`w-full h-[47px] absolute inset-0 ${statusSelected === item.value ? 'bg-gradient-to-l from-blueMain to-greenMain' : 'bg-transparent'} rounded-[5px] z-10`}
                      />
                      <button className='w-full h-11 px-3 flex items-center justify-between gap-[6px] rounded bg-white relative z-20'>
                        <div className='flex items-center xs:gap-[6px] sm:gap-4'>
                          <div
                            className={`xs:size-[6px] sm:size-2 rounded-full ${
                              item.value === OrderStatus.AWAITING
                                ? 'bg-greenMain'
                                : item.value === OrderStatus.IN_TRANSIT
                                  ? 'bg-yellowMain'
                                  : item.value === OrderStatus.DELIVERED
                                    ? 'bg-greenLight'
                                    : item.value === OrderStatus.CANCELLED
                                      ? 'bg-redMain'
                                      : 'bg-purpleMain'
                            }`}
                          />
                          <p className='xs:text-[12px] sm:text-[15px] md:text-[18px] leading-5'>{item.label}</p>
                        </div>
                        <div className='h-[22px] px-[6px] bg-greyMain rounded-sm'>
                          <p className='xs:text-[10px] sm:text-[13px] md:text-[16px] font-customSemiBold leading-5'>
                            19
                          </p>
                        </div>
                      </button>
                    </div>
                  )
                })}
              </div>
            </section>

            <ListProductHistory statusSelected={statusSelected} />
          </div>
        </div>
      </div>

      {!smUp && (
        <>
          <IconButton
            color='white'
            className='fixed bottom-[12%] right-[4%] !bg-white hover:border-greenMain hover:border-[2px] hover:border-solid transition-all ease-in-out duration-500 hover:scale-110 z-50'
            onClick={handleOpen}
          >
            <ShoppingBagIcon />
          </IconButton>

          <Dialog open={isOpen} setOpen={setIsOpen} className='w-full bg-white/[.88] !rounded-2xl'>
            <TabProductList isCartShare />
          </Dialog>
        </>
      )}
    </div>
  )
}

export default OrderHistory
