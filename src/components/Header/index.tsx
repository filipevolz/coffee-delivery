import { MapPin, ShoppingCart } from 'phosphor-react'
import Logo from '../../assets/Logo.svg'
import { Cart, HeaderContainer, ActionsHeader, Location } from './styles'
import { useContext } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'

export function Header() {
  const { cart } = useContext(CoffeesContext)
  return (
    <HeaderContainer>
      <img src={Logo} alt="Coffe Delivery" />

      <ActionsHeader>
        <Location>
          <MapPin size={22} weight="fill" />
          <span>Florianópolis, SC</span>
        </Location>
        <Cart href="/coffee-delivery/checkout">
          <ShoppingCart size={22} weight="fill" />
          {cart.length > 0 && <span>{cart.length}</span>}
        </Cart>
      </ActionsHeader>
    </HeaderContainer>
  )
}
