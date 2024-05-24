import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link, createSearchParams, useNavigate } from 'react-router-dom'

import { QueryConfig } from '~/@types/common'
import { ReceiveProductForm, StorageForResaleForm } from '~/@types/models/order'
import { Button } from '~/components/button'
import { PATH_PRIVATE_APP, PATH_PUBLIC_APP } from '~/constants/paths'
import { QUERY_PARAM_STRING } from '~/constants/queryParamString'
import useQueryConfig from '~/hooks/useQueryConfig'
import PaymentMethodForm from './PaymentMethodForm'
import ShippingInfoForm from './ShippingInfoForm'
import useValidationForm from '~/hooks/useValidationForm'

function CheckoutForm() {
  const navigate = useNavigate()

  const queryConfig: QueryConfig = useQueryConfig()
  const { schemaReceiveProduct, schemaStorageForResale } = useValidationForm()

  const receiveProductForm = useForm<ReceiveProductForm>({
    defaultValues: { paymentMethod: 'credit-card' },
    resolver: yupResolver(schemaReceiveProduct)
  })
  const storageForResaleForm = useForm<StorageForResaleForm>({
    defaultValues: { paymentMethod: 'credit-card' },
    resolver: yupResolver(schemaStorageForResale)
  })

  const { handleSubmit: handleSubmitReceiveProduct } = receiveProductForm
  const { handleSubmit } = storageForResaleForm

  const handleReceiveProductOrder = (values: ReceiveProductForm) => {
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

  const handleStorageForResaleOrder = (values: StorageForResaleForm) => {
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
      {queryConfig.checkoutType === QUERY_PARAM_STRING.checkoutType.receiveProduct ? (
        <FormProvider {...receiveProductForm}>
          <div>
            <ShippingInfoForm />
            <PaymentMethodForm />
          </div>

          <div className='flex items-center justify-between'>
            <Link to={PATH_PUBLIC_APP.cart.root} className='opacity-[.64] uppercase cursor-pointer'>
              Back
            </Link>
            <Button
              size='large'
              classNameText='!uppercase'
              className='w-[216px] h-14 rounded-[36px]'
              onClick={handleSubmitReceiveProduct(handleReceiveProductOrder)}
            >
              confirm
            </Button>
          </div>
        </FormProvider>
      ) : (
        <FormProvider {...storageForResaleForm}>
          <div>
            <ShippingInfoForm disabled />
            <PaymentMethodForm />
          </div>

          <div className='flex items-center justify-between'>
            <Link to={PATH_PUBLIC_APP.cart.root} className='opacity-[.64] uppercase cursor-pointer'>
              Back
            </Link>
            <Button
              size='large'
              classNameText='!uppercase'
              className='w-[216px] h-14 rounded-[36px]'
              onClick={handleSubmit(handleStorageForResaleOrder)}
            >
              confirm
            </Button>
          </div>
        </FormProvider>
      )}
    </div>
  )
}

export default CheckoutForm
