import * as yup from 'yup'
import { VALIDATION_CONTENT } from '~/constants/validationContent'

function useValidationForm() {
  const schemaReceiveProduct = yup.object({
    firstName: yup
      .string()
      .required(VALIDATION_CONTENT.REQUIRED('first name'))
      .matches(/^[^\d]*$/, 'First name must not contain numbers'),
    lastName: yup
      .string()
      .required(VALIDATION_CONTENT.REQUIRED('last name'))
      .matches(/^[^\d]*$/, 'Last name must not contain numbers'),
    email: yup.string().required(VALIDATION_CONTENT.REQUIRED('email')).email(VALIDATION_CONTENT.EMAIL_FORMAT),
    countryId: yup
      .number()
      .required(VALIDATION_CONTENT.SELECT('country'))
      .typeError(VALIDATION_CONTENT.SELECT('country'))
      .moreThan(0, VALIDATION_CONTENT.SELECT('country')),
    cityId: yup
      .number()
      .required(VALIDATION_CONTENT.SELECT('city'))
      .typeError(VALIDATION_CONTENT.SELECT('city'))
      .moreThan(0, VALIDATION_CONTENT.SELECT('city')),
    provinceId: yup
      .number()
      .required(VALIDATION_CONTENT.SELECT('province'))
      .typeError(VALIDATION_CONTENT.SELECT('province'))
      .moreThan(0, VALIDATION_CONTENT.SELECT('province')),
    phoneNumber: yup
      .string()
      .min(10, 'Phone number must be ten digits')
      .max(10, 'Phone number must be ten digits')
      .required(VALIDATION_CONTENT.REQUIRED('phone number'))
      .matches(/^\d+$/, 'Phone number must contain only digits.')
      .matches(/^((0|\+84)(3|5|7|8|9))[0-9]{8}$/, 'Phone number is invalid.'),
    addressDetail: yup.string().required(VALIDATION_CONTENT.REQUIRED('address detail')),
    paymentMethod: yup.string().required(VALIDATION_CONTENT.SELECT('payment method')),
    cardNumber: yup.string().required(VALIDATION_CONTENT.REQUIRED('card number')),
    expirationDate: yup.string().required(VALIDATION_CONTENT.SELECT('expiration date')),
    cvv: yup
      .number()
      .typeError(VALIDATION_CONTENT.REQUIRED('cvv'))
      .required(VALIDATION_CONTENT.REQUIRED('cvv'))
      .min(3, 'CVV must be three digits')
      .max(3, 'CVV must be three digits'),
    nameOnCard: yup.string().required(VALIDATION_CONTENT.SELECT('name on card')),
    walletId: yup.string().required(VALIDATION_CONTENT.SELECT('wallet'))
  })

  const schemaStorageForResale = yup.object({
    paymentMethod: yup.string().required(VALIDATION_CONTENT.SELECT('payment method')),
    cardNumber: yup.string().required(VALIDATION_CONTENT.REQUIRED('card number')),
    expirationDate: yup.string().required(VALIDATION_CONTENT.SELECT('expiration date')),
    cvv: yup
      .number()
      .typeError(VALIDATION_CONTENT.REQUIRED('cvv'))
      .required(VALIDATION_CONTENT.REQUIRED('cvv'))
      .min(3, 'CVV must be three digits')
      .max(3, 'CVV must be three digits'),
    nameOnCard: yup.string().required(VALIDATION_CONTENT.SELECT('name on card')),
    walletId: yup.string().required(VALIDATION_CONTENT.SELECT('wallet'))
  })

  return {
    schemaReceiveProduct,
    schemaStorageForResale
  }
}

export default useValidationForm
