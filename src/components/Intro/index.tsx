import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  IntroContainer,
  IntroItem,
  IntroItems,
  IntroTitle,
  IconItem,
} from './styles'
import IntroImage from '../../assets/Intro-image.svg'

export function Intro() {
  return (
    <IntroContainer>
      <div style={{ maxWidth: '900px' }}>
        <IntroTitle>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h3>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h3>
        </IntroTitle>
        <IntroItems>
          <IntroItem>
            <IconItem variant="yellowDark">
              <ShoppingCart size={16} />
            </IconItem>
            <span>Compra simples e segura</span>
          </IntroItem>
          <IntroItem>
            <IconItem variant="baseText">
              <Package size={16} />
            </IconItem>
            <span>Embalagem mantém o café intacto</span>
          </IntroItem>
          <IntroItem>
            <IconItem variant="yellow">
              <Timer size={16} />
            </IconItem>
            <span>Entrega rápida e rastreada</span>
          </IntroItem>
          <IntroItem>
            <IconItem variant="purple">
              <Coffee size={16} />
            </IconItem>
            <span>O café chega fresquinho até você</span>
          </IntroItem>
        </IntroItems>
      </div>
      <img src={IntroImage} alt="Café" />
    </IntroContainer>
  )
}
