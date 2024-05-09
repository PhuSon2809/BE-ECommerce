import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  className?: string
  variant?: 'container' | 'outline'
  onClick?: () => void
}

function Button({ children, className, variant = 'container', onClick }: ButtonProps) {
  return (
    <button
      className={`${variant === 'container' ? 'bg-blackMain' : 'bg-transparent'} ${variant === 'container' ? 'text-white' : 'text-blackMain'} ${variant === 'outline' ? 'border-solid border-blackMain border-[1px]' : ''}  font-semibold rounded-3xl ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
