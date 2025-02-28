import styled from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 56px;
  padding: 100px 0;
`

export const IntroTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 3rem;
    color: black;
    font-weight: bold;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 66px;
  }
`

export const IntroItems = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px 40px;
`

export const IntroItem = styled.li`
  display: flex;
  gap: 12px;
  align-items: center;
`

export type IconVariant = 'yellow' | 'yellowDark' | 'baseText' | 'purple'

interface IconContainerProps {
  variant: IconVariant
}

const iconVariants = {
  yellow: '#DBAC2C',
  yellowDark: '#C47F17',
  baseText: '#574F4D',
  purple: '#8047F8',
}

export const IconItem = styled.div<IconContainerProps>`
  background-color: ${({ variant }) => iconVariants[variant]};
  color: ${(props) => props.theme.colors.white};
  padding: 8px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
`
