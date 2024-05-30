import { Dispatch, SetStateAction } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { Button } from '~/components/button'
import { DialogCustom } from '~/components/dialog'
import { PATH_PRIVATE_APP } from '~/constants/paths'
import { QUERY_PARAM_STRING } from '~/constants/queryParamString'

type CheckoutConfirmDialogProps = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  productIdsCheckout?: readonly number[]
}

function CheckoutConfirmDialog({ open, setOpen, productIdsCheckout }: CheckoutConfirmDialogProps) {
  const navigate = useNavigate()

  return (
    <section>
      <DialogCustom
        open={open}
        setOpen={setOpen}
        showBackground
        variant='horizontal'
        positionDialog='items-center'
        className={`!max-w-[490px] !min-h-fit !bg-white !rounded-3xl `}
        classNameBg={`!bg-black/[.44] !backdrop-blur-[40px] shadow-4xl`}
      >
        <div className='w-full xs:px-0 py-1 sm:p-4 flex flex-col gap-5'>
          <Button
            size='large'
            fullWidth
            className='h-[72px] rounded-[36px]'
            onClick={() =>
              navigate({
                pathname: PATH_PRIVATE_APP.checkout.root,
                search: createSearchParams(
                  productIdsCheckout
                    ? {
                        itemCheckoutIds: productIdsCheckout.toString(),
                        checkoutType: QUERY_PARAM_STRING.checkoutType.receiveProduct
                      }
                    : {
                        checkoutType: QUERY_PARAM_STRING.checkoutType.receiveProduct
                      }
                ).toString()
              })
            }
          >
            receive product
          </Button>
          <Button
            size='large'
            fullWidth
            className='h-[72px] rounded-[36px]'
            onClick={() =>
              navigate({
                pathname: PATH_PRIVATE_APP.checkout.root,
                search: createSearchParams(
                  productIdsCheckout
                    ? {
                        itemCheckoutIds: productIdsCheckout.toString(),
                        checkoutType: QUERY_PARAM_STRING.checkoutType.storageForResale
                      }
                    : {
                        checkoutType: QUERY_PARAM_STRING.checkoutType.storageForResale
                      }
                ).toString()
              })
            }
          >
            Storage for resale
          </Button>
        </div>
      </DialogCustom>
    </section>
  )
}

export default CheckoutConfirmDialog
