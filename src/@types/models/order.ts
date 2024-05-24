export interface ReceiveProductForm {
  firstName: string
  lastName: string
  email: string
  countryId: number
  cityId: number
  provinceId: number
  phoneNumber: string
  addressDetail: string
  postalCode?: string
  paymentMethod: string
  cardNumber: string
  expirationDate: string
  cvv: number
  nameOnCard: string
  walletId: string
}

export interface StorageForResaleForm {
  paymentMethod: string
  cardNumber: string
  expirationDate: string
  cvv: number
  nameOnCard: string
  walletId: string
}
