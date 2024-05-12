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
    <div className='w-[493px] bg-transparent relative'>
      <img
        src={image}
        alt={name}
        className='size-[140px] flex flex-col items-end justify-end rounded-[200px] rounded-bl-[12px] absolute top-[-18%] right-[10%]'
      />
      <div
        className={`w-fit py-[30px] px-10 shadow-10xl flex flex-col justify-end gap-[10px] rounded-2xl rounded-tl-[100px] rounded-tr-[40px]  ${bgLinear ? 'bg-gradient-to-l from-[#5495FC] to-[#31D366]/[.9814] text-white' : 'bg-gradient-to-r from-[#F2F3F5]/[226] to-[#F6F6F7]/[.9814]'} ${className}`}
      >
        <h6 className='text-[28px] font-customSemiBold capitalize leading-7'>{name}</h6>
        <p
          className={`text-[18px] font-customMedium ${bgLinear ? 'text-white/[.84]' : 'text-blackMain/[.64]'} leading-7`}
        >
          Customer - ID: {customerId}
        </p>
        <p className='text-[18px] font-customMedium leading-7'>{content}</p>
      </div>
    </div>
  )
}

export default CustomerSayCard
