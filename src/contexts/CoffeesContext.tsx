import { createContext, useEffect, useReducer } from 'react'
import {
  addItemAction,
  removeItemAction,
  updateCartAction,
  checkoutCartAction,
} from '../reducers/cart/actions'
import { cartReducer, CartState, Order } from '../reducers/cart/reducer'
import data from '../../data.json'
import { CreateOrderFormData } from '../pages/Cart'
import { useNavigate } from 'react-router-dom'

export interface Coffee {
  id: string
  title: string
  description: string
  tags: string[]
  price: number
  image: string
}

export interface CartItem {
  id: string
  quantity: number
}

interface CoffeesContextType {
  coffees: Coffee[]
  cart: CartItem[]
  orders: Order[]
  addToCart: (id: string, quantity: number) => void
  updateCart: (id: string, quantity: number) => void
  removeFromCart: (id: string) => void
  checkoutCart: (order: CreateOrderFormData) => void
}

export const CoffeesContext = createContext({} as CoffeesContextType)

interface CoffeesContextProviderProps {
  children: React.ReactNode
}

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const coffees: Coffee[] = data.coffees
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
    orders: [],
  } as CartState)

  useEffect(() => {
    const localCart = JSON.parse(
      localStorage.getItem('@ignite-coffee-delivery:coffees-state-1.0.0') ||
        '[]',
    )
    if (localCart.length > 0) {
      localCart.forEach((item: CartItem) => dispatch(addItemAction(item)))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      '@ignite-coffee-delivery:coffees-state-1.0.0',
      JSON.stringify(state.cart),
    )
  }, [state.cart])

  const navigate = useNavigate()

  function addToCart(id: string, quantity: number) {
    dispatch(addItemAction({ id, quantity }))
  }

  function updateCart(id: string, quantity: number) {
    dispatch(updateCartAction(id, quantity))
  }

  function removeFromCart(id: string) {
    dispatch(removeItemAction(id))
  }

  function checkoutCart(order: CreateOrderFormData) {
    console.log(order)
    dispatch(checkoutCartAction(order, navigate))
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        cart: state.cart,
        orders: state.orders,
        addToCart,
        updateCart,
        removeFromCart,
        checkoutCart,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
