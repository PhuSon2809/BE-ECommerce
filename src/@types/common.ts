export interface OptionSelect {
  value: string | number
  label: string
}

export type QueryConfig = {
  [key in keyof ListConfig]: string
}

export interface ListConfig {
  itemCheckoutIds?: number[]
  cartShareType?: string
  itemsPerPage?: number | string
  currentPage?: number | string
}
