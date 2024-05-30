import { useRef } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import Slider from 'react-slick'

import images from '~/assets'
import { IconButton } from '~/components/iconButton'

interface RadioWalletGroupFieldProps {
  name: string
  rules?: Partial<Record<string, unknown>>
  disabled?: boolean
  required?: boolean
  className?: string | null
  helperText?: string
  defaultValue?: string
  options: { value: number; cardId: string; nameCard: string; balance: string }[]
}

function RadioWalletGroupField({
  name,
  rules = {},
  disabled = false,
  required = false,
  helperText,
  defaultValue = '',
  options
}: RadioWalletGroupFieldProps) {
  const sliderRef = useRef<Slider>(null)
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field, fieldState }) => {
        return (
          <div className={`flex flex-col gap-1`}>
            <div className='flex items-center gap-5'>
              <IconButton size='48' onClick={() => sliderRef.current?.slickPrev()} className='xs:hidden sm:flex'>
                <img src={images.icons.arrow_left} alt='arrow-left' />
              </IconButton>
              <div className='xs:w-[358px] sm:w-[500px]'>
                <Slider ref={sliderRef} infinite arrows={false} slidesToShow={1} slidesToScroll={1}>
                  {options.map((option) => (
                    <div
                      key={option.value}
                      className='xs:w-full sm:w-[469px] xs:h-[190px] sm:h-[280px] relative xs:rounded-[15.16px] sm:rounded-[22.4px] overflow-hidden bg-gradient-to-r from-greenMain to-blueMain'
                    >
                      <div className='h-full xs:p-5 sm:p-6 absolute inset-0 z-10 text-white flex flex-col justify-between'>
                        <div>
                          <div className='xs:text-[14px] sm:text-[22px] font-customSemiBold uppercase'>
                            {option.nameCard}
                          </div>
                          <div className='text-white/[68%] xs:text-[16px] sm:text-[20px] font-customMedium xs:mt-1 sm:mt-5'>
                            {option.cardId}
                          </div>
                        </div>
                        <div className='xs:text-[26px] sm:text-[40px] font-customSemiBold text-white'>
                          ${option.balance}
                        </div>
                      </div>
                      <img
                        src={images.image.line_group}
                        alt='line-group'
                        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                      />
                      <input
                        {...field}
                        type='radio'
                        required={required}
                        disabled={disabled}
                        value={option.value}
                        onChange={(e) => {
                          const value = e.target.value.trimStart()
                          field.onChange(value)
                        }}
                        checked={parseInt(field.value) === option.value}
                        className='appearance-none size-6 flex items-center justify-center border-[2px] border-solid rounded-full checked:bg-blackMain
                                  checked:after:content-[" "] checked:after:block checked:after:w-[6px] checked:after:h-[12px] checked:after:border-r-[2px] checked:after:border-b-[2px] 
                                  checked:after:border-solid checked:after:border-white checked:after:rotate-[45deg] checked:after:absolute checked:after:top-[3.5px] checked:after:left-[8px] hover:shadow-avatar transition-all duration-300 ease-linear cursor-pointer absolute top-[8%] right-[4%] z-20'
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <IconButton size='48' onClick={() => sliderRef.current?.slickNext()} className='xs:hidden sm:flex'>
                <img src={images.icons.arrow_right} alt='arrow-right' />
              </IconButton>
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
        )
      }}
    />
  )
}

export default RadioWalletGroupField
