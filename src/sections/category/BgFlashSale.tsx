import images from '~/assets'

function BgFlashSale() {
  return (
    <svg
      width='442'
      height='460'
      viewBox='0 0 442 460'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <path
        d='M0 40C0 17.9086 17.9086 0 40 0H217V305C217 327.091 199.091 345 177 345H0V40Z'
        fill='url(#paint0_linear_2052_921)'
      />
      <path
        d='M0 40C0 17.9086 17.9086 0 40 0H217V305C217 327.091 199.091 345 177 345H0V40Z'
        fill='url(#pattern0_2052_921)'
      />
      <path
        d='M0 40C0 17.9086 17.9086 0 40 0H217V305C217 327.091 199.091 345 177 345H0V40Z'
        fill='url(#pattern1_2052_921)'
      />
      <path
        d='M0 40C0 17.9086 17.9086 0 40 0H217V305C217 327.091 199.091 345 177 345H0V40Z'
        fill='url(#pattern2_2052_921)'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 353V460H177C199.091 460 217 442.091 217 420V331.542C208.401 344.476 193.696 353 177 353H0Z'
        fill='#0D0D0D'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 353V460H177C199.091 460 217 442.091 217 420V331.542C208.401 344.476 193.696 353 177 353H0Z'
        fill='url(#pattern3_2052_921)'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M225 310.378C241.597 266.611 283.915 235.5 333.5 235.5C383.085 235.5 425.403 266.611 442 310.378L442 40C442 17.9086 424.091 1.31125e-05 402 1.50437e-05L225 3.05176e-05L225 310.378Z'
        fill='#BAC8D9'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M225 310.378C241.597 266.611 283.915 235.5 333.5 235.5C383.085 235.5 425.403 266.611 442 310.378L442 40C442 17.9086 424.091 1.31125e-05 402 1.50437e-05L225 3.05176e-05L225 310.378Z'
        fill='url(#pattern4_2052_921)'
      />
      <path
        d='M434 351.5C434 407.005 389.005 452 333.5 452C277.995 452 233 407.005 233 351.5C233 295.995 277.995 251 333.5 251C389.005 251 434 295.995 434 351.5Z'
        fill='#D9D9D9'
      />
      <path
        d='M434 351.5C434 407.005 389.005 452 333.5 452C277.995 452 233 407.005 233 351.5C233 295.995 277.995 251 333.5 251C389.005 251 434 295.995 434 351.5Z'
        fill='url(#pattern5_2052_921)'
      />
      <circle opacity='0.12' cx='333.5' cy='351.5' r='108' stroke='#0D0D0D' />
      <defs>
        <pattern id='pattern0_2052_921' patternContentUnits='objectBoundingBox' width='1' height='1'>
          <use xlinkHref='#image0_2052_921' transform='matrix(0.00293186 0 0 0.0018441 -0.154277 -0.272429)' />
        </pattern>
        <pattern id='pattern1_2052_921' patternContentUnits='objectBoundingBox' width='1' height='1'>
          <use xlinkHref='#image0_2052_921' transform='matrix(0.00293186 0 0 0.0018441 -0.154277 -0.272429)' />
        </pattern>
        <pattern id='pattern2_2052_921' patternContentUnits='objectBoundingBox' width='1' height='1'>
          <use xlinkHref='#image0_2052_921' transform='matrix(0.00293186 0 0 0.0018441 -0.154277 -0.272429)' />
        </pattern>
        <pattern id='pattern3_2052_921' patternContentUnits='objectBoundingBox' width='1' height='1'>
          <use xlinkHref='#image1_2052_921' transform='matrix(0.00208333 0 0 0.00351932 0 -0.344636)' />
        </pattern>
        <pattern id='pattern4_2052_921' patternContentUnits='objectBoundingBox' width='1' height='1'>
          <use xlinkHref='#image2_2052_921' transform='matrix(0.00230696 0 0 0.0016129 -0.215157 0)' />
        </pattern>
        <pattern id='pattern5_2052_921' patternContentUnits='objectBoundingBox' width='1' height='1'>
          <use xlinkHref='#image3_2052_921' transform='translate(-0.345426 -0.310705) scale(0.00364842)' />
        </pattern>
        <linearGradient
          id='paint0_linear_2052_921'
          x1='211.963'
          y1='7.24073'
          x2='-54.6175'
          y2='64.2362'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#F2F3F5' />
          <stop offset='1' stopColor='#F6F6F7' />
        </linearGradient>

        <image id='image0_2052_921' width='457' height='690' xlinkHref={images.image.flash_sale_1} />
        <image id='image1_2052_921' width='480' height='480' xlinkHref={images.image.flash_sale_3} />
        <image id='image2_2052_921' width='620' height='620' xlinkHref={images.image.flash_sale_2} />
        <image id='image3_2052_921' width='460' height='360' xlinkHref={images.image.flash_sale_4} />
      </defs>
    </svg>
  )
}

export default BgFlashSale
