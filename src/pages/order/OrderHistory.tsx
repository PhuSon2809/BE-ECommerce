import { useState } from 'react'
import { OrderStatus, TimeFilter } from '~/@types/enums'
import { LIST_ORDER_STATUS_OPTIONS, LIST_TIME_FILTER_OPTIONS } from '~/@types/listOptionCommon'
import { Search } from '~/components/search'
import { Header } from '~/layouts/components/header'
import {
  ListCardWallet,
  ListPaymentHistory,
  ListProductHistory,
  PurchaseAmountChart,
  RewardPointsChart
} from '~/sections/order'
import './styles.scss'
import { TabProductList } from '~/sections/category'

const OrderHistory = () => {
  const [timeFilter, setTimeFilter] = useState<string>(TimeFilter.MONTHS_12)
  const [statusSelected, setStatusSelected] = useState<string>(OrderStatus.AWAITING)

  return (
    <div className='max-w-[1440px] mx-auto bg-greyLight pb-[50px]'>
      <div className='order-history'>
        <Header />

        <div className='flex gap-5 px-5 mt-10'>
          <section className='space-y-6'>
            <div className='h-fit p-4 pb-[18px] rounded-2xl backdrop-blur-[40px] bg-white/[44%]'>
              <ListCardWallet />
              <ListPaymentHistory />
            </div>
            {statusSelected === OrderStatus.STORAGE && <TabProductList hideFavoriteTab />}
          </section>

          <div className='flex-1 pt-[60px]'>
            <section>
              <h2 className='text-[40px] font-customSemiBold leading-[42px] mb-[30px]'>Order History</h2>
              <div className='w-full flex gap-5'>
                <PurchaseAmountChart />
                <RewardPointsChart />
              </div>
            </section>

            <section className='flex flex-col gap-6 my-6 mb-[85px]'>
              <div className='flex justify-between items-center'>
                <div className='flex'>
                  {LIST_TIME_FILTER_OPTIONS.map((item) => (
                    <button
                      key={item.value}
                      onClick={() => setTimeFilter(item.value as string)}
                      className={`w-[120px] h-11 border-0 border-l-[1px] border-b-[1px] border-solid ${timeFilter === item.value ? 'border-blueMain font-customSemiBold' : 'border-blueMain/[.12]'} flex justify-center items-center hover:scale-[1.02] transition-all duration-200 ease-in-out`}
                    >
                      {item.value}
                    </button>
                  ))}
                </div>
                <Search variant='outline' className='w-[355px]' />
              </div>

              <div className='w-full h-8 flex rounded'>
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

              <div className='w-full flex gap-4'>
                {LIST_ORDER_STATUS_OPTIONS.map((item) => {
                  return (
                    <div
                      key={item.value}
                      className='w-[168px] relative hover:scale-[1.02] transition-all duration-300 ease-linear'
                      onClick={() => setStatusSelected(item.value as string)}
                    >
                      <div
                        className={`w-full h-[47px] absolute inset-0 ${statusSelected === item.value ? 'bg-gradient-to-l from-blueMain to-greenMain' : 'bg-transparent'} rounded`}
                      />
                      <button className='w-full h-11 px-3 absolute inset-0 flex items-center justify-between rounded bg-white'>
                        <div className='flex items-center gap-4'>
                          <div
                            className={`size-2 rounded-full ${
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
                          <p className='text-[18px] leading-5'>{item.label}</p>
                        </div>
                        <div className='h-[22px] px-[6px] bg-greyMain rounded-sm'>
                          <p className='text-[16px] font-customSemiBold leading-5'>19</p>
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
    </div>
  )
}

export default OrderHistory
