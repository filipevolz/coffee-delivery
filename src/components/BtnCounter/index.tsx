import { Minus, Plus } from 'phosphor-react'
import { CofferCounter } from './styles'

interface BtnCounterProps {
  quantity: number
  incrementQuantity: () => void
  decrementQuantity: () => void
}
export function BtnCounter({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: BtnCounterProps) {
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
