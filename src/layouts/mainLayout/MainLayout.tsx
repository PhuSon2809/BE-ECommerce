import { ReactNode, useEffect, useRef, useState } from 'react'
import images from '~/assets'

import { ChatSupport } from '~/components/chatSupport'
import { IconButton } from '~/components/iconButton'
import { Footer } from '~/layouts/components/footer'

type MainLayoutProps = { children: ReactNode }

function MainLayout({ children }: MainLayoutProps) {
  const [showChat, setShowChat] = useState<boolean>(false)
  const chatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setShowChat(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <main>
      {/* <Header /> */}
      <div className='container'>{children}</div>
      <Footer />

      <div
        ref={chatRef}
        className={`fixed bottom-[14%] right-[4%] transition-all ease-in-out duration-500 flex flex-col items-end gap-[20px] ${showChat ? 'scale-100 ' : 'scale-0 origin-bottom-right'}`}
      >
        <ChatSupport />
      </div>

      <IconButton
        color='white'
        className='fixed bottom-[4%] right-[4%] !bg-white hover:border-greenMain hover:border-[2px] hover:border-solid transition-all ease-in-out duration-500 hover:scale-110'
        onClick={() => setShowChat(showChat ? false : true)}
      >
        <img src={images.icons.chat} alt='icon-chat' />
      </IconButton>
    </main>
  )
}

export default MainLayout
