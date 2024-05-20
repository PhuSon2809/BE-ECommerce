import { InputField, SelectField, TextareaField } from '~/components/form'

const people = [
  {
    value: 1,
    label: 'Wade Cooper'
  },
  {
    value: 2,
    label: 'Arlene Mccoy'
  },
  {
    value: 3,
    label: 'Devon Webb'
  },
  {
    value: 4,
    label: 'Tom Cook'
  },
  {
    value: 5,
    label: 'Tanya Fox'
  },
  {
    value: 6,
    label: 'Hellen Schmvaluet'
  },
  {
    value: 7,
    label: 'Caroline Schultz'
  },
  {
    value: 8,
    label: 'Mason Heaney'
  },
  {
    value: 9,
    label: 'Claudie Smitham'
  },
  {
    value: 10,
    label: 'Emil Schaefer'
  }
]

type ShippingInfoFormProps = {
  disabled?: boolean
}

function ShippingInfoForm({ disabled }: ShippingInfoFormProps) {
  return (
    <div>
      <div className='w-full flex items-center gap-5'>
        <InputField
          fullWidth
          name={disabled ? '' : 'firstName'}
          label='First Name'
          placeholder='Enter your first name'
          disabled={disabled}
        />
        <InputField
          fullWidth
          name={disabled ? '' : 'lastName'}
          label='Last Name'
          placeholder='Enter your last name'
          disabled={disabled}
        />
      </div>
      <div className='w-full flex items-center gap-5'>
        <InputField fullWidth name='email' label='Email' placeholder='example@gmail.com' disabled={disabled} />
        <SelectField
          fullWidth
          options={people}
          label='Country'
          name={disabled ? '' : 'countryId'}
          placeholder='Select your country'
          disabled={disabled}
        />
      </div>
      <div className='w-full flex items-center gap-5'>
        <SelectField fullWidth options={people} name={disabled ? '' : 'city'} label='City' disabled={disabled} />
        <SelectField
          fullWidth
          options={people}
          name={disabled ? '' : 'province'}
          label='State/Province'
          disabled={disabled}
        />
      </div>
      <div className='w-full flex items-center gap-5'>
        <InputField
          fullWidth
          name={disabled ? '' : 'postalCode'}
          label='Postal code'
          placeholder='Enter postal code'
          disabled={disabled}
        />
        <InputField
          fullWidth
          name={disabled ? '' : 'phoneNumber'}
          label='Phone Number'
          placeholder='Enter your phone number'
          disabled={disabled}
        />
      </div>
      <TextareaField
        fullWidth
        name={disabled ? '' : 'addressDetail'}
        label='Address detail'
        placeholder='Enter your address'
        disabled={disabled}
      />
    </div>
  )
}

export default ShippingInfoForm
