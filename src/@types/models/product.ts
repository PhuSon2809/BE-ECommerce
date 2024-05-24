/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Product {
  id: number
  image: any
  title: string
  numberItem: number
  retailPrice: number
  vipPrice: number
  category: string
}

export interface ProductCart {
  id: number
  image: any
  title: string
  price: number
  numberItems: number
  category: string
  quantityInCart: number
}

export interface ProductFavorite {
  id: number
  image: any
  title: string
  vipPrice: number
  retailPrice: number
}

export interface ProductRecent {
  id: number
  image: any
  title: string
  time: string
  purchases: number
}
