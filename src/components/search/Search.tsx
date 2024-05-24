import images from '~/assets'

type SearchProps = {
  className?: string
  placeholder?: string
  variant?: 'container' | 'outline'
}

function Search({ className, placeholder = 'Search', variant = 'container' }: SearchProps) {
  return (
    <div
      className={`flex items-center gap-2 xs:min-w-12 sm:min-w-[320px] ${variant === 'container' ? ' h-12 px-5 bg-greyMain rounded-[44px]' : 'h-11 px-3 bg-white/[.44] rounded-lg border-blackMain/[.1] border border-solid'}   focus-within:bg-white ${className}`}
    >
      <img src={images.icons.search} alt='icon-search' className={`${variant === 'container' ? 'size-6' : 'size-5'}`} />
      {variant === 'outline' && <div className='h-6 border-0 border-r-[1px] border-solid border-blackMain/[.1]' />}
      <input
        placeholder={placeholder}
        className={`w-full h-full ${variant === 'container' ? 'bg-greyMain' : 'bg-white/[.44]'} border-none outline-none rounded-tr-[44px] rounded-br-[44px] focus:bg-white`}
      />
    </div>
  )
}

export default Search
