import { Discover, Product, ProductCart, ProductRecent } from '~/@types/model'
import images from '~/assets'

export const listVerticalDiscovers: Discover[] = [
  { id: 1, image: images.product.discover1, title: 'Rooerio cavanl', numberItem: 20, retailPrice: 60, vipPrice: 56 },
  { id: 2, image: images.product.discover2, title: 'Rooerio cavanl', numberItem: 20, retailPrice: 60, vipPrice: 56 }
]

export const listDiscovers: Discover[] = [
  { id: 1, image: images.product.discover1, title: 'Rooerio cavanl', numberItem: 20, retailPrice: 60, vipPrice: 56 },
  { id: 2, image: images.product.discover2, title: 'Rooerio cavanl', numberItem: 20, retailPrice: 60, vipPrice: 56 },
  { id: 3, image: images.product.discover3, title: 'Rooerio cavanl', numberItem: 20, retailPrice: 60, vipPrice: 56 },
  { id: 4, image: images.product.discover4, title: 'Rooerio cavanl', numberItem: 20, retailPrice: 60, vipPrice: 56 },
  { id: 5, image: images.product.discover1, title: 'Rooerio cavanl', numberItem: 20, retailPrice: 60, vipPrice: 56 },
  { id: 6, image: images.product.discover2, title: 'Rooerio cavanl', numberItem: 20, retailPrice: 60, vipPrice: 56 },
  { id: 7, image: images.product.discover3, title: 'Rooerio cavanl', numberItem: 20, retailPrice: 60, vipPrice: 56 },
  { id: 8, image: images.product.discover4, title: 'Rooerio cavanl', numberItem: 20, retailPrice: 60, vipPrice: 56 },
  { id: 9, image: images.product.discover1, title: 'Rooerio cavanl', numberItem: 20, retailPrice: 60, vipPrice: 56 },
  { id: 10, image: images.product.discover2, title: 'Rooerio cavanl', numberItem: 20, retailPrice: 60, vipPrice: 56 },
  { id: 11, image: images.product.discover3, title: 'Rooerio cavanl', numberItem: 20, retailPrice: 60, vipPrice: 56 },
  { id: 12, image: images.product.discover4, title: 'Rooerio cavanl', numberItem: 20, retailPrice: 60, vipPrice: 56 },
  { id: 13, image: images.product.discover1, title: 'Rooerio cavanl', numberItem: 20, retailPrice: 60, vipPrice: 56 },
  { id: 14, image: images.product.discover2, title: 'Rooerio cavanl', numberItem: 20, retailPrice: 60, vipPrice: 56 },
  { id: 15, image: images.product.discover3, title: 'Rooerio cavanl', numberItem: 20, retailPrice: 60, vipPrice: 56 }
]

export const listProductInCart: ProductCart[] = [
  {
    id: 1,
    image: images.product.discover1,
    title: 'Rooerio cavanl',
    price: 120.0,
    numberItems: 20,
    quantityInCart: 0,
    category: 'Health collection'
  },
  {
    id: 2,
    image: images.product.discover2,
    title: 'Rooerio cavanl',
    price: 120.0,
    numberItems: 20,
    quantityInCart: 0,
    category: 'Health collection'
  },
  {
    id: 3,
    image: images.product.discover3,
    title: 'Rooerio cavanl',
    price: 120.0,
    numberItems: 20,
    quantityInCart: 0,
    category: 'Health collection'
  },
  {
    id: 4,
    image: images.product.discover4,
    title: 'Rooerio cavanl',
    price: 120.0,
    numberItems: 20,
    quantityInCart: 0,
    category: 'Health collection'
  },
  {
    id: 5,
    image: images.product.discover1,
    title: 'Rooerio cavanl',
    price: 120.0,
    numberItems: 20,
    quantityInCart: 0,
    category: 'Health collection'
  },
  {
    id: 6,
    image: images.product.discover2,
    title: 'Rooerio cavanl',
    price: 120.0,
    numberItems: 20,
    quantityInCart: 0,
    category: 'Health collection'
  },
  {
    id: 7,
    image: images.product.discover3,
    title: 'Rooerio cavanl',
    price: 120.0,
    numberItems: 20,
    quantityInCart: 0,
    category: 'Health collection'
  },
  {
    id: 8,
    image: images.product.discover4,
    title: 'Rooerio cavanl',
    price: 120.0,
    numberItems: 20,
    quantityInCart: 0,
    category: 'Health collection'
  }
]

export const listProducts: Product[] = [
  {
    id: 1,
    image: images.product.discover1,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  },
  {
    id: 2,
    image: images.product.discover2,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  },
  {
    id: 3,
    image: images.product.discover3,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  },
  {
    id: 4,
    image: images.product.discover4,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  },
  {
    id: 5,
    image: images.product.discover1,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  },
  {
    id: 6,
    image: images.product.discover2,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  },
  {
    id: 7,
    image: images.product.discover3,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  },
  {
    id: 8,
    image: images.product.discover4,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  }
]

