import styled from 'styled-components'

export const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;
`

export const OrderSection = styled.div``

export const CoffeesSelected = styled.div``

export const CartItems = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 40px;
`

export const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const OrderSummaryItem = styled.div`
  display: flex;
  justify-content: space-between;

  &:last-child {
    p,
    span {
      font-size: 1.25rem;
      font-weight: bold;
    }
  }
`

export const BtnConfirmOrder = styled.button`
  display: flex;
  width: 100%;
  padding: 14px 0 14px;
  justify-content: center;
  margin-top: 24px;
  background-color: ${(props) => props.theme.colors.yellow};
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 6px;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors['yellow-dark']};
  }
`
