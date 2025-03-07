import { Minus, Plus } from 'phosphor-react'
import { CofferCounter } from './styles'

interface BtnCounterProps {
  quantity: number
  setQuantity: React.Dispatch<React.SetStateAction<number>>
}
export function BtnCounter({ quantity, setQuantity }: BtnCounterProps) {
  function incrementQuantity() {
    setQuantity((state: number) => state + 1)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }
  return (
    <CofferCounter>
      <button onClick={decrementQuantity}>
        <Minus size={14} weight="bold" />
      </button>
      <span>{quantity}</span>
      <button onClick={incrementQuantity}>
        <Plus size={14} weight="bold" />
      </button>
    </CofferCounter>
  )
}
