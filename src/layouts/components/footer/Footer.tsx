import images from '~/assets'

function Footer() {
  return (
    <footer className='w-full p-4 mt-[80px]'>
      <div className='px-10 py-8 bg-blackMain rounded-lg flex flex-col gap-6'>
        <div className='flex items-center gap-3'>
          <img src={images.logo.logo_white} alt='logo-white' />
          <p className='text-[20px] text-white font-semibold'>Power Of Five</p>
        </div>
        <div className='border-[1px] border-solid border-white opacity-20'></div>
        <div className='h-full flex gap-6'>
          <div className='w-1/3 flex flex-col gap-5'>
            <p className='text-[14px] text-white font-semibold leading-[19.6px]'>Product</p>

            <div className='flex flex-col gap-[6px] text-[14px] text-white/[.60]'>
              <p>Health</p>
              <p>Cosmetic</p>
              <p>Fashion</p>
              <p>Food</p>
              <p>Digital</p>
              <p>Product</p>
            </div>
          </div>

          <div className='w-1/3 flex flex-col gap-5'>
            <p className='text-[14px] text-white font-semibold leading-[19.6px]'>Help</p>

            <div className='flex flex-col gap-[6px] text-[14px] text-white/[.60]'>
              <p>Customer Service</p>
              <p>My Account</p>
              <p>Legal & Privacy</p>
              <p>Gift Card Terms and Conditions</p>
              <p>Do not sell or share my personal data</p>
              <p>Our commitment to accessibility</p>
              <p>Report a scam</p>
              <p>Cookie notice & settings</p>
            </div>
          </div>

          <div className='w-1/3 h-[242px] flex flex-col items-end !justify-between'>
            <div className='w-full flex justify-between'>
              <div className='flex flex-col gap-5'>
                <p className='text-[14px] text-white font-semibold leading-[19.6px]'>Contact us</p>

                <div className='flex flex-col gap-[6px] text-[14px] text-white/[.60]'>
                  <p>+1 891 989-11-91</p>
                  <p>help@logoipsum.com</p>
                </div>
              </div>

              <div className='flex gap-2'>
                <button className='size-10 bg-white/10 rounded-full flex items-center justify-center'>
                  <img src={images.icons.instagram} alt='instagram' />
                </button>
                <button className='size-10 bg-white/10 rounded-full flex items-center justify-center'>
                  <img src={images.icons.facebook} alt='facebook' />
                </button>
                <button className='size-10 bg-white/10 rounded-full flex items-center justify-center'>
                  <img src={images.icons.yuoTube} alt='yuoTube' />
                </button>
              </div>
            </div>

            <button className='size-[50px] flex items-center justify-center bg-white rounded-full'>
              <img src={images.icons.arrow_top} alt='arrow-top' />
            </button>
          </div>
        </div>
        <h1 className='text-[173px] font-bold leading-[242.2px] text-white uppercase text-center t'>Power Of Five</h1>
      </div>
    </footer>
  )
}

export default Footer
