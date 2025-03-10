import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  margin-top: 80px;
`

export const SuccessContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const SuccessTitle = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.colors['yellow-dark']};
  font-weight: bold;
`

export const SuccessMessage = styled.p`
  font-size: 1.25rem;
  padding-bottom: 2.25rem;
`

export const Info = styled.div`
  border: 1px solid;
  border-radius: 6px 36px;
  width: 100%;

  border-color: transparent;
  background-origin: border-box;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme.colors.yellow}, ${theme.colors.purple})`};
`

export const InfoContainer = styled.div`
  padding: 40px;
  background-color: white;
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  span {
    font-weight: bold;
  }
`

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`
