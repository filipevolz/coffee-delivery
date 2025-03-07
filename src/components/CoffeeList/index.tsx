import { useContext } from 'react'
import { Coffee } from './components/Coffee'
import { CoffeeListContainer, CoffeeTitle, CoffeeListItems } from './styles'
import { CoffeesContext } from '../../contexts/CoffeesContext'

export function CoffeList() {
  const { coffees } = useContext(CoffeesContext)
  return (
    <CoffeeListContainer>
      <CoffeeTitle>Nossos Cafés</CoffeeTitle>

      <CoffeeListItems>
        {coffees.map((coffee) => {
          return <Coffee key={coffee.id} coffee={coffee} />
        })}
      </CoffeeListItems>
    </CoffeeListContainer>
  )
}
