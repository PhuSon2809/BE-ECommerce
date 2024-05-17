type SliderPaginationProps = {
  slideToGo: (index: number) => void
  activeIndex: number
  slideCount: number
  className?: string
}

function SliderPagination({ slideToGo, activeIndex, slideCount, className }: SliderPaginationProps) {
  return (
    <div className='flex items-center gap-3'>
      {Array.from({ length: slideCount }).map((_, index) => (
        <div
          key={index}
          onClick={() => slideToGo(index)}
          className={`size-[6px] rounded-3xl ${activeIndex === index ? 'bg-blackMain/[.68]' : 'bg-blackMain/[.1]'} hover:bg-blackMain/[.68] transition-colors duration-100 ease-linear cursor-pointer ${className}`}
        />
      ))}
    </div>
  )
}

export default SliderPagination
