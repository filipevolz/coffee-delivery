import styled from 'styled-components'
import { Cart } from '../../Header/styles'

export const CoffeContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 256px;
  padding: 0 20px 20px 20px;
  gap: 8px;
  background-color: ${(props) => props.theme.colors['base-card']};
  border-radius: 0 40px;

  img {
    width: 120px;
    margin-top: -40px;
  }
`

export const TagsList = styled.ul`
  display: flex;
  gap: 4px;
`

export const TagsItem = styled.li`
  background-color: ${(props) => props.theme.colors['yellow-light']};
  color: ${(props) => props.theme.colors['yellow-dark']};
  font-size: 0.625rem;
  padding: 4px 8px;
  border-radius: 50px;
  margin-bottom: 8px;
  text-transform: uppercase;
`

export const CoffeTitle = styled.h3`
  font-size: 1.25rem;
  font-family: 'Baloo 2', sans-serif;
  color: ${(props) => props.theme.colors['base-subtitle']};
`

export const CoffeDescription = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors['base-label']};
  text-align: center;
  margin-bottom: 25px;
`

export const CoffeeFooter = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

export const CofferPrice = styled.p`
  font-size: 0.875rem;

  span {
    font-size: 1.5rem;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme.colors['base-text']};
  }
`

export const ButtonsActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const CartButton = styled(Cart)`
  background-color: ${(props) => props.theme.colors['purple-dark']};
  color: ${(props) => props.theme.colors.white};
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.purple};
  }
`
