import SliderFeatureProduct from '../common/SliderFeatureProduct'

function FeaturedProduct() {
  return (
    <section className='feature-product xs:mt-[50px] sm:mt-[80px] xs:px-4 sm:px-0 relative'>
      <div className='flex xs:flex-col sm:flex-row xs:items-start sm:items-center justify-between xs:gap-5 sm:gap-0 mb-10'>
        <h1 className='xs:text-[32px] sm:text-[40px] font-customBold xs:leading-[40px] sm:leading-[52px] capitalize'>
          Featured products <br />
          shop our Top picks!
        </h1>
        <p className='xs:w-[358px] sm:w-[472px] xs:leading-[24px] sm:leading-[26px] opacity-[.64]'>
          Discover our top picks and shop our featured products! Explore a curated selection of must-have items,
          carefully chosen to bring style, quality, and innovation to your doorstep.
        </p>
      </div>

      <SliderFeatureProduct />
    </section>
  )
}

export default FeaturedProduct
