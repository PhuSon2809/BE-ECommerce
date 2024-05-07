import { ReactNode } from 'react'

import { Footer } from '~/layouts/components/footer'
import { Header } from '~/layouts/components/header'

type MainLayoutProps = { children: ReactNode }

function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className='p-4'>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default MainLayout
