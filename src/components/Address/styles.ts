import styled from 'styled-components'
import { MapPinLine } from 'phosphor-react'

export const AddressInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 32px;
  padding: 40px;
`

export const AddressHeader = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    p {
      font-weight: 600;
    }
  }
`

export const MapIcon = styled(MapPinLine)`
  color: ${(props) => props.theme.colors['yellow-dark']};
`

export const AddressInputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 60px;
  grid-template-rows: auto auto auto auto;
  gap: 8px;

  & > input:nth-child(1) {
    grid-column: span 1;
  }

  & > input:nth-child(2) {
    grid-column: span 3;
  }

  & > div {
    display: flex;
    align-items: center;
    padding-right: 12px;
    grid-column: span 2;
    background-color: ${(props) => props.theme.colors['base-input']};
    border: none;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.colors['base-button']};

    &:focus-within {
      border: 1px solid ${(props) => props.theme.colors['yellow-dark']};
    }

    input {
      border: none;

      &:focus {
        border: none;
      }
    }

    em {
      color: ${(props) => props.theme.colors['base-label']};
      font-size: 14px;
      font-weight: 500;
    }
  }

  & > div > input:first-child {
    flex: 1;
  }

  & > div > input:last-child {
    flex: 2;
  }

  & > input:nth-child(4),
  & > input:nth-child(5),
  & > input:nth-child(6) {
    grid-column: span 1;
  }
`

export const AddressInput = styled.input`
  padding: 12px;
  background-color: ${(props) => props.theme.colors['base-input']};
  border: none;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors['base-button']};

  &::placeholder {
    color: ${(props) => props.theme.colors['base-label']};
    font-size: 14px;
  }

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.colors['yellow-dark']};
  }
`
