export interface OptionSelect {
  value: string
  label: string
}

export type QueryConfig = {
  [key in keyof ListConfig]: string
}

export interface ListConfig {
  itemCheckoutIds?: number[]
  itemsPerPage?: number | string
  currentPage?: number | string
}
