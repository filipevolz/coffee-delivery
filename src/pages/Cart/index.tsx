import { useContext } from 'react'
import { Address } from '../../components/Address'
import { Payment } from '../../components/Payment'
import { CartItem } from './components/CartItem'
import {
  CartContainer,
  OrderSection,
  CoffeesSelected,
  CartItems,
  OrderSummary,
  OrderSummaryItem,
  BtnConfirmOrder,
} from './styles'
import { CoffeesContext } from '../../contexts/CoffeesContext'

export function Cart() {
  const { cart, coffees, removeFromCart } = useContext(CoffeesContext)
  console.log(cart)

  const cartWithDetails = cart
    .map((cartItem) => {
      const coffee = coffees.find((coffee) => coffee.id === cartItem.id)
      return coffee ? { ...coffee, quantity: cartItem.quantity } : null
    })
    .filter(Boolean) as Array<{
    id: string
    title: string
    price: number
    quantity: number
    image: string
  }>

  const totalItems = cartWithDetails.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  )
  const deliveryFee = 3.5
  const totalPrice = totalItems + deliveryFee

  return (
    <CartContainer>
      <OrderSection>
        <h4>Complete seu pedido</h4>
        <Address />
        <Payment />
      </OrderSection>
      <CoffeesSelected>
        <h4>Cafés selecionados</h4>
        <CartItems>
          {cartWithDetails.map((coffee) => (
            <CartItem
              key={coffee.id}
              coffee={coffee}
              removeFromCart={removeFromCart}
            />
          ))}
        </CartItems>
        <OrderSummary>
          <OrderSummaryItem>
            <p>Total de itens</p>
            <span>R$ {totalItems.toFixed(2)}</span>
          </OrderSummaryItem>
          <OrderSummaryItem>
            <p>Entrega</p>
            <span>R$ {deliveryFee.toFixed(2)}</span>
          </OrderSummaryItem>
          <OrderSummaryItem>
            <p>Total</p>
            <span>R$ {totalPrice.toFixed(2)}</span>
          </OrderSummaryItem>
        </OrderSummary>
        <BtnConfirmOrder type="submit">Confirmar pedido</BtnConfirmOrder>
      </CoffeesSelected>
    </CartContainer>
  )
}
