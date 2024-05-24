import { UserInfo } from '~/@types/models'

export const listUserInfo: UserInfo[] = [...Array(10)].map((_, index) => ({
  id: index,
  image:
    'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
  fullName: 'Tatiana Lipshutz',
  idCustomer: '5647686899',
  numberProductBought: 24,
  balance: 24
}))
