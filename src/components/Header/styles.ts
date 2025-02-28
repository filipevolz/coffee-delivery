import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 100px;
  padding: 32px 0;
`

export const ActionsHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  max-height: 38px;
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 8px;
  background-color: ${(props) => props.theme.colors['purple-light']};
  color: ${(props) => props.theme.colors['purple-dark']};
  border-radius: 8px;
`

export const Cart = styled.div`
  background-color: ${(props) => props.theme.colors['yellow-light']};
  color: ${(props) => props.theme.colors['yellow-dark']};
  padding: 8px;
  border-radius: 8px;
  max-height: 38px;
  position: relative;

  span {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -8px;
    right: -8px;
    width: 20px;
    height: 20px;
    background-color: ${(props) => props.theme.colors['yellow-dark']};
    color: white;
    border-radius: 50%;
    z-index: 1;
  }
`
