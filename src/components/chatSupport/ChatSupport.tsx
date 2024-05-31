import images from '~/assets'

function ChatSupport() {
  return (
    <div
      className={`xs:w-[90%] sm:w-[430px] md:w-[430px] h-[540px] bg-white/[.88] backdrop-blur-2xl rounded-[32px] shadow-4xl flex flex-col`}
    >
      <div className='bg-greenMain h-[65.26px] px-5 flex items-center gap-2 rounded-tr-[32px] rounded-tl-[32px]'>
        <div className='size-[45px] rounded-full border-[1px] border-solid border-white flex items-center justify-center'>
          <img src={images.icons.bot_white} alt='bot-white' />
        </div>

        <div>
          <p className='text-[13px] text-white'>ChatBot</p>
          <div className='flex items-center gap-1'>
            <div className='size-[10px] bg-[#81C784] rounded-full border-[1px] border-solid border-white'></div>
            <p className='text-[13px] text-white'>online</p>
          </div>
        </div>
      </div>

      <div className='flex-1 flex flex-col justify-end gap-5 p-5'>
        <div className='flex items-center gap-5'>
          <div className='size-[45px] rounded-full bg-[#60EC8E]/[.3] flex items-center justify-center'>
            <img src={images.icons.bot_green} alt='bot-green' />
          </div>
          <p className='text-[15px]'>Hi, how can i help you?</p>
        </div>

        <div className='w-fit h-[28.55px] px-4 rounded-md bg-greenMain flex items-center ml-auto'>
          <p className='text-[15px] text-white'>How are you?</p>
        </div>

        <div className='flex items-center gap-5'>
          <div className='size-[45px] rounded-full bg-[#60EC8E]/[.3] flex items-center justify-center'>
            <img src={images.icons.bot_green} alt='bot-green' />
          </div>
          <p className='text-[15px]'>Fine thanks!</p>
        </div>

        <div className='w-fit h-[28.55px] px-4 rounded-md bg-greenMain flex items-center ml-auto'>
          <p className='text-[15px] text-white'>Where are you?</p>
        </div>

        <div className='flex items-center gap-5'>
          <div className='size-[45px] rounded-full bg-[#60EC8E]/[.3] flex items-center justify-center'>
            <img src={images.icons.bot_green} alt='bot-green' />
          </div>
          <p className='text-[15px]'>Im in Shamsipour Collage !</p>
        </div>
      </div>

      <div className='w-full p-3 px-5 flex items-center justify-between border-t-[1px] border-0 border-[#ACACAC] border-solid'>
        <p className='text-[#5E5E5E]'>Ask your question...</p>
        <img src={images.icons.send} alt='icon-send' />
      </div>
    </div>
  )
}

export default ChatSupport
