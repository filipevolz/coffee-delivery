import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55px;
`

export const CoffeeTitle = styled.h2`
  color: ${(props) => props.theme.colors['base-subtitle']};
  font-size: 2rem;
`

export const CoffeeListItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 60px 32px;
`
