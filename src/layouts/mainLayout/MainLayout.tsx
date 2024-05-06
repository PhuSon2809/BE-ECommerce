import { ReactNode } from 'react'
import { Header } from '~/layouts/components/header'

type MainLayoutProps = { children: ReactNode }

function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className='p-1'>
      <Header />
      {children}
    </main>
  )
}

export default MainLayout
