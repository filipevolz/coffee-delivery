import styled from 'styled-components'

export const CartItemContainer = styled.li`
  display: flex;
  gap: 20px;
  margin-top: 1rem;
  padding-bottom: 24px;

  border-bottom: 1px solid ${(props) => props.theme.colors['base-button']};

  img {
    width: 64px;
  }
`

export const BtnsCartItem = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  padding-top: 0.5rem;
`

export const BtnRemove = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background-color: ${(props) => props.theme.colors['base-button']};
  height: 38px;
  padding: 0 10px;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 12px;
  color: ${(props) => props.theme.colors['base-text']};
  transition: 0.3s ease-in-out;

  svg {
    color: ${(props) => props.theme.colors.purple};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors['base-hover']};
    color: ${(props) => props.theme.colors['base-subtitle']};

    svg {
      color: ${(props) => props.theme.colors['purple-dark']};
    }
  }
`

export const Price = styled.p`
  font-size: 1rem;
  font-weight: 800;
  color: ${(props) => props.theme.colors['base-text']};
`