export const listProductsFunctional: Product[] = [
  {
    id: 1,
    image: images.home.home_func_1,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  },
  {
    id: 2,
    image: images.home.home_func_2,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  },
  {
    id: 3,
    image: images.home.home_func_3,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  },
  {
    id: 5,
    image: images.home.home_func_1,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  },
  {
    id: 6,
    image: images.home.home_func_2,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  },
  {
    id: 7,
    image: images.home.home_func_3,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  }
]

export const listProductsCosmetic: Product[] = [
  {
    id: 1,
    image: images.home.home_cosmetic_1,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  },
  {
    id: 2,
    image: images.home.home_cosmetic_2,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  },
  {
    id: 3,
    image: images.home.home_cosmetic_1,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  },
  {
    id: 5,
    image: images.home.home_cosmetic_2,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  },
  {
    id: 6,
    image: images.home.home_cosmetic_1,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  },
  {
    id: 7,
    image: images.home.home_cosmetic_2,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  }
]

export const listProductsRichFood: Product[] = [
  {
    id: 1,
    image: images.home.home_rich_food_1,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  },
  {
    id: 2,
    image: images.home.home_rich_food_2,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  },
  {
    id: 3,
    image: images.home.home_rich_food_1,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  },
  {
    id: 5,
    image: images.home.home_rich_food_2,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  },
  {
    id: 6,
    image: images.home.home_rich_food_1,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  },
  {
    id: 7,
    image: images.home.home_rich_food_2,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  }
]

export const listProductsGateway: Product[] = [
  {
    id: 1,
    image: images.home.home_gateway_1,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  },
  {
    id: 2,
    image: images.home.home_gateway_2,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  },
  {
    id: 3,
    image: images.home.home_gateway_3,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  },
  {
    id: 5,
    image: images.home.home_gateway_1,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  },
  {
    id: 6,
    image: images.home.home_gateway_2,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  },
  {
    id: 7,
    image: images.home.home_gateway_3,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  }
]

export const listProductsUnveiling: Product[] = [
  {
    id: 1,
    image: images.home.home_unveiling_1,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  },
  {
    id: 2,
    image: images.home.home_unveiling_2,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  },
  {
    id: 1,
    image: images.home.home_unveiling_1,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  },
  {
    id: 2,
    image: images.home.home_unveiling_2,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  },
  {
    id: 1,
    image: images.home.home_unveiling_1,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  },
  {
    id: 2,
    image: images.home.home_unveiling_2,
    title: 'Rooerio cavanl',
    numberItem: 20,
    retailPrice: 60,
    vipPrice: 56
  }
]

export const listProductsRecent: ProductRecent[] = [
  {
    id: 1,
    image: images.product.discover1,
    title: 'Rooerio cavanl',
    time: '15:09',
    purchases: 890
  },
  {
    id: 2,
    image: images.product.discover2,
    title: 'Rooerio cavanl',
    time: '14:09',
    purchases: 890
  },
  {
    id: 3,
    image: images.product.discover3,
    title: 'Rooerio cavanl',
    time: '13:09',
    purchases: 790
  },
  {
    id: 4,
    image: images.product.discover4,
    title: 'Rooerio cavanl',
    time: '12:09',
    purchases: 690
  },
  {
    id: 5,
    image: images.product.discover1,
    title: 'Rooerio cavanl',
    time: '11:09',
    purchases: 590
  },
  {
    id: 6,
    image: images.product.discover2,
    title: 'Rooerio cavanl',
    time: '10:09',
    purchases: 490
  },
  {
    id: 7,
    image: images.product.discover3,
    title: 'Rooerio cavanl',
    time: '09:09',
    purchases: 390
  },
  {
    id: 8,
    image: images.product.discover4,
    title: 'Rooerio cavanl',
    time: '08:09',
    purchases: 290
  },
  {
    id: 9,
    image: images.product.discover1,
    title: 'Rooerio cavanl',
    time: '07:09',
    purchases: 190
  },
  {
    id: 10,
    image: images.product.discover2,
    title: 'Rooerio cavanl',
    time: '06:09',
    purchases: 90
  },
  {
    id: 11,
    image: images.product.discover3,
    title: 'Rooerio cavanl',
    time: '12:09',
    purchases: 590
  },
  {
    id: 12,
    image: images.product.discover4,
    title: 'Rooerio cavanl',
    time: '13:09',
    purchases: 690
  },
  {
    id: 13,
    image: images.product.discover1,
    title: 'Rooerio cavanl',
    time: '15:09',
    purchases: 890
  },
  {
    id: 14,
    image: images.product.discover2,
    title: 'Rooerio cavanl',
    time: '14:09',
    purchases: 890
  },
  {
    id: 15,
    image: images.product.discover3,
    title: 'Rooerio cavanl',
    time: '13:09',
    purchases: 790
  },
  {
    id: 16,
    image: images.product.discover4,
    title: 'Rooerio cavanl',
    time: '12:09',
    purchases: 690
  }
]
