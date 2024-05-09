import images from '~/assets'

function Search() {
  return (
    <div className='min-w-[320px] h-12 px-5 bg-greyMain flex items-center gap-2 rounded-[44px]'>
      <img src={images.icons.search} alt='icon-search' />
      <input
        placeholder='Search'
        className='w-full h-full bg-greyMain border-none outline-none rounded-tr-[44px] rounded-br-[44px]'
      />
    </div>
  )
}

export default Search
