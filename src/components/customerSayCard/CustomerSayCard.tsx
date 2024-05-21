type CustomerSayCardProps = {
  name: string
  image: string
  customerId: string
  content: string
  bgLinear?: boolean
  className?: string
}

function CustomerSayCard({ name, image, customerId, content, bgLinear = false, className }: CustomerSayCardProps) {
  return (
    <div className='xs:w-[282px] sm:w-[493px] bg-transparent relative'>
      <img
        src={image}
        alt={name}
        className='xs:size-[87.93px] sm:size-[140px] flex flex-col items-end justify-end rounded-[200px] rounded-bl-[12px] absolute top-[-18%] xs:right-[5%] sm:right-[10%]'
      />
      <div
        className={`w-fit py-[30px] xs:pb-4 xs:px-4 sm:px-10 shadow-10xl flex flex-col justify-end xs:gap-1 sm:gap-[10px] rounded-2xl rounded-tl-[100px] rounded-tr-[40px]  ${bgLinear ? 'bg-gradient-to-l from-[#5495FC] to-[#31D366]/[.9814] text-white' : 'bg-gradient-to-r from-[#F2F3F5]/[226] to-[#F6F6F7]/[.9814]'} ${className}`}
      >
        <h6 className='xs:text-[17.59px] sm:text-[28px] font-customSemiBold capitalize xs:leading-[17.59px] sm:leading-7'>
          {name}
        </h6>
        <p
          className={`xs:text-[11.31px] sm:text-[18px] font-customMedium ${bgLinear ? 'text-white/[.84]' : 'text-blackMain/[.64]'} xs:leading-[17.59px] sm:leading-7`}
        >
          Customer - ID: {customerId}
        </p>
        <p className='xs:text-[16px] sm:text-[18px] font-customMedium xs:leading-[22px] sm:leading-7 xs:tracking-tight sm:tracking-normal'>
          {content}
        </p>
      </div>
    </div>
  )
}

export default CustomerSayCard
