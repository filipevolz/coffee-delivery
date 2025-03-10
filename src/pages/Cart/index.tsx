import { useContext, useState } from 'react'
import { Address } from '../../components/Address'
import { Payment } from '../../components/Payment'
import { CartItem } from './components/CartItem'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import {
  CartContainer,
  OrderSection,
  CoffeesSelected,
  CartItems,
  OrderSummary,
  OrderSummaryItem,
  BtnConfirmOrder,
} from './styles'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const createOrderSchema = z.object({
  address: z.object({
    cep: z.string().min(8, 'CEP é obrigatório').max(9),
    street: z.string().nonempty('Rua é obrigatório'),
    number: z.string().nonempty('Número é obrigatório'),
    complement: z.string().optional(),
    neighborhood: z.string().nonempty('Bairro é obrigatório'),
    city: z.string().nonempty('Cidade é obrigatório'),
    state: z
      .string()
      .min(2, 'Estado é obrigatório')
      .max(2, 'Apenas a sigla do estado.'),
  }),
  paymentMethod: z.string().nonempty(),
})

export type CreateOrderFormData = z.infer<typeof createOrderSchema>

export function Cart() {
  const { cart, coffees, removeFromCart, checkoutCart } =
    useContext(CoffeesContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<CreateOrderFormData>({
    resolver: zodResolver(createOrderSchema),
  })
  const [checkoutError, SetCheckoutError] = useState('')

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
  const deliveryFee = 0
  const totalPrice = totalItems + deliveryFee

  function handleCheckout(data: CreateOrderFormData) {
    SetCheckoutError('')
    if (cart.length > 0) {
      checkoutCart(data)
    } else {
      SetCheckoutError('Você não possui itens no carrinho.')
    }
  }

  return (
    <CartContainer onSubmit={handleSubmit(handleCheckout)}>
      <OrderSection>
        <h4>Complete seu pedido</h4>
        <Address
          register={register}
          watch={watch}
          setValue={setValue}
          error={errors.address}
        />
        <Payment setValue={setValue} error={errors.paymentMethod} />
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
        {checkoutError && (
          <span
            style={{
              fontSize: '1rem',
              color: 'red',
            }}
          >
            {checkoutError}
          </span>
        )}
      </CoffeesSelected>
    </CartContainer>
  )
}
