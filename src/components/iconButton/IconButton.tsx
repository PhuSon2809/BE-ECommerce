/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react'

type IconButtonProps = {
  children: ReactNode
  title?: string
  color?: 'default' | 'white'
  variant?: 'container' | 'outline'
  size?: '32' | '40' | '48' | '50' | '52' | '54' | '56' | '60' | '64'
  shadow?: boolean
  disabled?: boolean
  className?: string
  onClick?: any
}

function IconButton({
  children,
  title,
  size = '52',
  color = 'default',
  variant = 'container',
  shadow = false,
  disabled,
  className,
  onClick
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${
          size === '32'
            ? `${title ? 'px-[18px] h-8' : 'size-8'}`
            : size === '40'
              ? `${title ? 'px-[18px] h-10' : 'size-10'}`
              : size === '48'
                ? `${title ? 'px-[18px] h-[48px]' : 'size-[48px]'}`
                : size === '52'
                  ? `${title ? 'px-[20px] h-[52px]' : 'size-[52px]'}`
                  : size === '54'
                    ? `${title ? 'px-[22px] h-[54px]' : 'size-[54px]'}`
                    : size === '56'
                      ? `${title ? 'px-6 h-[56px]' : 'size-[56px]'}`
                      : size === '60'
                        ? `${title ? 'px-[26px] h-[60px]' : 'size-[60px]'}`
                        : `${title ? 'px-7 h-16' : 'size-16'}`
        }
        ${color === 'default' && variant === 'container' ? 'bg-greyMain' : color === 'default' && variant === 'outline' ? 'bg-transparent' : 'bg-white/[.44]'} 
        ${color === 'default' && variant === 'container' ? 'hover:bg-gray-200/[.60]' : 'hover:bg-white'} 
        ${variant === 'outline' && color === 'white' ? 'border-blackMain border-2 border-solid' : variant === 'outline' && color === 'default' ? 'border-blackMain/[.22] border-2 border-solid' : ''} 
        ${shadow && 'shadow-icon-button'} 
        flex items-center ${title ? 'gap-2' : 'justify-center'} rounded-full backdrop-blur-2xl transition ease-in-out duration-300
        ${className}
      `}
    >
      {children} {title && <p className='text-[18px] leading-[18.9px]'>{title}</p>}
    </button>
  )
}

export default IconButton
