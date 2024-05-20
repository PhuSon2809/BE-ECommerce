export interface OptionSelect {
  value: string | number
  label: string
}

export type QueryConfig = {
  [key in keyof ListConfig]: string
}

export interface ListConfig {
  itemCheckoutIds?: number[]
  cartShareType?: 'share-link' | 'view-link-share'
  checkoutType?: 'receive-product' | 'storage-for-resale'
  itemsPerPage?: number | string
  currentPage?: number | string
}
