type SwitchButtonProps = { label?: string; isChecked?: boolean; handleOnChange?: () => void }

function SwitchButton({ label, isChecked, handleOnChange }: SwitchButtonProps) {
  return (
    <>
      <label className='relative inline-flex cursor-pointer select-none items-center'>
        <input type='checkbox' name='autoSaver' className='sr-only' checked={isChecked} onChange={handleOnChange} />
        <span
          className={`flex xs:h-[22px] sm:h-[28px] xs:w-[40px] sm:w-[52px] items-center rounded-full px-1 duration-200 ${
            isChecked ? 'bg-white' : 'bg-[#CCCCCE]'
          }`}
        >
          <span
            className={`dot xs:w-[16px] xs:h-[16px] sm:w-[22px] sm:h-[22px] rounded-full duration-200 ${isChecked ? 'xs:translate-x-4 sm:translate-x-6 bg-greenMain' : 'bg-white'}`}
          ></span>
        </span>
        {label && <span className='flex items-center text-sm font-medium text-black ml-3'>{label}</span>}
      </label>
    </>
  )
}

export default SwitchButton
