import { Dispatch, SetStateAction } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Link, createSearchParams, useNavigate } from 'react-router-dom'

import { QueryConfig } from '~/@types/common'
import { PaymentForm, ShippingInfoForm } from '~/@types/model/order'
import images from '~/assets'
import { Button } from '~/components/button'
import { InputField, RadioGroupField, SelectField, TextareaField } from '~/components/form'
import { WalletIcon } from '~/components/icons'
import { PATH_PRIVATE_APP, PATH_PUBLIC_APP } from '~/constants/paths'
import useQueryConfig from '~/hooks/useQueryConfig'

const people = [
  {
    value: 1,
    label: 'Wade Cooper'
  },
  {
    value: 2,
    label: 'Arlene Mccoy'
  },
  {
    value: 3,
    label: 'Devon Webb'
  },
  {
    value: 4,
    label: 'Tom Cook'
  },
  {
    value: 5,
    label: 'Tanya Fox'
  },
  {
    value: 6,
    label: 'Hellen Schmvaluet'
  },
  {
    value: 7,
    label: 'Caroline Schultz'
  },
  {
    value: 8,
    label: 'Mason Heaney'
  },
  {
    value: 9,
    label: 'Claudie Smitham'
  },
  {
    value: 10,
    label: 'Emil Schaefer'
  }
]

type CheckoutFormProps = {
  step: number
  setStep: Dispatch<SetStateAction<1 | 2>>
}

function CheckoutForm({ step, setStep }: CheckoutFormProps) {
  const navigate = useNavigate()

  const queryConfig: QueryConfig = useQueryConfig()

  const paymentForm = useForm<PaymentForm>({})
  const shippingInfoForm = useForm<ShippingInfoForm>({})

  const { handleSubmit } = shippingInfoForm
  const { handleSubmit: handleSubmitOrder } = paymentForm

  const handleSubmitShippingInfo = (values: ShippingInfoForm) => {
    console.log(values)
    setStep(2)
  }

  const handleSubmitCompleteOrder = (values: PaymentForm) => {
    console.log(values)
    if (queryConfig.itemCheckoutIds) {
      navigate({
        pathname: PATH_PRIVATE_APP.checkout.complete,
        search: createSearchParams({
          itemCheckoutIds: queryConfig?.itemCheckoutIds
        }).toString()
      })
    }
  }

  return (
    <div className='h-full flex flex-col gap-20'>
      {step === 1 ? (
        <FormProvider {...shippingInfoForm}>
          <div>
            <div className='w-full flex items-center gap-5'>
              <InputField fullWidth name='firstName' label='First Name' placeholder='Enter your first name' />
              <InputField fullWidth name='lastName' label='Last Name' placeholder='Enter your last name' />
            </div>
            <div className='w-full flex items-center gap-5'>
              <InputField fullWidth name='email' label='Email' placeholder='example@gmail.com' />
              <SelectField
                fullWidth
                options={people}
                label='Country'
                name='countryId'
                placeholder='Select your country'
              />
            </div>
            <div className='w-full flex items-center gap-5'>
              <SelectField fullWidth options={people} name='city' label='City' />
              <SelectField fullWidth options={people} name='province' label='State/Province' />
            </div>
            <div className='w-full flex items-center gap-5'>
              <InputField fullWidth name='postalCode' label='Postal code' placeholder='Enter postal code' />
              <InputField fullWidth name='phoneNumber' label='Phone Number' placeholder='Enter your phone number' />
            </div>
            <TextareaField fullWidth name='addressDetail' label='Address detail' placeholder='Enter your address' />
          </div>

          <div className='flex items-center justify-between'>
            <Link to={PATH_PUBLIC_APP.cart.root} className='opacity-[.64] uppercase cursor-pointer'>
              Back
            </Link>
            <div className='flex items-center gap-5'>
              <Button
                size='large'
                variant='outline'
                classNameText='!uppercase'
                className='w-[216px] h-14 rounded-[36px]'
                onClick={handleSubmit(handleSubmitShippingInfo)}
              >
                storage
              </Button>
              <Button
                size='large'
                classNameText='!uppercase'
                className='w-[216px] h-14 rounded-[36px]'
                onClick={handleSubmit(handleSubmitShippingInfo)}
              >
                continue
              </Button>
            </div>
          </div>
        </FormProvider>
      ) : (
        <FormProvider {...paymentForm}>
          <div>
            <RadioGroupField
              name='paymentMethod'
              options={[
                {
                  value: 1,
                  label: (
                    <div className='flex items-center gap-3'>
                      <img src={images.icons.credit} alt='icon-credit' />
                      <p className='text-[24px] font-customSemiBold le'>Credit Card</p>
                    </div>
                  )
                },
                {
                  value: 2,
                  label: (
                    <div className='flex items-center gap-3'>
                      <div className='size-12 bg-gradient-to-r from-greenMain to-blueMain flex items-center justify-center rounded-xl'>
                        <WalletIcon color='#ffffff' />
                      </div>
                      <div>
                        <p className='text-[24px] font-customSemiBold le'>g67s...hs5y</p>
                        <p className='text-[18px] font-customMedium opacity-[.64]'>Balance: $5,000</p>
                      </div>
                    </div>
                  )
                }
              ]}
            />
            <div className='mt-5'>
              <InputField fullWidth name='cardNumber' label='Card Number' placeholder='Enter your card number' />
              <div className='w-full flex items-center gap-5'>
                <InputField fullWidth name='expirationDate' label='Expiration Date' placeholder='mm/yy' />
                <InputField fullWidth name='cvv' label='CVV' placeholder='XXX' />
              </div>
              <InputField fullWidth name='nameOnCard' label='Name On Card' placeholder='Enter your name' />
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <a className='opacity-[.64] uppercase cursor-pointer' onClick={() => setStep(1)}>
              Back
            </a>
            <Button
              size='large'
              classNameText='!uppercase'
              className='w-[216px] h-14 rounded-[36px]'
              onClick={handleSubmitOrder(handleSubmitCompleteOrder)}
            >
              complete
            </Button>
          </div>
        </FormProvider>
      )}
    </div>
  )
}

export default CheckoutForm
