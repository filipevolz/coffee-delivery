import { MapPin, ShoppingCart } from 'phosphor-react'
import Logo from '../../assets/Logo.svg'
import { Cart, HeaderContainer, ActionsHeader, Location } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Coffe Delivery" />

      <ActionsHeader>
        <Location>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </Location>
        <Cart>
          <ShoppingCart size={22} weight="fill" />
          <span>3</span>
        </Cart>
      </ActionsHeader>
    </HeaderContainer>
  )
}
