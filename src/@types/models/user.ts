export interface UserInfo {
  id: number
  image: string
  fullName: string
  idCustomer: string
  numberProductBought: number
  balance: number
}

export interface UpdateProfileForm {
  fullName: string
  gender: string
  dateOfBirth: string
  email: string
  phoneNumber: number
  address: string
}
