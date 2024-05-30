import { useFormContext } from 'react-hook-form'

import images from '~/assets'
import { Button } from '~/components/button'
import { InputField, RadioGroupField, RadioWalletGroupField } from '~/components/form'
import { WalletIcon } from '~/components/icons'
import useDialog from '~/hooks/useDialog'
import { SelectCreateWalletDialog } from '~/sections/wallet'

const ListWallet = [
  {
    value: 1,
    cardId: 'fc01...db87',
    nameCard: 'Christopher Victory',
    balance: '25,879'
  },
  {
    value: 2,
    cardId: 'fc01...db87',
    nameCard: 'Christopher Victory',
    balance: '25,879'
  },
  {
    value: 3,
    cardId: 'fc01...db87',
    nameCard: 'Christopher Victory',
    balance: '25,879'
  }
]

function PaymentMethodForm() {
  const { isOpen, setIsOpen, handleOpen } = useDialog()

  const { watch } = useFormContext()

  const paymentMethod = watch('paymentMethod')

  const isAuthenticated = true

  return (
    <>
      <div className='payment-method mt-[50px] '>
        <h6 className='text-[32px] font-customBold leading-none mb-[30px]'>Payment Method</h6>

        <RadioGroupField
          name='paymentMethod'
          options={[
            {
              value: 'credit-card',
              label: (
                <div className='flex items-center gap-3'>
                  <img src={images.icons.credit} alt='icon-credit' className='xs:size-[22px] sm:size-12' />
                  <p className='xs:text-[12px] sm:text-[18px] md:text-[24px] font-customSemiBold le'>Credit Card</p>
                </div>
              )
            },
            {
              value: 'wallet-address',
              label: (
                <div className='flex items-center gap-3'>
                  <div className='xs:size-[22px] sm:size-12 bg-gradient-to-r from-greenMain to-blueMain flex items-center justify-center xs:rounded-[5.5px] sm:rounded-xl'>
                    <WalletIcon color='#ffffff' className='xs:size-[11px] sm:size-6' />
                  </div>
                  <p className='xs:text-[12px] sm:text-[18px] md:text-[24px] font-customSemiBold le'>Wallet Address</p>
                </div>
              )
            }
          ]}
        />
        <div className='mt-5 space-y-2'>
          {paymentMethod === 'credit-card' ? (
            <>
              <InputField
                fullWidth
                name='cardNumber'
                label='Card Number'
                placeholder='Enter your card number'
                rightIcon={
                  <div className='flex items-center gap-3'>
                    <img src={images.icons.visa} alt='icon-visa-card' />
                    <img src={images.icons.card} alt='icon-back-card' />
                  </div>
                }
              />
              <div className='w-full flex items-start xs:gap-2 sm:gap-5'>
                <InputField fullWidth name='expirationDate' label='Expiration Date' placeholder='mm/yy' />
                <InputField fullWidth name='cvv' label='CVV' placeholder='XXX' />
              </div>
              <InputField fullWidth name='nameOnCard' label='Name On Card' placeholder='Enter your name' />
            </>
          ) : (
            <>
              {isAuthenticated ? (
                <div className='w-full mt-10'>
                  {ListWallet.length > 0 ? (
                    <div className='flex flex-col items-center xs:gap-1 sm:gap-5'>
                      <RadioWalletGroupField name='walletId' options={ListWallet} />
                      <p className='xs:text-[16px] sm:text-[18px] font-customMedium'>
                        Select a wallet to make the payment
                      </p>
                    </div>
                  ) : (
                    <div className='w-fit relative cursor-pointer mx-auto' onClick={handleOpen}>
                      <img
                        src={images.checkout.bg_add_wallet}
                        alt='bg-add-wallet'
                        className='xs:size-[60px] sm:size-[104px]'
                      />
                      <p className='text-[22px] font-customMedium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        + Add a new wallet
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className='w-full p-5 flex flex-col items-center xs:gap-5 sm:gap-[30px]'>
                  <img
                    src={images.checkout.empty_wallet}
                    alt='empty-wallet'
                    className='xs:size-[60px] sm:size-[104px]'
                  />
                  <p className='xs:text-[18px] sm:text-[20px] font-customMedium text-center'>
                    To proceed with the payment using your wallet, please log in!
                  </p>

                  <Button variant='outline-linear' className='xs:!w-[173px] xs:!h-12 sm:w-[200px] sm:h-12'>
                    LOG IN
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <SelectCreateWalletDialog open={isOpen} setOpen={setIsOpen} />
    </>
  )
}

export default PaymentMethodForm
