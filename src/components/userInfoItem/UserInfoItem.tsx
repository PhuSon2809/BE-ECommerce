import { UserInfo } from '~/@types/models'
import { Button } from '~/components/button'
import { DialogDetailPage } from '~/components/dialog'
import { PATH_PRIVATE_APP } from '~/constants/paths'
import useDialog from '~/hooks/useDialog'
import { TrackingUserDetail } from '~/pages/user'

type UserInfoItemProps = { user: UserInfo }

function UserInfoItem({ user }: UserInfoItemProps) {
  const { isOpen, setIsOpen, handleOpen } = useDialog()

  const anotherRole = true

  const handleNavigateDetail = () => {
    handleOpen()
    window.history.pushState({ anotherRole }, '', `${PATH_PRIVATE_APP.user.tracking}/${user.idCustomer}`)
  }

  return (
    <>
      <div className='p-6 flex items-center rounded-3xl shadow-card'>
        <div className={`${anotherRole ? 'min-w-[35%]' : 'min-w-[40%]'} flex items-center gap-6`}>
          <img src={user.image} alt={user.fullName} className='size-[72px] rounded-lg' />
          <div className='space-y-2'>
            <p className='text-[24px] font-customSemiBold leading-[25.2px]'>{user.fullName}</p>
            <p className='text-[18px] text-blackMain/[.64] leading-[18.9px]'>ID: {user.idCustomer}</p>
          </div>
        </div>
        <div className='min-w-[20%]'>
          <p className='text-[20px] font-customSemiBold leading-[21px]'>
            {user.numberProductBought} {user.numberProductBought > 0 ? 'products' : 'product'}
          </p>
        </div>
        <div className='min-w-[20%]'>
          <p className='text-[20px] font-customSemiBold leading-[21px]'>$20,000</p>
        </div>
        <div className='flex flex-1 justify-end gap-4'>
          <Button
            size='small'
            variant={anotherRole ? 'outline' : 'container'}
            className={`${anotherRole ? 'w-[162px]' : 'w-[197px]'} h-11`}
            classNameText='text-[16px] !uppercase'
            onClick={handleNavigateDetail}
          >
            See detail
          </Button>
          {anotherRole && (
            <Button
              size='small'
              className={`w-[162px] h-11`}
              classNameText='text-[16px] !uppercase'
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
