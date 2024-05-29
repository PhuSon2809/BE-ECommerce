import { UserInfo } from '~/@types/models'
import { Button } from '~/components/button'
import { DialogDetailPage } from '~/components/dialog'
import { PATH_PRIVATE_APP } from '~/constants/paths'
import useDialog from '~/hooks/useDialog'
import { TrackingUserDetail } from '~/pages/user'

type UserInfoItemProps = { user: UserInfo }

function UserInfoItem({ user }: UserInfoItemProps) {
  const { isOpen, setIsOpen, handleOpen } = useDialog()

  const anotherRole = false

  const handleNavigateDetail = () => {
    handleOpen()
    window.history.pushState({ anotherRole }, '', `${PATH_PRIVATE_APP.user.tracking}/${user.idCustomer}`)
  }

  return (
    <>
      <div className='xs:p-[15px] sm:p-6 flex xs:flex-col sm:flex-col md:flex-col lg:flex-row xs:items-end sm:items-end md:items-end lg:items-center  xs:gap-5 sm:gap-0 xs:rounded-[20px] sm:rounded-3xl shadow-card'>
        <div className='w-full flex items-center justify-between'>
          <div className={`${anotherRole ? 'min-w-[45%]' : 'min-w-[40%]'} flex items-center xs:gap-3 sm:gap-6`}>
            <img src={user.image} alt={user.fullName} className='xs:size-[48px] sm:size-[72px] rounded-lg' />
            <div className='space-y-3'>
              <p className='xs:text-[20px] sm:text-[24px] font-customSemiBold xs:leading-[21px] sm:leading-[25.2px]'>
                {user.fullName}
              </p>
              <p className='xs:text-[12px] sm:text-[18px] text-blackMain/[.64] xs:leading-[12.6px] sm:leading-[18.9px]'>
                ID: {user.idCustomer}
              </p>
            </div>
          </div>
          <div className='xs:min-w-fit sm:min-w-[45%] md:min-w-[55%] flex xs:flex-col sm:flex-row xs:items-end sm:items-center xs:gap-[10px]'>
            <div className='min-w-[50%]'>
              <p className='xs:text-[16px] sm:text-[20px] font-customSemiBold xs:leading-[16.8px] sm:leading-[21px] xs:text-right sm:text-right md:text-right lg:text-left'>
                {user.numberProductBought} {user.numberProductBought > 0 ? 'products' : 'product'}
              </p>
            </div>
            <div className='min-w-[50%]'>
              <p className='xs:text-[16px] sm:text-[20px] font-customSemiBold xs:leading-[16.8px] sm:leading-[21px] xs:text-right sm:text-right md:text-right lg:text-left'>
                $20,000
              </p>
            </div>
          </div>
        </div>
        <div className='flex justify-end xs:gap-2 sm:gap-4'>
          <Button
            size='small'
            variant={anotherRole ? 'outline' : 'container'}
            className={`xs:!w-[120px] xs:h-10 ${anotherRole ? 'sm:w-[162px]' : 'sm:w-[197px]'} sm:h-11`}
            classNameText='xs:text-[14px] sm:text-[16px] !uppercase'
            onClick={handleNavigateDetail}
          >
            See detail
          </Button>
          {anotherRole && (
            <Button
              size='small'
              className={`xs:!w-[120px] xs:h-10 sm:w-[162px] sm:h-11`}
              classNameText='xs:text-[14px] sm:text-[16px] !uppercase'
              onClick={handleNavigateDetail}
            >
              Chat now
            </Button>
          )}
        </div>
      </div>

      <DialogDetailPage open={isOpen} setOpen={setIsOpen}>
        <TrackingUserDetail userId={user.idCustomer} setOpen={setIsOpen} />
      </DialogDetailPage>
    </>
  )
}

export default UserInfoItem
