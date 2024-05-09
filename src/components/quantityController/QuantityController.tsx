import { useState } from 'react'
import { MinusIcon, Plus } from 'lucide-react'
// redux
import { useAppDispatch } from '~/redux/configStore'
import { changeQuantity, decreaseQuantity, increaseQuantity } from '~/redux/product/product.slice'
//
import { ProductCart } from '~/@types/model'
import { IconButton } from '~/components/iconButton'

interface QuantityControllerProps {
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
  isCart,
  productInCart,
  max,
  onIncrease,
  onDecrease,
  onType,
  onFocusOut,
  value,
  disabled = false,
  handleOpen,
  ...rest
}: QuantityControllerProps) {
  const dispatch = useAppDispatch()

  const [localValue, setLocalValue] = useState<number | string>(Number(value) || 0)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    let _value = Number(value)

    if (/^\d+$/.test(value)) {
      if (max !== undefined && _value > max) {
        _value = max
      } else if (_value < 1) {
        _value = 1
      }

      onType && onType(_value)
      setLocalValue(_value)

      if (isCart && productInCart) {
        const newProduct = {
          ...productInCart,
          quantityInCart: max !== undefined && _value > max ? max : _value < 1 ? 1 : _value
        }
        dispatch(changeQuantity(newProduct))
      }
    } else if (value === '') {
      setLocalValue(value)
      onType && onType(value)
    }
  }

  const increase = () => {
    let _value = Number(value || localValue) + 1
    if (max !== undefined && _value > max) {
      _value = max
    }

    onIncrease && onIncrease(_value)
    setLocalValue(_value)
    if (isCart) {
      dispatch(increaseQuantity(productInCart))
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
        dispatch(decreaseQuantity(productInCart))
      }
    } else {
      if (_value < 1) {
        _value = 1
      }

      onDecrease && onDecrease(_value)
      setLocalValue(_value)
    }
  }

  const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    const { value } = event.target
    if (value === '') {
      if (isCart && productInCart) {
        onFocusOut && onFocusOut(productInCart?.quantityInCart)
        setLocalValue(productInCart?.quantityInCart)
      } else {
        onFocusOut && onFocusOut(1)
        setLocalValue(1)
      }
    }
  }

  return (
    <div className='flex items-center gap-3'>
      <IconButton
        size='40'
        variant='outline'
        onClick={decrease}
        disabled={isCart ? value === 0 : value === 1 || localValue === 1 || disabled}
      >
        <MinusIcon size={20} />
      </IconButton>
      {/* <input
        {...rest}
        type='number'
        disabled={disabled}
        value={value || localValue}
        onBlur={handleBlur}
        onChange={handleChange}
        className='border-none outline-none min-w-[30px] w-[30px]'
      /> */}
      <p className='min-w-[30px] text-[20px] font-semibold text-center'>
        {(productInCart?.quantityInCart as number) < 10
          ? `0${productInCart?.quantityInCart}`
          : productInCart?.quantityInCart}
      </p>
      <IconButton
        size='40'
        variant='outline'
        onClick={increase}
        disabled={value === max || localValue === max || disabled}
      >
        <Plus size={20} />
      </IconButton>
    </div>
  )
}

export default QuantityController
