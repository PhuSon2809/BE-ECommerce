import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  className?: string
}

function Button({ children, className }: ButtonProps) {
  return <button className={`bg-blackMain text-white font-semibold rounded-3xl ${className}`}>{children}</button>
}

export default Button
