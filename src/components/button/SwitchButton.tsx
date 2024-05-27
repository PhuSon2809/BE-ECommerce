type SwitchButtonProps = { label?: string; isChecked?: boolean; handleOnChange?: () => void }

function SwitchButton({ label, isChecked, handleOnChange }: SwitchButtonProps) {
  return (
    <>
      <label className='relative inline-flex cursor-pointer select-none items-center'>
        <input type='checkbox' name='autoSaver' className='sr-only' checked={isChecked} onChange={handleOnChange} />
        <span
          className={`flex h-[28px] w-[52px] items-center rounded-full px-1 duration-200 ${
            isChecked ? 'bg-white' : 'bg-[#CCCCCE]'
          }`}
        >
          <span
            className={`dot w-[22px] h-[22px] rounded-full  duration-200 ${isChecked ? 'translate-x-6 bg-greenMain' : 'bg-white'}`}
          ></span>
        </span>
        {label && <span className='flex items-center text-sm font-medium text-black ml-3'>{label}</span>}
      </label>
    </>
  )
}

export default SwitchButton
