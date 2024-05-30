import images from '~/assets'
import { DeleteIcon } from '../icons'

type CardPaymentSettingItemProps = {
  card: { id: number; cardName: string; cardNumber: string; type?: string }
  isWallet?: boolean
}

function CardPaymentSettingItem({ card, isWallet = false }: CardPaymentSettingItemProps) {
  return (
    <div
      key={card.id}
      className='xs:w-full lg:w-[926px] h-[72px] py-4 xs:px-4 sm:px-8 bg-greyLight flex items-center justify-between'
    >
      <div className='w-full flex xs:items-start sm:items-center xs:gap-4 sm:gap-5'>
        {isWallet ? (
          <img src={images.setting.wallet_image} alt='wallet_image' />
        ) : card.type === 'visa' ? (
          <img src={images.icons.visa_outline} alt='visa-icon' />
        ) : (
          <img src={images.icons.card} alt='card-icon' />
        )}

        <div className='w-full flex xs:items-start sm:items-center xs:justify-between xs:gap-4 sm:gap-5'>
          <div className='w-full flex flex-1 xs:flex-col sm:flex-row xs:items-start sm:items-center sm:justify-between gap-1'>
            <p className='xs:text-[15.06px] sm:text-[18px] font-customMedium xs:leading-[15.81px] sm:leading-[18.9px] capitalize'>
              {card.cardName}
              <span>{card.cardNumber}</span>
            </p>
            <p className='xs:text-[15.06px] sm:text-[16px] text-blackMain/[.64]'>Exp: 07/35</p>
          </div>
          <div>
            <DeleteIcon color='#0D0D0DA3' className={`cursor-pointer xs:size-[18.83px] sm:size-6`} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPaymentSettingItem
