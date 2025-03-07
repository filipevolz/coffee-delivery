import styled from 'styled-components'
import { CurrencyDollar } from 'phosphor-react'
import { AddressHeader, AddressInfo } from '../Address/styles'

export const PaymentContainer = styled(AddressInfo)``

export const PaymentHeader = styled(AddressHeader)``

export const DollarIcon = styled(CurrencyDollar)`
  color: ${(props) => props.theme.colors.purple};
`

export const PaymentOptions = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  .selectedOption {
    color: red;
  }
`

export const PaymentOption = styled.li`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors['base-button']};
  gap: 5px;
  padding: 1rem;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  svg {
    color: ${(props) => props.theme.colors.purple};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors['base-hover']};
  }
`
