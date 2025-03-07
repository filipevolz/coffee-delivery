import { useState } from 'react'
import { BtnCounter } from '../../../../components/BtnCounter'
import { Trash } from 'phosphor-react'
import { CartItemContainer, BtnsCartItem, BtnRemove, Price } from './styles'

interface CartItemProps {
  coffee: {
    id: string
    title: string
    price: number
    quantity: number
    image: string
  }
  removeFromCart: (id: string) => void
}
export function CartItem({ coffee, removeFromCart }: CartItemProps) {
  const [quantity, setQuantity] = useState(1)
  return (
    <CartItemContainer>
      <img src={coffee.image} alt="" />
      <div>
        <p>{coffee.title}</p>
        <BtnsCartItem>
          <BtnCounter quantity={quantity} setQuantity={setQuantity} />
          <BtnRemove onClick={() => removeFromCart(coffee.id)}>
            <Trash size={16} />
            Remover
          </BtnRemove>
        </BtnsCartItem>
      </div>
      <Price>R$ 9,90</Price>
    </CartItemContainer>
  )
}
