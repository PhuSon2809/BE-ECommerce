const NavPlantIcon = ({ color }: { color: string }) => {
  return (
    <svg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath='url(#clip0_614_71)'>
        <mask
          id='mask0_614_71'
          style={{ maskType: 'luminance' }}
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='22'
          height='22'
        >
          <path d='M22 0H0V22H22V0Z' fill='white' />
        </mask>
        <g mask='url(#mask0_614_71)'>
          <path
            d='M21.3555 11.0004C21.3555 16.7196 16.7191 21.3559 11 21.3559C5.28086 21.3559 0.644531 16.7196 0.644531 11.0004C0.644531 5.28129 5.28086 0.644958 11 0.644958C16.7191 0.644958 21.3555 5.28129 21.3555 11.0004Z'
            fill={color}
          />
          <path
            d='M21.3555 11.0004C21.3555 16.7196 16.7191 21.3559 11 21.3559C5.28086 21.3559 0.644531 16.7196 0.644531 11.0004C0.644531 5.28129 5.28086 0.644958 11 0.644958C16.7191 0.644958 21.3555 5.28086 21.3555 11.0004Z'
            stroke={color}
            strokeWidth='1.40625'
            strokeMiterlimit='10'
            strokeLinecap='square'
          />
          <path
            d='M15.0818 5.26109C15.0818 5.26109 16.9961 7.71891 16.178 10.1784C15.9609 10.8307 15.4937 11.3701 14.879 11.6779C14.2644 11.9857 13.5526 12.0367 12.9003 11.8198C12.248 11.6028 11.7087 11.1356 11.4009 10.5209C11.0931 9.90625 11.042 9.1945 11.2589 8.54219C12.0753 6.08266 15.0831 5.26109 15.0831 5.26109'
            fill={color}
          />
          <path
            d='M15.0818 5.26109C15.0818 5.26109 16.9961 7.71891 16.178 10.1784C15.9609 10.8307 15.4937 11.3701 14.879 11.6779C14.2644 11.9857 13.5526 12.0367 12.9003 11.8198C12.248 11.6028 11.7087 11.1356 11.4009 10.5209C11.0931 9.90625 11.042 9.1945 11.2589 8.54219C12.077 6.08266 15.0818 5.26109 15.0818 5.26109Z'
            stroke={color === '#FFFFFF' ? 'url(#paint0_linear_11_411)' : '#FFFFFF'}
            strokeWidth='1.40625'
            strokeMiterlimit='10'
            strokeLinecap='square'
          />
          <path
            d='M6.42334 6.05516L10.4353 17.664H10.957L13.5721 9.78957'
            stroke={color === '#FFFFFF' ? 'url(#paint1_linear_11_411)' : '#FFFFFF'}
            strokeWidth='1.40625'
            strokeMiterlimit='10'
            strokeLinecap='square'
          />
        </g>
      </g>
      <defs>
        <clipPath id='clip0_614_71'>
          <rect width='22' height='22' fill='white' />
        </clipPath>
        <linearGradient id='paint0_linear_11_411' x1='20' y1='12' x2='4' y2='12' gradientUnits='userSpaceOnUse'>
          <stop stop-color='#5495FC' />
          <stop offset='1' stop-color='#31D366' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_11_411'
          x1='20'
          y1='11.3332'
          x2='5.33337'
          y2='11.3332'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#5495FC' />
          <stop offset='1' stop-color='#31D366' />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default NavPlantIcon
