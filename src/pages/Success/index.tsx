import { MapPin, Timer } from 'phosphor-react'
import { IconItem } from '../../components/Intro/styles'
import { DollarIcon } from '../../components/Payment/styles'
import {
  SuccessContainer,
  SuccessContent,
  SuccessTitle,
  SuccessMessage,
  Info,
  InfoContainer,
  InfoBox,
} from './styles'
import { useContext } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'

export function Success() {
  const { orders } = useContext(CoffeesContext)
  const order = orders.length > 0 ? orders[0] : null

  const paymentMethodMap: Record<string, string> = {
    credit: 'Cartão de Crédito',
    money: 'Dinheiro',
    debit: 'Débito',
  }

  return (
    <SuccessContainer>
      <SuccessContent>
        <SuccessTitle>Uhu! Pedido Confirmado</SuccessTitle>
        <SuccessMessage>
          Agora é só aguardar que logo o café chegará até você
        </SuccessMessage>

        <Info>
          <InfoContainer>
            <InfoBox>
              <IconItem variant="purple">
                <MapPin size={16} weight="fill" />
              </IconItem>
              <div>
                <p>
                  Entrega em{' '}
                  <span>
                    {order?.address.street}, {order?.address.number}
                  </span>
                </p>
                <p>
                  {order?.address.neighborhood} - {order?.address.city},{' '}
                  {order?.address.state}
                </p>
              </div>
            </InfoBox>
            <InfoBox>
              <IconItem variant="yellow">
                <Timer size={16} weight="fill" />
              </IconItem>
              <div>
                <p>Previsão de entrega</p>
                <span>20 min - 30 min</span>
              </div>
            </InfoBox>
            <InfoBox>
              <IconItem variant="yellowDark">
                <DollarIcon size={16} color="white" />
              </IconItem>
              <div>
                <p>Pagamento na entrega</p>
                <span>
                  {order?.paymentMethod &&
                    paymentMethodMap[order.paymentMethod]}
                </span>
              </div>
            </InfoBox>
          </InfoContainer>
        </Info>
      </SuccessContent>
      <img
        src="/coffee-delivery/images/Illustration.svg"
        alt="Illustration"
        style={{ marginTop: '5.3rem' }}
      />
    </SuccessContainer>
  )
}
