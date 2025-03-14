import type { CreateOrderFormData } from '../../pages/Cart'
import { ActionTypes, Actions } from './actions'
import { produce } from 'immer'

export interface Item {
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

export interface Order extends CreateOrderFormData {
  id: number
  items: CartItem[]
}

export interface CartState {
  cart: CartItem[]
  orders: Order[]
}

export function cartReducer(state: CartState, action: Actions): CartState {
  switch (action.type) {
    case ActionTypes.ADD_ITEM: {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.item.id,
      )

      const updatedCart = existingItem
        ? state.cart.map((item) =>
            item.id === action.payload.item.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [...state.cart, { id: action.payload.item.id, quantity: 1 }]

      return { cart: updatedCart, orders: state.orders }
    }

    case ActionTypes.UPDATE_ITEM: {
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload.itemId
          ? { ...item, quantity: action.payload.quantity }
          : item,
      )

      return { cart: updatedCart, orders: state.orders }
    }

    case ActionTypes.REMOVE_ITEM: {
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload.itemId,
      )

      return { cart: updatedCart, orders: state.orders }
    }

    case ActionTypes.CHECKOUT_CART:
      return produce(state, (draft) => {
        const newOrder = {
          id: new Date().getTime(),
          items: state.cart,
          ...action.payload.order,
        }
        draft.orders.push(newOrder)
        draft.cart = []

        action.payload.callback('/coffee-delivery/success')
      })

    default:
      return state
  }
}
