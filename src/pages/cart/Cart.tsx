import { Header } from '~/layouts/components/header'
import { DiscoverSection } from '~/sections/common'

function Cart() {
  return (
    <div>
      <Header />

      <section>
        <div className='grid grid-cols-12'>
          <div className='col-span-8'></div>
          <div className='col-span-4'></div>
        </div>
      </section>

      {/* Discover section */}
      <DiscoverSection titleVerticalSlide='Best Seller' titleHorizontalSlide='Recommend' />
    </div>
  )
}

export default Cart
