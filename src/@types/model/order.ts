export interface ShippingInfoForm {
  firstName: string
  lastName: string
  email: string
  countryId: number
  cityId: number
  provinceId: number
  phoneNumber: string
  addressDetail: string
  postalCode?: string
}

export interface PaymentForm {
  paymentMethod: string
  cardNumber: string
  expirationDate: string
  cvv: number
  nameOnCard: string
}
