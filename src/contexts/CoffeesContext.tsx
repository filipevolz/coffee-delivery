import { createContext, useEffect, useState } from 'react'
import data from '../../data.json'

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
  addToCart: (id: string, quantity: number) => void
  updateCart: (id: string, quantity: number) => void
  removeFromCart: (id: string) => void
}

export const CoffeesContext = createContext({} as CoffeesContextType)

interface CoffeesContextProviderProps {
  children: React.ReactNode
}
export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const coffees: Coffee[] = data.coffees
  const [cart, setCart] = useState<CartItem[]>([])

  function addToCart(id: string, quantity: number) {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === id)
      const updatedCart = itemExists
        ? prevCart.map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          )
        : [...prevCart, { id, quantity }]
      localStorage.setItem(
        '@ignite-coffee-delivery:coffees-state-1.0.0',
        JSON.stringify(updatedCart),
      )
      return updatedCart
    })
  }

  useEffect(() => {
    const localCart = JSON.parse(
      localStorage.getItem('@ignite-coffee-delivery:coffees-state-1.0.0') ||
        '[]',
    )
    setCart(localCart)
  }, [])

  function updateCart(id: string, quantity: number) {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item,
      )
      localStorage.setItem(
        '@ignite-coffee-delivery:coffees-state-1.0.0',
        JSON.stringify(updatedCart),
      )
      return updatedCart
    })
  }

  function removeFromCart(id: string) {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id)
      localStorage.setItem(
        '@ignite-coffee-delivery:coffees-state-1.0.0',
        JSON.stringify(updatedCart),
      )
      return updatedCart
    })
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        cart,
        addToCart,
        updateCart,
        removeFromCart,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
