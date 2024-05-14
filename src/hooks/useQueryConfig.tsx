import isUndefined from 'lodash/isUndefined'
import omitBy from 'lodash/omitBy'
//
import useQueryParams from '~/hooks/useQueryParams'
import { ListConfig } from '~/@types/common'

export type QueryConfig = {
  [key in keyof ListConfig]: string
}

function useQueryConfig() {
  const queryParams: QueryConfig = useQueryParams()

  const queryConfig: QueryConfig = omitBy(
    {
      itemCheckoutIds: queryParams.itemCheckoutIds,
      itemsPerPage: queryParams.itemsPerPage || '5',
      currentPage: queryParams.currentPage || '1'
    },
    isUndefined
  )
  return queryConfig
}

export default useQueryConfig
