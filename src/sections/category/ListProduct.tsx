import { Discover } from '~/@types/model'
import images from '~/assets'
import { listDiscovers } from '~/assets/mocks/product'
import { IconButton } from '~/components/iconButton'
import { ProductCard } from '~/components/productCard'
import useResponsive from '~/hooks/useResponsive'

function ListProduct() {
  const smDown = useResponsive('down', 'sm', 'sm')

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
    <section className='relative px-4'>
      <div className='flex justify-between gap-4 '>
        <div className='xs:w-[173px] sm:w-[260px] flex flex-col xs:gap-4 sm:gap-5'>
          {mergeArraysAndAddHeight(listProductCategory[0], ['260px', '335px']).map((product) => (
            <ProductCard
              inCategory
              key={product.id}
              product={product}
              fontSize='small'
              ptContent='pt-1'
              size={`w-full ${smDown ? 'h-[173px]' : `h-[${product.height}]`}`}
              borderRadius={smDown ? 'rounded-[20px]' : 'rounded-[32px]'}
              buttonAddBagPosition={smDown ? 'right-[5%]' : 'right-[5.1%]'}
            />
          ))}
        </div>
        <div className='w-[365px] flex flex-col gap-5 xs:hidden sm:flex'>
          {listProductCategory[1].map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              prContent='pr-12'
              size={`w-full h-[335px]`}
              borderRadius='rounded-[32px]'
              buttonAddBagPosition='right-[4.5%]'
            />
          ))}
        </div>
        <div className='xs:w-[173px] sm:w-[260px] flex flex-col xs:gap-4 sm:gap-5 xs:mt-10 sm:mt-0'>
          {mergeArraysAndAddHeight(listProductCategory[2], ['260px', '335px']).map((product) => (
            <ProductCard
              inCategory
              key={product.id}
              product={product}
              fontSize='small'
              ptContent='pt-1'
              size={`w-full ${smDown ? 'h-[173px]' : `h-[${product.height}]`}`}
              borderRadius={smDown ? 'rounded-[20px]' : 'rounded-[32px]'}
              buttonAddBagPosition={smDown ? 'right-[5%]' : 'right-[5.1%]'}
            />
          ))}
        </div>
      </div>
      <div className='flex items-center gap-2 absolute bottom-0 xs:left-[30%] sm:left-[15%]'>
        <IconButton size={smDown ? '32' : '56'}>
          <img src={images.icons.arrow_left} alt='arrow-left' className='xs:size-4 sm:size-6' />
        </IconButton>
        <IconButton size={smDown ? '32' : '56'}>
          <img src={images.icons.arrow_right} alt='arrow-right' className='xs:size-4 sm:size-6' />
        </IconButton>
      </div>
    </section>
  )
}

export default ListProduct
