import { useState } from 'react'
// redux
import { useAppDispatch } from '~/redux/configStore'
//
import { Minus, Plus } from 'iconoir-react'
import { ProductCart } from '~/@types/models'
import { IconButton } from '~/components/iconButton'
import { decreaseQuantityProductCart, increaseQuantityProductCart } from '~/redux/cart/cart.slice'

interface QuantityControllerProps {
  isSmall?: boolean
  isCart?: boolean
  productInCart?: ProductCart
  max?: number
  value: number | string
  onIncrease?: (value: number | '') => void
  onDecrease?: (value: number | '') => void
  onType?: (value: number | '') => void
  onFocusOut?: (value: number | '') => void
  disabled?: boolean
  handleOpen?: () => void
}

function QuantityController({
  isSmall,
  isCart,
  productInCart,
  max,
  onIncrease,
  onDecrease,
  value,
  disabled = false,
  handleOpen
}: QuantityControllerProps) {
  const dispatch = useAppDispatch()

  const [localValue, setLocalValue] = useState<number | string>(Number(value) || 0)

  const increase = () => {
    let _value = Number(value || localValue) + 1
    if (max !== undefined && _value > max) {
      _value = max
    }

    onIncrease && onIncrease(_value)
    setLocalValue(_value)
    if (productInCart && isCart) {
      dispatch(increaseQuantityProductCart(productInCart))
    }
  }

  const decrease = () => {
    let _value = Number(value || localValue) - 1
    if (isCart) {
      if (_value < 0) {
        _value = 0
      }
      if (_value === 0) {
        handleOpen && handleOpen()
      }
      if (_value > 0) {
        onDecrease && onDecrease(_value)
        setLocalValue(_value)
        if (productInCart) dispatch(decreaseQuantityProductCart(productInCart))
      }
    } else {
      if (_value < 1) {
        _value = 1
      }

      onDecrease && onDecrease(_value)
      setLocalValue(_value)
    }
  }

  return (
    <div className='flex items-center gap-3'>
      <IconButton
        size={isSmall ? '28' : '40'}
        variant='outline'
        onClick={decrease}
        disabled={isCart ? value === 0 : value === 1 || localValue === 1 || disabled}
        className={`${isSmall ? 'border-[0.88px]' : 'border-[1.88px]'} hover:bg-transparent hover:border-blackMain`}
      >
        <Minus fontSize={isSmall ? 10 : 15} />
      </IconButton>
      {productInCart ? (
        <p className='min-w-[30px] text-[20px] font-customSemiBold text-center'>
          {(productInCart?.quantityInCart as number) < 10
            ? `0${productInCart?.quantityInCart}`
            : productInCart?.quantityInCart}
        </p>
      ) : (
        <p className='min-w-[30px] text-[20px] font-customSemiBold text-center text-greenMain'>
          {(localValue as number) < 10 && (localValue as number) !== 0 ? `0${localValue}` : localValue}
        </p>
      )}

      <IconButton
        size={isSmall ? '28' : '40'}
        variant='outline'
        onClick={increase}
        disabled={value === max || localValue === max || disabled}
        className={`${isSmall ? 'border-[0.88px]' : 'border-[1.88px]'} hover:bg-transparent hover:border-blackMain`}
      >
        <Plus fontSize={isSmall ? 10 : 15} />
      </IconButton>
    </div>
  )
}

export default QuantityController
