import { Review } from '~/@types/models'

export const reviews: Review[] = [...Array(3)].map(() => ({
  ratings: 5,
  content:
    '"Absolutely satisfied with this beauty product! It has exceeded my expectations in every way. Not only does it deliver visible results, but it also feels luxurious on the skin. Highly recommend!',
  idCustomer: '758855775'
}))
