import { ReactNode } from 'react'

type IconButtonProps = {
  children: ReactNode
  title?: string
  size?: '48' | '52' | '60'
  variant?: 'container' | 'outline'
  color?: 'default' | 'white'
  shadow?: boolean
}

function IconButton({
  children,
  title,
  size = '52',
  variant = 'container',
  color = 'default',
  shadow = false
}: IconButtonProps) {
  return (
    <button
      className={`
        ${size === '48' ? `${title ? 'w-fit px-[20.49px]' : 'w-12'} h-12` : size === '52' ? `${title ? 'w-fit px-6' : 'w-[52px]'} h-[52px]` : `${title ? 'w-fit px-7' : 'w-[60px]'} h-[60px]`}
        ${color === 'default' ? 'bg-greyMain' : 'bg-white/[.44]'} 
        ${variant === 'outline' && 'border-2'} 
        ${shadow && 'border-2'} 
        flex items-center ${title ? 'gap-2' : 'justify-center'}  rounded-full
      `}
    >
      {children} {title && <p className='text-[18px] leading-[18.9px]'>{title}</p>}
    </button>
  )
}

export default IconButton
