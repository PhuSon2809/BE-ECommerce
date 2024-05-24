import { OptionSelect } from '~/@types/common'
import { OrderStatus, TimeFilter } from '~/@types/enums'

export const LIST_ORDER_STATUS_OPTIONS: OptionSelect[] = [
  { value: OrderStatus.AWAITING, label: OrderStatus.AWAITING },
  { value: OrderStatus.IN_TRANSIT, label: 'In transit' },
  { value: OrderStatus.DELIVERED, label: OrderStatus.DELIVERED },
  { value: OrderStatus.CANCELLED, label: OrderStatus.CANCELLED },
  { value: OrderStatus.STORAGE, label: OrderStatus.STORAGE }
]

export const LIST_TIME_FILTER_OPTIONS: OptionSelect[] = [
  {
    value: TimeFilter.MONTHS_12,
    label: '12 months'
  },
  {
    value: TimeFilter.DAYS_30,
    label: '30 days  '
  },
  {
    value: TimeFilter.DAYS_7,
    label: '7 days'
  },
  {
    value: TimeFilter.HOURS_24,
    label: '24 hours'
  }
]
