import images from '~/assets'
import { VisaIcon, WalletCardIcon } from '~/components/icons'

const listCardWallet = [
  {
    id: 1,
    cardName: 'Christopher Victory',
    cardNumber: '845672259889',
    balances: '5,879',
    cardType: 'wallet'
  },
  {
    id: 2,
    cardName: 'Dulce Kenter',
    cardNumber: '845672259889',
    balances: '5,879',
    cardType: 'visa'
  }
]

function ListCardWallet() {
  return (
    <div>
      <div className='relative'>
        {listCardWallet.map((card, index) => (
          <div
            key={card.id}
            className={`w-full`}
            style={index > 0 ? { position: 'absolute', top: `${48 * index}px`, zIndex: index * 10 } : {}}
          >
            <div className='w-full xs:h-[175px] sm:h-[180px] rounded-2xl relative'>
              <div
                style={{ position: 'relative', zIndex: index === 0 ? 10 : (index + 1) * 10 }}
                className={`h-full xs:p-4 sm:p-5 flex flex-col justify-between text-white`}
              >
                <div className='space-y-1'>
                  <div className='text-[16px] uppercase font-customSemiBold'>{card.cardName}</div>
                  <div className='text-[14px] text-white/[68%] mt-[16px]'>****{card.cardNumber.slice(-4)}</div>
                </div>
                <div className='flex items-end justify-between'>
                  <div className='text-[28px] font-customSemiBold'>${card.balances}</div>
                  {card.cardType === 'visa' ? <VisaIcon color='white' /> : <WalletCardIcon color='white' />}
                </div>
              </div>
              {card.cardType === 'wallet' ? (
                <img src={images.history.visa_card_liner} alt='wallet' className={`absolute inset-0`} />
              ) : (
                <img src={images.image.cart_wallet_gradient} alt='visacard' className={`absolute inset-0`} />
              )}
            </div>
          </div>
        ))}
      </div>

      <button
        style={{ marginTop: `${listCardWallet.length > 1 ? (listCardWallet.length + 1) * 20 : 20}px` }}
        className={`w-full h-8 border border-dashed border-blackMain/[.12] font-customMedium rounded xs:text-[15px] sm:text-[16px]`}
      >
        + Add a new card/wallet
      </button>
    </div>
  )
}

export default ListCardWallet
