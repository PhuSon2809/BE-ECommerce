import SliderFeatureProduct from '../common/SliderFeatureProduct'

function FeaturedProduct() {
  return (
    <section className='feature-product mt-[80px] relative'>
      <div className='flex items-center justify-between mb-10'>
        <h1 className='text-[40px] font-customBold leading-[52px] capitalize'>
          Featured products <br />
          shop our Top picks!
        </h1>
        <p className='w-[472px] leading-[26px] opacity-[.64]'>
          Discover our top picks and shop our featured products! Explore a curated selection of must-have items,
          carefully chosen to bring style, quality, and innovation to your doorstep.
        </p>
      </div>

      <SliderFeatureProduct />
    </section>
  )
}

export default FeaturedProduct
