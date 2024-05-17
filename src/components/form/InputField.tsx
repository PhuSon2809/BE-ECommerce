import { ReactNode } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

interface InputFieldProps {
  name: string
  label?: string
  type?: string
  rules?: Partial<Record<string, unknown>>
  defaultValue?: string
  disabled?: boolean
  placeholder?: string
  width?: string
  fullWidth?: boolean
  className?: string | null
  helperText?: string
  required?: boolean
  rightIcon?: ReactNode
}

function InputField({
  name,
  label = '',
  type = 'text',
  rules = {},
  defaultValue = '',
  placeholder = '',
  width,
  disabled = false,
  fullWidth = false,
  className = null,
  required = false,
  helperText,
  rightIcon
}: InputFieldProps) {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => (
        <div className={`flex flex-col gap-1 ${fullWidth ? 'w-full' : 'w-[350px]'} ${width ? width : ''}`}>
          <label htmlFor={name} className='text-[20px] font-customSemiBold capitalize'>
            {label}
          </label>
          <div className='relative'>
            <input
              {...field}
              id={name}
              type={type}
              required={required}
              disabled={disabled}
              placeholder={placeholder}
              className={`w-full h-[52px] border-[1px] border-solid border-blackMain/[.22] rounded-[30px] px-5 pb-[2px] focus:ring-[1.5px] focus:ring-blackMain/[.30] hover:ring-[1.5px] hover:ring-blackMain/[.30] transition-colors ease-in-out duration-300 ${className}`}
              onChange={(e) => {
                const value = e.target.value
                field.onChange(value)
              }}
            />
            <div className='absolute top-1/2 right-[25px] transform -translate-y-1/2 pointer-events-none'>
              {rightIcon}
            </div>
          </div>
          {helperText && (
            <div className='h-[18px]'>
              <p className='mt-2 text-[14px] text-gray-400'>{helperText}</p>
            </div>
          )}
          <div className='h-[18px]'>
            <p className='mt-2 text-[14px] text-red-500'>{fieldState.error && fieldState.error.message}</p>
          </div>
        </div>
      )}
    />
  )
}

export default InputField
