import { Discover } from '~/@types/model'
import images from '~/assets'
import { listDiscovers } from '~/assets/mocks/product'
import { IconButton } from '~/components/iconButton'
import { ProductCard } from '~/components/productCard'

function ListProduct() {
  const separateArray = (array: Discover[], chunkSize: number): Discover[][] => {
    const result: Discover[][] = []
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize))
    }
    return result
  }

  const listProductCategory = separateArray(listDiscovers.slice(0, 6), 2)

  const mergeArraysAndAddHeight = (productArrays: Discover[], heights: string[]): Discover[] => {
    return productArrays.map((product, idx) => ({
      ...product,
      height: heights[idx]
    }))
  }

  return (
    <section className='relative'>
      <div className='flex justify-between'>
        <div className='w-[260px] flex flex-col gap-5'>
          {mergeArraysAndAddHeight(listProductCategory[0], ['260px', '335px']).map((product) => (
            <ProductCard
              inCategory
              key={product.id}
              product={product}
              fontSize='small'
              ptContent='pt-1'
              size={`w-full h-[${product.height}]`}
              borderRadius='rounded-[32px]'
              buttonAddBagPosition='right-[6%]'
            />
          ))}
        </div>
        <div className='w-[365px] flex flex-col gap-5'>
          {listProductCategory[1].map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              prContent='pr-12'
              size={`w-full h-[335px]`}
              borderRadius='rounded-[32px]'
              buttonAddBagPosition='right-[5.1%]'
            />
          ))}
        </div>
        <div className='w-[260px] flex flex-col gap-5'>
          {mergeArraysAndAddHeight(listProductCategory[2], ['260px', '335px']).map((product) => (
            <ProductCard
              inCategory
              key={product.id}
              product={product}
              fontSize='small'
              ptContent='pt-1'
              size={`w-full h-[${product.height}]`}
              borderRadius='rounded-[32px]'
              buttonAddBagPosition='right-[6%]'
            />
          ))}
        </div>
      </div>
      <div className='flex items-center gap-2 absolute bottom-0 left-[15%]'>
        <IconButton size='56'>
          <img src={images.icons.arrow_left} alt='arrow-left' />
        </IconButton>
        <IconButton size='56'>
          <img src={images.icons.arrow_right} alt='arrow-right' />
        </IconButton>
      </div>
    </section>
  )
}

export default ListProduct
