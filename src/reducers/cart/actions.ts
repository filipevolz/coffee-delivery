import { NavigateFunction } from 'react-router-dom'
import { CreateOrderFormData } from '../../pages/Cart'
import { CartItem } from './reducer'

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  UPDATE_ITEM = 'UPDATE_ITEM',
  CHECKOUT_CART = 'CHECKOUT_CART',
}

export type Actions =
  | {
      type: ActionTypes.ADD_ITEM
      payload: {
        item: CartItem
      }
    }
  | {
      type: ActionTypes.UPDATE_ITEM
      payload: {
        itemId: CartItem['id']
        quantity: number
      }
    }
  | {
      type: ActionTypes.REMOVE_ITEM
      payload: {
        itemId: CartItem['id']
      }
    }
  | {
      type: ActionTypes.CHECKOUT_CART
      payload: {
        order: CreateOrderFormData
        callback: NavigateFunction
      }
    }

export function addItemAction(item: CartItem){
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      item,
    },
  } satisfies Actions
}

export function removeItemAction(itemId: CartItem['id']) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemId,
    },
  } satisfies Actions
}

export function updateCartAction(itemId: CartItem['id'], quantity: number) {
  return {
    type: ActionTypes.UPDATE_ITEM,
    payload: {
      itemId,
      quantity,
    },
  } satisfies Actions
}

export function checkoutCartAction(
  order: CreateOrderFormData,
  callback: NavigateFunction,
) {
  return {
    type: ActionTypes.CHECKOUT_CART,
    payload: {
      order,
      callback,
    },
  } satisfies Actions
}