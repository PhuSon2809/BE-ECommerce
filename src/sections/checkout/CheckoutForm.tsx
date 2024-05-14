import { Dispatch, SetStateAction } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Link, createSearchParams, useNavigate } from 'react-router-dom'
import { QueryConfig } from '~/@types/common'
import { PaymentForm, ShippingInfoForm } from '~/@types/model/order'
import { Button } from '~/components/button'
import { InputField, SelectField, TextareaField } from '~/components/form'
import useQueryConfig from '~/hooks/useQueryConfig'

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
        pathname: '/checkout-complete',
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
              <InputField fullWidth name='countryId' label='Country' placeholder='Select your country' />
            </div>
            <div className='w-full flex items-center gap-5'>
              <SelectField fullWidth name='city' label='City' />
              <InputField fullWidth name='province' label='State/Province' placeholder='Select' />
            </div>
            <div className='w-full flex items-center gap-5'>
              <InputField fullWidth name='postalCode' label='Postal code' placeholder='Enter postal code' />
              <InputField fullWidth name='phoneNumber' label='Phone Number' placeholder='Enter your phone number' />
            </div>
            <TextareaField fullWidth name='addressDetail' label='Address detail' placeholder='Enter your address' />
          </div>

          <div className='flex items-center justify-between'>
            <Link to={'/cart'} className='opacity-[.64] uppercase cursor-pointer'>
              Back
            </Link>
            <Button
              size='large'
              classNameText='!uppercase'
              className='w-[216px] h-14 rounded-[36px]'
              onClick={handleSubmit(handleSubmitShippingInfo)}
            >
              continue
            </Button>
          </div>
        </FormProvider>
      ) : (
        <FormProvider {...shippingInfoForm}>
          <div></div>
          <div>
            <InputField fullWidth name='cardNumber' label='Card Number' placeholder='Enter your first name' />
            <div className='w-full flex items-center gap-5'>
              <InputField fullWidth name='expirationDate' label='Expiration Date' placeholder='mm/yy' />
              <InputField fullWidth name='cvv' label='CVV' placeholder='XXX' />
            </div>
            <InputField fullWidth name='phoneNumber' label='Phone Number' placeholder='Enter your name' />
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
