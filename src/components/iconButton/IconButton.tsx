/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react'

type IconButtonProps = {
  children: ReactNode
  title?: string
  leftTitle?: string
  color?: 'default' | 'white' | 'linear'
  variant?: 'container' | 'outline'
  size?: '28' | '32' | '36' | '40' | '44' | '48' | '50' | '52' | '54' | '56' | '60' | '64'
  shadow?: boolean
  disabled?: boolean
  className?: string
  onClick?: any
}

function IconButton({
  children,
  title,
  leftTitle,
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
          size === '28'
            ? `${title || leftTitle ? 'px-[16px] h-7' : 'size-7'}`
            : size === '32'
              ? `${title || leftTitle ? 'px-[18px] h-8' : 'size-8'}`
              : size === '36'
                ? `${title || leftTitle ? 'px-[16px] h-9' : 'size-9'}`
                : size === '40'
                  ? `${title || leftTitle ? 'px-[16px] h-10' : 'size-10'}`
                  : size === '44'
                    ? `${title || leftTitle ? 'px-[18px] h-11' : 'size-11'}`
                    : size === '48'
                      ? `${title || leftTitle ? 'px-[18px] h-[48px]' : 'size-[48px]'}`
                      : size === '52'
                        ? `${title || leftTitle ? 'px-[20px] h-[52px]' : 'size-[52px]'}`
                        : size === '54'
                          ? `${title || leftTitle ? 'px-[22px] h-[54px]' : 'size-[54px]'}`
                          : size === '56'
                            ? `${title || leftTitle ? 'px-6 h-[56px]' : 'size-[56px]'}`
                            : size === '60'
                              ? `${title || leftTitle ? 'px-[26px] h-[60px]' : 'size-[60px]'}`
                              : `${title || leftTitle ? 'px-7 h-16' : 'size-16'}`
        }
        ${
          color === 'default' && variant === 'container'
            ? 'bg-greyMain'
            : color === 'default' && variant === 'outline'
              ? 'bg-transparent'
              : color === 'linear' && variant === 'container'
                ? 'bg-gradient-to-br from-greenMain to-blueMain'
                : 'bg-white/[.44]'
        } 
        ${color === 'default' && variant === 'container' ? 'hover:bg-greyMain' : 'hover:bg-white'} 
        ${variant === 'outline' && color === 'white' ? 'border-blackMain border-2 border-solid' : variant === 'outline' && color === 'default' ? 'border-blackMain/[.22] border-2 border-solid' : ''} 
        ${shadow && 'shadow-icon-button'} 
        flex items-center ${title || leftTitle ? 'gap-2' : 'justify-center'} rounded-full backdrop-blur-2xl transition ease-in-out duration-300
        ${className}
      `}
    >
      {leftTitle && <p className='text-[18px] font-customRegular leading-[18.9px]'>{leftTitle}</p>} {children}{' '}
      {title && <p className='text-[18px] font-customRegular leading-[18.9px]'>{title}</p>}
    </button>
  )
}

export default IconButton
