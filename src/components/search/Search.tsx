import images from '~/assets'

function Search() {
  return (
    <div className='xs:min-w-12 sm:min-w-[320px] h-12 px-5 bg-greyMain flex items-center gap-2 rounded-[44px] focus-within:bg-white'>
      <img src={images.icons.search} alt='icon-search' />
      <input
        placeholder='Search'
        className='w-full h-full bg-greyMain border-none outline-none rounded-tr-[44px] rounded-br-[44px] focus:bg-white'
      />
    </div>
  )
}

export default Search
