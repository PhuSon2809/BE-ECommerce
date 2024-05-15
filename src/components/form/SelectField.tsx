import { Fragment } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'

import { OptionSelect } from '~/@types/common'
import images from '~/assets'

interface SelectFieldProps {
  name: string
  label?: string
  rules?: Record<string, unknown>
  options: OptionSelect[]
  width?: string
  disabled?: boolean
  fullWidth?: boolean
  className?: string | null
  required?: boolean
  helperText?: string
  placeholder?: string
}

function SelectField({
  name,
  label,
  rules = {},
  options = [],
  width,
  disabled = false,
  fullWidth = false,
  helperText,
  placeholder
}: SelectFieldProps) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      defaultValue={''}
      render={({ field, fieldState }) => {
        return (
          <div className={`flex flex-col gap-1 ${fullWidth ? 'w-full' : 'w-[350px]'} ${width ? width : ''}`}>
            {label && (
              <label htmlFor={name} className='text-[20px] font-customSemiBold capitalize'>
                {label}
              </label>
            )}

            <Listbox
              disabled={disabled}
              value={field.value}
              onChange={(value) => {
                field.onChange(value?.value)
              }}
            >
              {({ open }) => (
                <div className='relative'>
                  <ListboxButton className='relative w-full h-[52px] rounded-[32px] bg-white py-1.5 pl-3 pr-10 shadow-sm ring-1 ring-inset ring-blackMain/[.22] focus:outline-none focus:ring-[1.5px] focus:ring-blackMain/[.44] hover:ring-[1.5px] hover:ring-blackMain/[.44]'>
                    <span className='flex items-center'>
                      <span
                        className={`ml-3 block truncate ${field.value ? 'text-blackMain' : 'text-blackMain/[.64]'}`}
                      >
                        {field.value
                          ? options.find((o) => o.value === field.value)?.label
                          : placeholder
                            ? placeholder
                            : 'Select'}
                      </span>
                    </span>
                    <span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-3'>
                      <img src={images.icons.chevron_bot} alt='icon-arrow' />
                    </span>
                  </ListboxButton>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <ListboxOptions className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                      {options.map((option) => (
                        <ListboxOption
                          key={option.value}
                          value={option}
                          className={`relative select-none py-2 pl-3 pr-9 ${option.value === field.value ? 'bg-blackMain/[.20] text-white' : ''} hover:bg-blackMain/[.30] hover:text-white transition-colors ease-in-out duration-300`}
                        >
                          <span
                            className={`block truncate tracking-wide ${option.value === field.value ? 'font-customSemiBold' : 'font-customRegular'}`}
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

            {helperText && (
              <div className='h-[18px]'>
                <p className='mt-2 text-[14px] text-gray-400'>{helperText}</p>
              </div>
            )}
            <div className='h-[18px]'>
              <p className='mt-2 text-[14px] text-red-500'>{fieldState.error && fieldState.error.message}</p>
            </div>
          </div>
        )
      }}
    />
  )
}

export default SelectField
