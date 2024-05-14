import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  type?: 'button' | 'reset' | 'submit' | undefined
  className?: string
  classNameText?: string
  fullWidth?: boolean
  shadow?: boolean
  variant?: 'container' | 'outline' | 'linear'
  size?: 'small' | 'medium' | 'large'
  onClick?: () => void
}

function Button({
  children,
  type = 'button',
  className,
  classNameText,
  fullWidth,
  shadow,
  variant = 'container',
  size = 'medium',
  onClick
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`
        ${size === 'small' ? `${fullWidth ? 'w-full' : 'w-[120px]'} h-[40px]` : size === 'medium' ? `${fullWidth ? 'w-full' : 'w-[165px]'} h-[48px]` : `${fullWidth ? 'w-full' : 'w-[196px]'} h-[52px]`}
        ${variant === 'container' ? 'bg-blackMain text-white' : variant === 'outline' ? 'text-blackMain bg-transparent border-solid border-blackMain border-[2px]' : 'bg-gradient-to-r from-greenMain to-blueMain'} 
        text-[20px] rounded-3xl ${shadow ? 'shadow-button' : ''} ${className} hover:shadow-avatar transition-all duration-200 ease-in-out 
      `}
      onClick={onClick}
    >
      <p className={`font-customSemiBold leading-none capitalize mb-[2px] ${classNameText}`}>{children}</p>
    </button>
  )
}

export default Button
