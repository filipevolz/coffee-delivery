import { Coffee } from './components/Coffee'
import TraditionalExpress from '../../assets/traditional-express.svg'
import { CoffeeListContainer, CoffeeTitle, CoffeeListItems } from './styles'

export function CoffeList() {
  return (
    <CoffeeListContainer>
      <CoffeeTitle>Nossos Cafés</CoffeeTitle>

      <CoffeeListItems>
        <Coffee
          img={TraditionalExpress}
          tags={['Tradicional']}
          name="Expresso Tradicional"
          description="O tradicional café feito com água quente e grãos moídos"
          price={9.9}
        />
        <Coffee
          img={TraditionalExpress}
          tags={['Tradicional']}
          name="Expresso Americano"
          description="Expresso diluído, menos intenso que o tradicional"
          price={9.9}
        />
      </CoffeeListItems>
    </CoffeeListContainer>
  )
}
