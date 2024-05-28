const CloseIcon = ({ color = 'black', className }: { color?: string; className?: string }) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_775_1300)'>
        <path
          d='M0.976745 20C0.783573 20 0.594729 19.9428 0.434101 19.8355C0.273472 19.7282 0.148276 19.5756 0.074347 19.3972C0.000418327 19.2187 -0.0189212 19.0223 0.0187748 18.8328C0.0564707 18.6434 0.149509 18.4694 0.28612 18.3328L18.333 0.285914C18.5162 0.102749 18.7646 -0.000152588 19.0236 -0.000152588C19.2827 -0.000152588 19.5311 0.102749 19.7142 0.285914C19.8974 0.469079 20.0003 0.717504 20.0003 0.976539C20.0003 1.23557 19.8974 1.484 19.7142 1.66716L1.66737 19.714C1.57676 19.8048 1.4691 19.8768 1.35058 19.9259C1.23207 19.975 1.10502 20.0001 0.976745 20Z'
          fill={color}
        />
        <path
          d='M19.0236 20C18.8953 20.0001 18.7682 19.975 18.6497 19.9259C18.5312 19.8768 18.4235 19.8048 18.3329 19.714L0.286066 1.66716C0.102901 1.484 0 1.23557 0 0.976539C0 0.717504 0.102901 0.469079 0.286066 0.285914C0.469231 0.102749 0.717657 -0.000152588 0.976691 -0.000152588C1.23573 -0.000152588 1.48415 0.102749 1.66732 0.285914L19.7142 18.3328C19.8508 18.4694 19.9438 18.6434 19.9815 18.8328C20.0192 19.0223 19.9999 19.2187 19.926 19.3972C19.852 19.5756 19.7268 19.7282 19.5662 19.8355C19.4056 19.9428 19.2167 20 19.0236 20Z'
          fill={color}
        />
      </g>
      <defs>
        <clipPath id='clip0_775_1300'>
          <rect width='20' height='20' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default CloseIcon
