import { useState } from 'react'
import { Button } from '~/components/button'
import { UserCancelIcon } from '~/components/icons'

function PrivacySecurityTab() {
  const [confirm, setConfirm] = useState<boolean>(false)

  return (
    <div className='flex flex-col items-center gap-10'>
      <UserCancelIcon />
      <div className={`w-[724px] space-y-2 ${confirm ? 'text-center' : 'text-left'}`}>
        <h6 className='text-[20px] font-customMedium leading-[21px]'>
          {confirm ? 'Account deletion request' : 'By clicking "Confirm," you agree that your account'}
        </h6>

        {confirm ? (
          <p>
            All data and information related to the account, including personal information, purchase history, and
            payment details, will be permanently deleted from the system.
          </p>
        ) : (
          <ul className='list-disc text-blackMain/[.64] ml-4'>
            <li>Will no longer have any transactions related to buying/selling items.</li>
            <li>
              Will have no unused voucher codes or unredeemed voucher codes. After successfully deleting your account,
              we will continue to retain transaction data for financial auditing purposes.
            </li>
            <li>
              You will not be able to access your affiliate marketing account. Additionally, you will not receive any
              pending commissions or bonuses.
            </li>
            <li>Will no longer have any transactions related to buying/selling items.</li>
            <li>We reserves the right to reject any future account creation requests."</li>
          </ul>
        )}
      </div>

      <Button
        variant={confirm ? 'red' : 'container'}
        className='w-[180px] rounded-[26px]'
        classNameText='text-[18px] !uppercase'
        onClick={() => setConfirm(!confirm)}
      >
        {confirm ? 'delete' : 'confirm'}
      </Button>
    </div>
  )
}

export default PrivacySecurityTab
