import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  className?: string
  fullWidth?: boolean
  variant?: 'container' | 'outline'
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
}

function Button({ children, className, fullWidth, variant = 'container', size = 'medium', onClick }: ButtonProps) {
  return (
    <button
      className={`
        ${size === 'small' ? `${fullWidth ? 'w-full' : 'w-[120px]'} h-[40px]` : size === 'medium' ? `${fullWidth ? 'w-full' : 'w-[165px]'} h-[48px]` : `${fullWidth ? 'w-full' : 'w-[196px]'} h-[52px]`}
        ${variant === 'container' ? 'bg-blackMain text-white' : 'text-blackMain bg-transparent border-solid border-blackMain border-[2px]'} 
        text-[20px] rounded-3xl ${className}
      `}
      onClick={onClick}
    >
      <p className='font-customSemiBold leading-none capitalize mb-[2px]'>{children}</p>
    </button>
  )
}

export default Button
