type SliderPaginationProps = {
  slideToGo: (index: number) => void
  activeIndex: number
  slideCount: number
  className?: string
  color?: 'black' | 'white'
  gap?: string
}

function SliderPagination({
  slideToGo,
  activeIndex,
  slideCount,
  className,
  color = 'black',
  gap
}: SliderPaginationProps) {
  return (
    <div className={`flex items-center ${gap ? gap : 'gap-3'}`}>
      {Array.from({ length: slideCount }).map((_, index) => (
        <div
          key={index}
          onClick={() => slideToGo(index)}
          className={`size-[6px] rounded-3xl ${
            activeIndex === index
              ? color === 'black'
                ? 'bg-blackMain/[.68]'
                : 'bg-white/[.68]'
              : color === 'black'
                ? 'bg-blackMain/[.1]'
                : 'bg-white/[.35]'
          } ${color === 'black' ? 'hover:bg-blackMain/[.68]' : 'hover:bg-white/[.68]'} transition-colors duration-100 ease-linear cursor-pointer ${className}`}
        />
      ))}
    </div>
  )
}

export default SliderPagination
