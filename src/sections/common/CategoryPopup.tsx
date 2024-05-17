import { Dispatch, SetStateAction } from 'react'
import { DialogCustom } from '~/components/dialog'
import SliderFeatureProduct from '~/sections/common/SliderFeatureProduct'

const listCategories = [
  {
    value: 'food1',
    label: 'Food 1'
  },
  {
    value: 'food2',
    label: 'Food 2'
  },
  {
    value: 'food3',
    label: 'Food 3'
  },
  {
    value: 'food4',
    label: 'Food 4'
  },
  {
    value: 'food5',
    label: 'Food 5'
  }
]

type CategoryPopupProps = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

function CategoryPopup({ open, setOpen }: CategoryPopupProps) {
  return (
    <section>
      <DialogCustom open={open} setOpen={setOpen} className=''>
        <div className='flex items-start gap-10'>
          <div className='w-[250px] flex flex-col gap-5'>
            <h5 className='text-[28px] font-customSemiBold'>Food</h5>
            <p className='w-[225px] text-[14px]'>
              From gourmet snacks to pantry staples, find everything you need to elevate your dining experience.
            </p>

            <div className='flex flex-col gap-3'>
              {listCategories.map((category) => (
                <div key={category.label} className='flex flex-col gap-3'>
                  <div>
                    <p className='text-[18px] font-customMedium'>{category.label}</p>
                    <p className='w-[226px] text-[14px] truncate opacity-[.64]'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur alias ipsum voluptas quae
                      omnis impedit maiores earum quam dolores ullam animi voluptatum, harum reiciendis unde qui
                      molestias, tempore, rem officia?
                    </p>
                  </div>

                  <div className='border-0 border-b-[1px] border-blackMain/[.12] border-solid' />
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-[10px]'>
            <p className='text-[20px] font-customSemiBold'>Special Products</p>

            <SliderFeatureProduct />
          </div>
        </div>
      </DialogCustom>
    </section>
  )
}

export default CategoryPopup
