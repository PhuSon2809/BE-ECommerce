import images from '~/assets'
import { AddWalletIcon, DeleteIcon } from '~/components/icons'

const listCards = [
  { id: 1, type: 'visa', cardName: 'Visa Dulce Kenter', cardNumber: '...9889' },
  { id: 2, type: 'card', cardName: 'masterCard Dulce Kenter', cardNumber: '...1289' }
]

const listWallets = [
  { id: 1, cardName: 'Dulce Kenter', cardNumber: 'gh67...7686' },
  { id: 2, cardName: 'Christopher Victory', cardNumber: 'g7h7...76h6' }
]

function PaymentMethodTab() {
  return (
    <div className='flex flex-col items-center gap-10'>
      <div className='flex xs:flex-col sm:flex-row items-start gap-5'>
        <div className='min-w-[200px]'>
          <p className='text-[20px] font-customMedium leading-[30px]'>Credit card</p>
        </div>

        <div className='flex-1 space-y-5'>
          {listCards.map((card) => (
            <div
              key={card.id}
              className='xs:w-full lg:w-[926px] h-[72px] py-4 px-8 bg-greyLight flex items-center justify-between'
            >
              <div className='flex items-center gap-5'>
                {card.type === 'visa' ? (
                  <img src={images.icons.visa_outline} alt='visa-icon' />
                ) : (
                  <img src={images.icons.card} alt='card-icon' />
                )}

                <p className='text-[18px] font-customMedium leading-[18.9px] capitalize'>
                  {card.cardName}
                  <span>{card.cardNumber}</span>
                </p>
              </div>

              <div className='flex items-center gap-5'>
                <p className='text-blackMain/[.64]'>Exp: 07/35</p>
                <div>
                  <DeleteIcon color='#0D0D0DA3' className={`cursor-pointer size-6`} />
                </div>
              </div>
            </div>
          ))}

          <div className='xs:w-full lg:w-[926px] h-[72px] py-4 px-8 flex items-center gap-5 border-[1px] border-dashed border-blackMain/[.22] cursor-pointer'>
            <img src={images.icons.add_card} alt='add-card-icon' />
            <p className='text-[18px] font-customMedium leading-[18.9px]'>Add a new card</p>
          </div>
        </div>
      </div>

      <div className='flex items-start gap-5'>
        <div className='min-w-[200px]'>
          <p className='text-[20px] font-customMedium leading-[30px]'>Metanode Wallet</p>
        </div>

        <div className='flex-1 space-y-5'>
          {listWallets.map((wallet) => (
            <div
              key={wallet.id}
              className='xs:w-full lg:w-[926px] h-[72px] py-4 px-8 bg-greyLight flex items-center justify-between'
            >
              <div className='flex items-center gap-5'>
                <img src={images.setting.wallet_image} alt='wallet_image' />

                <p className='text-[18px] font-customMedium leading-[18.9px] capitalize'>
                  {wallet.cardName}
                  <span>{wallet.cardNumber}</span>
                </p>
              </div>

              <div className='flex items-center gap-5'>
                <p className='text-blackMain/[.64]'>Balance: $****</p>
                <div>
                  <DeleteIcon color='#0D0D0DA3' className={`cursor-pointer size-6`} />
                </div>
              </div>
            </div>
          ))}

          <div className='xs:w-full lg:w-[926px] h-[72px] py-4 px-8 flex items-center gap-5 border-[1px] border-dashed border-blackMain/[.22] cursor-pointer'>
            <AddWalletIcon />
            <p className='text-[18px] font-customMedium leading-[18.9px]'>Add a new wallet</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethodTab
