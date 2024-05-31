import { useEffect, useRef, useState } from 'react'

import images from '~/assets'
import useRouteElements from '~/hooks/useRouteElements'
import { ChatSupport } from '~/components/chatSupport'
import { IconButton } from '~/components/iconButton'

function App() {
  const routeElements = useRouteElements()

  const [showChat, setShowChat] = useState<boolean>(false)
  const chatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setShowChat(false)
      }
    }

    if (showChat) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [showChat])

  return (
    <>
      {routeElements}

      <div
        ref={chatRef}
        className={`w-full fixed bottom-[14%] right-[4%] transition-all ease-in-out duration-500 flex flex-col items-end gap-[20px] ${showChat ? 'scale-100 ' : 'scale-0 origin-bottom-right'}`}
      >
        <ChatSupport />
      </div>

      <IconButton
        color='white'
        className='fixed bottom-[4%] right-[4%] !bg-white hover:border-greenMain hover:border-[2px] hover:border-solid transition-all ease-in-out duration-500 hover:scale-110 z-50'
        onClick={() => setShowChat(!showChat)}
      >
        <img src={images.icons.chat} alt='icon-chat' />
      </IconButton>
    </>
  )
}

export default App
