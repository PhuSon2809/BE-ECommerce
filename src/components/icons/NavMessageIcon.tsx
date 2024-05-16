const NavMessageIcon = ({ color }: { color: string }) => {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clip-path='url(#clip0_614_110)'>
        <mask
          id='mask0_614_110'
          style={{ maskType: 'luminance' }}
          maskUnits='userSpaceOnUse'
          x='0'
          y='0'
          width='24'
          height='24'
        >
          <path d='M24 0H0V24H24V0Z' fill='white' />
          <path
            d='M21.6615 10.3644C21.6615 5.02863 17.336 0.703159 12.0002 0.703159C6.66439 0.703159 2.33887 5.02863 2.33887 10.3644C2.33887 15.7003 6.66439 20.0257 12.0002 20.0257V22.6484C12.0002 22.6484 16.7412 19.2827 18.982 17.0418C20.6797 15.3441 21.6615 12.9549 21.6615 10.3644Z'
            fill='white'
          />
          <path
            d='M6.05176 10.3644C6.05176 7.07945 8.71477 4.41644 11.9998 4.41644C15.2847 4.41644 17.9478 7.07945 17.9478 10.3644C17.9478 13.6494 15.2847 16.3124 11.9998 16.3124C8.71477 16.3124 6.05176 13.6494 6.05176 10.3644Z'
            fill='white'
          />
          <path
            d='M11.2914 9.32047H12.7083V13.3623H11.2914V9.32047ZM11.1348 8.11987C11.1348 7.69481 11.4778 7.36668 11.9998 7.36668C12.5218 7.36668 12.8648 7.67245 12.8648 8.09751C12.8648 8.54493 12.5218 8.87305 11.9998 8.87305C11.4778 8.87305 11.1348 8.54493 11.1348 8.11987Z'
            fill='black'
          />
        </mask>
        <g mask='url(#mask0_614_110)'>
          <mask
            id='mask1_614_110'
            style={{ maskType: 'luminance' }}
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='24'
            height='24'
          >
            <path d='M0 7.05719e-05H23.9999V24H0V7.05719e-05Z' fill='white' />
          </mask>
          <g mask='url(#mask1_614_110)'>
            <path
              d='M21.6615 10.3645C21.6615 5.02866 17.336 0.70319 12.0002 0.70319C6.66439 0.70319 2.33887 5.02866 2.33887 10.3645C2.33887 15.7003 6.66439 20.0258 12.0002 20.0258V22.6484C12.0002 22.6484 16.7412 19.2827 18.982 17.0418C20.6797 15.3442 21.6615 12.955 21.6615 10.3645Z'
              fill={color}
            />
            <path
              d='M6.05225 10.3645C6.05225 7.07948 8.71525 4.41647 12.0002 4.41647C15.2852 4.41647 17.9483 7.07948 17.9483 10.3645C17.9483 13.6495 15.2852 16.3125 12.0002 16.3125C8.71525 16.3125 6.05225 13.6495 6.05225 10.3645Z'
              fill={color}
            />
            <path
              d='M11.2919 9.32047H12.7087V13.3623H11.2919V9.32047ZM11.1353 8.11987C11.1353 7.69481 11.4783 7.36668 12.0003 7.36668C12.5223 7.36668 12.8653 7.67245 12.8653 8.09751C12.8653 8.54493 12.5223 8.87305 12.0003 8.87305C11.4783 8.87305 11.1353 8.54493 11.1353 8.11987Z'
              fill='white'
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id='clip0_614_110'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default NavMessageIcon
