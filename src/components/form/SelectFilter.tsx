/* eslint-disable @typescript-eslint/no-explicit-any */
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { Dispatch, Fragment, SetStateAction } from 'react'
import { OptionSelect } from '~/@types/common'
import { ChevronDown, SortIcon } from '~/components/icons'

type SelectFilterProps = {
  label?: string
  className?: string
  isSortBy?: boolean
  options: OptionSelect[]
  selected: OptionSelect
  setSelected: Dispatch<SetStateAction<OptionSelect>>
}

function SelectFilter({ label, className, isSortBy = false, options, selected, setSelected }: SelectFilterProps) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <div className='relative'>
          <ListboxButton
            className={`relative xs:min-w-[130px] sm:min-w-[180px] min-h-10 rounded-md bg-white py-1.5 pl-3 xs:pr-8 sm:pr-10 text-left shadow-sm ring-1 ring-inset ring-blackMain/[.22] focus:ring-[1.5px] focus:ring-blackMain/[.30] hover:ring-[1.5px] hover:ring-blackMain/[.30] transition-colors ease-in-out duration-300 ${className}`}
          >
            <div className='flex items-center gap-2'>
              {isSortBy && (
                <>
                  <SortIcon className='xs:size-[18px] sm:size-5' />
                  <div className='h-6 border-0 border-r-[1px] border-solid border-blackMain/[.1]' />
                </>
              )}
              <span className='xs:text-[12px] sm:text-[14px] font-customRegular opacity-[.64] text-nowrap'>
                {label}:{' '}
                <span className='xs:text-[14px] sm:text-[16px] font-customSemiBold opacity-100 truncate'>
                  {selected.label}
                </span>
              </span>
            </div>
            <span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
              <ChevronDown className='size-4' />
            </span>
          </ListboxButton>

          <Transition
            show={open}
            as={Fragment}
            leave='transition ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <ListboxOptions className='absolute z-10 mt-1 max-h-56 w-full py-1 overflow-auto rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5'>
              {options.map((option) => (
                <ListboxOption
                  value={option}
                  key={option.value}
                  className={`${selected.value === option.value ? 'bg-greyMain' : 'bg-white'} hover:bg-greyMain cursor-pointer select-none py-2 pl-3 pr-9`}
                >
                  <span
                    className={`${selected.value === option.value ? 'font-customMedium' : 'font-customRegular'} block truncate`}
                  >
                    {option.label}
                  </span>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      )}
    </Listbox>
  )
}

export default SelectFilter
