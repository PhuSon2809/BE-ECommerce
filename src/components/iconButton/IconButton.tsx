/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react'

type IconButtonProps = {
  children: ReactNode
  title?: string
  size?: '32' | '40' | '48' | '56' | '52' | '60' | '64'
  variant?: 'container' | 'outline'
  color?: 'default' | 'white'
  shadow?: boolean
  onClick?: any
  className?: string
  disabled?: boolean
}

function IconButton({
  children,
  title,
  size = '52',
  variant = 'container',
  color = 'default',
  shadow = false,
  onClick,
  className,
  disabled
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${size === '32' ? `${title ? 'w-fit px-[18px] h-8' : 'size-8'}` : size === '40' ? `${title ? 'w-fit px-[18px] h-10' : 'size-10'}` : size === '48' ? `${title ? 'px-[20.49px] h-12' : 'size-12'}` : size === '56' ? `${title ? 'w-fit px-[25px] h-[56px]' : 'size-[56px]'}` : size === '52' ? `${title ? 'w-fit px-6 h-[52px]' : 'size-[52px]'}` : size === '60' ? `${title ? 'w-fit px-7 h-[60px]' : 'size-[60px]'}` : `${title ? 'w-fit px-7 h-16' : 'size-16'}`}
        ${color === 'default' && variant === 'container' ? 'bg-greyMain' : color === 'default' && variant === 'outline' ? 'bg-transparent' : 'bg-white/[.44]'} 
        ${color === 'default' ? 'hover:bg-gray-200/[.70]' : 'hover:bg-white'} 
        ${variant === 'outline' && color === 'white' ? 'border-blackMain border-2 border-solid' : variant === 'outline' && color === 'default' ? 'border-blackMain/[.22] border-2 border-solid' : ''} 
        ${shadow && 'shadow-icon-button'} 
        flex items-center ${title ? 'gap-2' : 'justify-center'} rounded-full backdrop-blur-2xl 
        ${className}
      `}
    >
      {children} {title && <p className='text-[18px] leading-[18.9px]'>{title}</p>}
    </button>
  )
}

export default IconButton
