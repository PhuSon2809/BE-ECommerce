import { useState } from 'react'
import { Button } from '~/components/button'
import { UserCancelIcon } from '~/components/icons'

function PrivacySecurityTab() {
  const [confirm, setConfirm] = useState<boolean>(false)

  return (
    <div className='h-full xs:px-2 sm:px-0 flex flex-col items-center gap-10'>
      <UserCancelIcon className='xs:size-12 sm:size-16' />
      <div className={`xs:w-full lg:w-[724px] space-y-2 ${confirm ? 'text-center' : 'text-left'}`}>
        <h6 className='xs:text-[18px] sm:text-[19px] md:text-[19px] text-[20px] font-customMedium leading-[21px]'>
          {confirm ? 'Account deletion request' : 'By clicking "Confirm," you agree that your account'}
        </h6>

        {confirm ? (
          <p className='xs:text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] text-blackMain/[.64]'>
            All data and information related to the account, including personal information, purchase history, and
            payment details, will be permanently deleted from the system.
          </p>
        ) : (
          <ul className='xs:text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] list-disc text-blackMain/[.64] ml-4'>
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
        className='xs:w-[160px] xs:h-[42px] sm:w-[180px] sm:h-12 rounded-[26px]'
        classNameText='xs:text-[14px] sm:text-[16px] md:text-[16px] text-[18px] !uppercase'
        onClick={() => setConfirm(!confirm)}
      >
        {confirm ? 'delete' : 'confirm'}
      </Button>
    </div>
  )
}

export default PrivacySecurityTab
