import styled from 'styled-components'

export const CofferCounter = styled.div`
  background-color: ${(props) => props.theme.colors['base-button']};
  height: 38px;
  padding: 0 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  button {
    display: flex;
    border: none;
    cursor: pointer;
    background-color: transparent;
    color: ${(props) => props.theme.colors.purple};
    font-weight: bold;
  }
`
