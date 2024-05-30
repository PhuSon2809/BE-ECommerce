import images from '~/assets'
import { CardPaymentSettingItem } from '~/components/cardPaymentSettingItem'
import { AddWalletIcon } from '~/components/icons'

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
      <div className='flex xs:flex-col sm:flex-row items-start xs:gap-4 sm:gap-5'>
        <div className='xs:min-w-fit sm:min-w-[200px]'>
          <p className='xs:text-[18px] sm:text-[20px] font-customMedium xs:leading-[27px] sm:leading-[30px]'>
            Credit card
          </p>
        </div>

        <div className='flex-1 space-y-5'>
          {listCards.map((card) => (
            <CardPaymentSettingItem key={card.id} card={card} />
          ))}

          <div className='xs:w-full lg:w-[926px] h-[72px] py-4 xs:px-4 sm:px-8 flex items-center xs:gap-4 sm:gap-5 border-[1px] border-dashed border-blackMain/[.22] cursor-pointer'>
            <img src={images.icons.add_card} alt='add-card-icon' className='xs:size-[37px] sm:size-10' />
            <p className='xs:text-[15.06px] sm:text-[18px] font-customMedium xs:leading-[15.81px] sm:leading-[18.9px]'>
              Add a new card
            </p>
          </div>
        </div>
      </div>

      <div className='flex xs:flex-col sm:flex-row items-start xs:gap-4 sm:gap-5'>
        <div className='xs:min-w-fit sm:min-w-[200px]'>
          <p className='xs:text-[18px] sm:text-[20px] font-customMedium xs:leading-[27px] sm:leading-[30px]'>
            Metanode Wallet
          </p>
        </div>

        <div className='flex-1 space-y-5'>
          {listWallets.map((wallet) => (
            <CardPaymentSettingItem key={wallet.id} card={wallet} isWallet />
          ))}

          <div className='xs:w-full lg:w-[926px] h-[72px] py-4 xs:px-4 sm:px-8 flex items-center xs:gap-4 sm:gap-5 border-[1px] border-dashed border-blackMain/[.22] cursor-pointer'>
            <AddWalletIcon className='xs:size-[37px] sm:size-10' />
            <p className='xs:text-[15.06px] sm:text-[18px] font-customMedium xs:leading-[15.81px] sm:leading-[18.9px]'>
              Add a new wallet
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethodTab
