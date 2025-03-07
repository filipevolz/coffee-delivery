import { Bank, CreditCard, Money } from 'phosphor-react'
import {
  DollarIcon,
  PaymentHeader,
  PaymentContainer,
  PaymentOptions,
  PaymentOption,
} from './styles'
import { useState } from 'react'

type PaymentOptionType = 'credit' | 'debit' | 'money'

export function Payment() {
  const [selectedOption, setSelectedOption] =
    useState<PaymentOptionType | null>(null)
  return (
    <PaymentContainer>
      <PaymentHeader>
        <DollarIcon size={22} />
        <div>
          <p>Pagamento</p>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </PaymentHeader>
      <PaymentOptions>
        <PaymentOption
          onClick={() => setSelectedOption('credit')}
          style={{
            border: selectedOption === 'credit' ? '1px solid #8047F8' : '',
            backgroundColor: selectedOption === 'credit' ? '#EBE5F9' : '',
          }}
        >
          <CreditCard size={16} />
          <span>Cartão de crédito</span>
        </PaymentOption>
        <PaymentOption
          onClick={() => setSelectedOption('debit')}
          style={{
            border: selectedOption === 'debit' ? '1px solid #8047F8' : '',
            backgroundColor: selectedOption === 'debit' ? '#EBE5F9' : '',
          }}
        >
          <Bank size={16} />
          <span>Cartão de débito</span>
        </PaymentOption>
        <PaymentOption
          onClick={() => setSelectedOption('money')}
          style={{
            border: selectedOption === 'money' ? '1px solid #8047F8' : '',
            backgroundColor: selectedOption === 'money' ? '#EBE5F9' : '',
          }}
        >
          <Money size={16} />
          <span>Dinheiro</span>
        </PaymentOption>
      </PaymentOptions>
    </PaymentContainer>
  )
}
