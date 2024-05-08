/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react'

type IconButtonProps = {
  children: ReactNode
  title?: string
  size?: '32' | '48' | '56' | '52' | '60' | '64'
  variant?: 'container' | 'outline'
  color?: 'default' | 'white'
  shadow?: boolean
  onClick?: any
}

function IconButton({
  children,
  title,
  size = '52',
  variant = 'container',
  color = 'default',
  shadow = false,
  onClick
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        ${size === '32' ? `${title ? 'w-fit px-[18px]' : 'size-8'}` : size === '48' ? `${title ? 'w-fit px-[20.49px]' : 'size-12'}` : size === '56' ? `${title ? 'w-fit px-[25px]' : 'size-[56px]'}` : size === '52' ? `${title ? 'w-fit px-6' : 'size-[52px]'}` : size === '60' ? `${title ? 'w-fit px-7' : 'size-[60px]'}` : `${title ? 'w-fit px-7' : 'size-16'}`}
        ${color === 'default' ? 'bg-greyMain' : 'bg-white/[.44]'} 
        ${color === 'default' ? 'hover:bg-gray-200/[.70]' : 'hover:bg-white'} 
        ${variant === 'outline' ? 'border-2 border-blackMain border-solid' : ''} 
        ${shadow && 'shadow-[0px_0px_77.42px_0px_#0000000D]'} 
        flex items-center ${title ? 'gap-2' : 'justify-center'} rounded-full backdrop-blur-2xl 
      `}
    >
      {children} {title && <p className='text-[18px] leading-[18.9px]'>{title}</p>}
    </button>
  )
}

export default IconButton
