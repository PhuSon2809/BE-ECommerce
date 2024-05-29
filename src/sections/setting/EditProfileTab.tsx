import { FormProvider, useForm } from 'react-hook-form'
import { LIST_GENDER_OPTIONS } from '~/@types/listOptionCommon'
import { UpdateProfileForm } from '~/@types/models'
import { Button } from '~/components/button'
import { InputField, SelectField } from '~/components/form'
import DatePickerField from '~/components/form/DatePickerField'
import { EditIcon, LocationIcon } from '~/components/icons'
import useResponsive from '~/hooks/useResponsive'

function EditProfileTab() {
  const smDown = useResponsive('down', 'sm')

  const updateProfileForm = useForm<UpdateProfileForm>({})

  const { handleSubmit } = updateProfileForm

  const handleUpdateProfile = (values: UpdateProfileForm) => {
    console.log(values)
  }

  return (
    <div className='w-full space-y-10'>
      <div className='flex flex-col items-center gap-4'>
        <img
          className='xs:size-20 sm:size-[96px] rounded-full shadow-avatar'
          src='https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
          alt='Image Description'
        />
        <p className='xs:text-[14px] sm:text-[16px] text-blackMain/[.44] underline cursor-pointer'>Change photo</p>
      </div>
      <FormProvider {...updateProfileForm}>
        <div className='space-y-2'>
          <div className='flex xs:flex-col sm:flex-col md:flex-row items-center xs:gap-2 sm:gap-3 md:gap-3 lg:gap-4'>
            <InputField
              fullWidth
              size='small'
              variant='container'
              name='fullName'
              label='Full Name'
              placeholder='Enter your full name'
              rightIcon={<EditIcon />}
              classNameLabel='mb-2'
            />
            <SelectField
              fullWidth
              size='small'
              variant='container'
              name='gender'
              label='Gender'
              options={LIST_GENDER_OPTIONS}
              placeholder='Select your gender'
              classNameLabel='mb-2'
            />
            <DatePickerField
              fullWidth
              size='small'
              variant='container'
              name='dateOfBirth'
              label='Date Of Birth'
              placeholder='Select date of birth'
              rightIcon={<EditIcon />}
              classNameLabel='mb-2'
            />
          </div>
          <div className='flex xs:flex-col sm:flex-col md:flex-row items-center xs:gap-2 sm:gap-3 md:gap-3 lg:gap-4'>
            <InputField
              fullWidth
              size='small'
              variant='container'
              name='email'
              label='Email'
              placeholder='Enter your email'
              rightIcon={<EditIcon />}
              classNameLabel='mb-2'
            />
            <InputField
              fullWidth
              size='small'
              variant='container'
              name='phoneNumber'
              label='Phone Number'
              placeholder='Enter your phone number'
              rightIcon={<EditIcon />}
              classNameLabel='mb-2'
            />
          </div>

          <div className='flex xs:flex-col sm:flex-col md:flex-row items-end justify-between gap-10'>
            <div>
              <label className={`text-[16px] font-customSemiBold capitalize`}>My Address</label>
              <div className='flex xs:items-start sm:items-start md:items-center gap-2 mt-3'>
                <div className='min-w-12 min-h-12 rounded-full bg-[#4182F9]/[.1] flex items-center justify-center '>
                  <LocationIcon color='#4182F9' />
                </div>
                <div className='flex items-start gap-2'>
                  <div className='xs:space-y-2 sm:space-y-0'>
                    <p className='xs:text-[16px] sm:text-[18px] font-customMedium'>
                      123 Main Street, Springfield, IL 62701, USA
                    </p>
                    <p className='xs:text-[14px] sm:text-[16px] text-blackMain/[.5]'>Default address</p>
                  </div>
                  <div>
                    <EditIcon className='xs:size-[18px] sm:size-5 mt-1' />
                  </div>
                </div>
              </div>

              <button className='xs:w-[173px] sm:w-[209px] xs:h-[38px] sm:h-11 xs:text-[14px] sm:text-[16px] bg-[#4182F9]/[.1] text-[#4182F9] rounded-lg mt-5'>
                +Add new address
              </button>
            </div>
            <div className='w-full flex items-center gap-3'>
              <Button
                fullWidth={smDown}
                variant='outline'
                className='xs:w-full sm:w-[180px] xs:h-[42px] sm:h-12 rounded-[26px]'
                classNameText='xs:text-[16px] sm:text-[18px] !uppercase'
              >
                Cancel
              </Button>
              <Button
                fullWidth={smDown}
                className='xs:w-full sm:w-[180px] xs:h-[42px] sm:h-12 rounded-[26px]'
                classNameText='xs:text-[16px] sm:text-[18px] !uppercase'
                onClick={handleSubmit(handleUpdateProfile)}
              >
                Update
              </Button>
            </div>
          </div>
        </div>
      </FormProvider>
    </div>
  )
}

export default EditProfileTab
