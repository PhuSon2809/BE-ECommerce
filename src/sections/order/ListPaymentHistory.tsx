import { Filter2Icon, VisaIcon, WalletCardIcon } from '~/components/icons'

const listPaymentHistories = [
  {
    id: 1,
    cardName: 'Dulce Kenter',
    cardNumber: '845672259889',
    balances: 249,
    cardType: 'visa'
  },
  {
    id: 2,
    cardName: 'Dulce Kenter',
    cardNumber: '845672259889',
    balances: 249,
    cardType: 'visa'
  },
  {
    id: 3,
    cardName: 'Christopher Victory',
    cardNumber: 'fg75sfsfsf8566asjh89',
    balances: 249,
    cardType: 'wallet'
  },
  {
    id: 4,
    cardName: 'Dulce Kenter',
    cardNumber: '845672259889',
    balances: 249,
    cardType: 'visa'
  }
]

function ListPaymentHistory() {
  return (
    <div className='mt-5 space-y-4'>
      <div className='flex justify-between items-center'>
        <div className='text-[20px] font-customSemiBold leading-[21px]'>Payment History</div>
        <Filter2Icon />
      </div>
      <div className='flex flex-col gap-3'>
        {listPaymentHistories.map((paymentHistory) => (
          <div key={paymentHistory.id} className='flex items-center gap-4'>
            <div className='min-w-[56px] h-10 flex items-center justify-center rounded bg-blueMain/[.12]'>
              {paymentHistory.cardType === 'visa' ? (
                <VisaIcon color='#2C7DFF' className='w-[34px]' />
              ) : (
                <WalletCardIcon color='#2C7DFF' className='w-7px' />
              )}
            </div>
            <div className='flex flex-col gap-1'>
              <p className='text-blackMain/[.88] leading-[16.8px]'>
                {paymentHistory.cardName}{' '}
                <span className=''>
                  {paymentHistory.cardType === 'visa'
                    ? `...${paymentHistory.cardNumber.slice(-4)}`
                    : `${paymentHistory.cardNumber.slice(0, 4)}...${paymentHistory.cardNumber.slice(-4)}`}
                </span>
              </p>
              <p className='text-[18px] font-customSemiBold leading-[18.9px]'>${paymentHistory.balances.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <p className='font-customMedium leading-[16px] text-right cursor-pointer'>View more</p>
      </div>
    </div>
  )
}

export default ListPaymentHistory
