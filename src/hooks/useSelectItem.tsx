/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import { ProductCart } from '~/@types/model'

function useSelectItem(listSelect: ProductCart[]) {
  const [selected, setSelected] = useState<readonly number[]>([])

  const handleSelectAll = () => {
    if (selected.length === listSelect.length) {
      setSelected([])
    } else {
      const newSelected = listSelect.map((item) => item.id)
      setSelected(newSelected)
    }
  }

  const handleSelectItem = (cartItemId: number) => {
    const selectedIndex = selected.indexOf(cartItemId)
    let newSelected: readonly number[] = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, cartItemId)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1))
    }

    setSelected(newSelected)
  }

  return { selected, handleSelectItem, handleSelectAll }
}

export default useSelectItem
