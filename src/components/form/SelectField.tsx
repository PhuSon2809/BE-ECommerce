import { Controller, useFormContext } from 'react-hook-form'

interface Option<T> {
  label: string
  value: T
}

interface SelectFieldProps<T> {
  name: string
  label?: string
  options?: Option<T>[]
  children?: React.ReactNode
  fullWidth?: boolean
  rules?: Record<string, unknown>
  disabled?: boolean
  className?: string | null
  required?: boolean
  helperText?: string
  width?: string
}

function SelectField<T extends string | number>({
  name,
  label,
  options = [],
  children = null,
  fullWidth = false,
  width,
  rules = {},
  disabled = false,
  required = false,
  className = null,
  helperText,
  ...props
}: SelectFieldProps<T>) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      defaultValue={''}
      render={({ field, fieldState }) => (
        <div className={`flex flex-col gap-1 ${fullWidth ? 'w-full' : 'w-[350px]'} ${width ? width : ''}`}>
          {label && (
            <label htmlFor={name} className='text-[20px] font-customSemiBold capitalize'>
              {label}
            </label>
          )}

          <div
            className={`w-full h-[52px] border-[1px] border-solid border-blackMain/[.22] rounded-[30px] px-5 pb-[2px] ${className}`}
          >
            <select
              {...field}
              {...props}
              id={name}
              value={field.value}
              disabled={disabled}
              required={required}
              className={`w-full h-full`}
            >
              {children ??
                options?.map(({ label, value }) => (
                  <option value={value} key={`${value}`}>
                    {label}
                  </option>
                ))}
              {!children && !options?.length && (
                <option value='' disabled key={`${name}-select-empty`}>
                  Select
                </option>
              )}
              <option value='' key={`${name}-select-empty`} className='!hover:bg-slate-400'>
                Select
              </option>
              <option value='' key={`${name}-select-empty`}>
                Select
              </option>
              <option value='' key={`${name}-select-empty`}>
                Select
              </option>
            </select>
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

export default SelectField
