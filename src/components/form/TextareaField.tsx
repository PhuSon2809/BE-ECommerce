import { Controller, useFormContext } from 'react-hook-form'

interface TextareaFieldProps {
  name: string
  label?: string
  rows?: number
  rules?: Partial<Record<string, unknown>>
  defaultValue?: string
  disabled?: boolean
  placeholder?: string
  width?: string
  fullWidth?: boolean
  className?: string | null
  helperText?: string
  required?: boolean
}

function TextareaField({
  name,
  label = '',
  rows = 4,
  rules = {},
  defaultValue = '',
  placeholder = '',
  width,
  disabled = false,
  fullWidth = false,
  className = null,
  required = false,
  helperText
}: TextareaFieldProps) {
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
          <textarea
            {...field}
            id={name}
            rows={rows}
            required={required}
            disabled={disabled}
            placeholder={placeholder}
            className={`w-full border-[1px] border-solid border-blackMain/[.22] rounded-[26px] px-5 py-2 focus:ring-[1.5px] focus:ring-blackMain/[.44] hover:ring-[1.5px] hover:ring-blackMain/[.44] transition-colors ease-in-out duration-300 ${className}`}
            onChange={(e) => {
              const value = e.target.value.trimStart()
              field.onChange(value)
            }}
          />
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

export default TextareaField
