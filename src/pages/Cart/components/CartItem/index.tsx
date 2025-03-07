import { BtnCounter } from '../../../../components/BtnCounter'
import { Trash } from 'phosphor-react'
import { CartItemContainer, BtnsCartItem, BtnRemove, Price } from './styles'
import { useContext } from 'react'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'

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
  const { updateCart } = useContext(CoffeesContext)

  function incrementQuantity() {
    updateCart(coffee.id, coffee.quantity + 1)
  }

  function decrementQuantity() {
    if (coffee.quantity > 1) {
      updateCart(coffee.id, coffee.quantity - 1)
    }
  }

  return (
    <CartItemContainer>
      <img src={coffee.image} alt="" />
      <div>
        <p>{coffee.title}</p>
        <BtnsCartItem>
          <BtnCounter
            quantity={coffee.quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
          <BtnRemove onClick={() => removeFromCart(coffee.id)}>
            <Trash size={16} />
            Remover
          </BtnRemove>
        </BtnsCartItem>
      </div>
      <Price>R$ {(coffee.price * coffee.quantity).toFixed(2)}</Price>
    </CartItemContainer>
  )
}
