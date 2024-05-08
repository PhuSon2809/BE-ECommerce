import images from '~/assets'
import './styles.scss'

function GlobalWarranty() {
  return (
    <div className='shadow-4xl rounded-[30px]'>
      <div className='background-image w-[454px] h-[300px] rounded-[32px] bg-white/[.44] backdrop-blur-2xl p-10 flex flex-col items-center gap-5 relative shadow-6xl'>
        <h5 className='text-[32px] font-bold capitalize'>global warranty</h5>
        <img src={images.icons.global_warranty} alt='global-warranty' className='size-[104px]' />
        {[
          'absolute top-[35%] right-[16%]',
          'absolute top-[40%] left-[22.2%]',
          'absolute bottom-[20%] left-[9%]',
          'absolute bottom-[18%] right-[9.5%]',
          'absolute bottom-[10%] right-[40%]'
        ].map((item, index) => (
          <div key={index} className={`absolute ${item}`}>
            <svg width='12' height='12' viewBox='0 0 12 12' fill='none'>
              <circle cx='6' cy='6' r='6' fill='url(#radial_1)' />
              <defs>
                <radialGradient
                  id='radial_1'
                  cx='0'
                  cy='0'
                  r='1'
                  gradientUnits='userSpaceOnUse'
                  gradientTransform='translate(7.78105 0.700351) scale(9.67719)'
                >
                  <stop offset='0.01' stop-color='#60EC8E' />
                  <stop offset='0.99' stop-color='#5495FC' />
                </radialGradient>
              </defs>
            </svg>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GlobalWarranty
