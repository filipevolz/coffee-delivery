import { Bank, CreditCard, Money } from 'phosphor-react'
import {
  DollarIcon,
  PaymentHeader,
  PaymentContainer,
  PaymentOptions,
  PaymentOption,
} from './styles'
import { useState } from 'react'
import { FieldError, UseFormSetValue } from 'react-hook-form'
import { CreateOrderFormData } from '../../pages/Cart'
import { Error } from '../Address/styles'

type PaymentOptionType = 'credit' | 'debit' | 'money'

interface PaymentProps {
  setValue: UseFormSetValue<CreateOrderFormData>
  error?: FieldError | undefined
}

export function Payment({ setValue, error }: PaymentProps) {
  const [selectedOption, setSelectedOption] =
    useState<PaymentOptionType | null>(null)

  const handleOptionSelect = (option: PaymentOptionType) => {
    setSelectedOption(option)
    setValue('paymentMethod', option)
  }
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
          onClick={() => {
            handleOptionSelect('credit')
          }}
          style={{
            border: selectedOption === 'credit' ? '1px solid #8047F8' : '',
            backgroundColor: selectedOption === 'credit' ? '#EBE5F9' : '',
          }}
        >
          <CreditCard size={16} />
          <span>Cartão de crédito</span>
        </PaymentOption>
        <PaymentOption
          onClick={() => {
            handleOptionSelect('debit')
          }}
          style={{
            border: selectedOption === 'debit' ? '1px solid #8047F8' : '',
            backgroundColor: selectedOption === 'debit' ? '#EBE5F9' : '',
          }}
        >
          <Bank size={16} />
          <span>Cartão de débito</span>
        </PaymentOption>
        <PaymentOption
          onClick={() => {
            handleOptionSelect('money')
          }}
          style={{
            border: selectedOption === 'money' ? '1px solid #8047F8' : '',
            backgroundColor: selectedOption === 'money' ? '#EBE5F9' : '',
          }}
        >
          <Money size={16} />
          <span>Dinheiro</span>
        </PaymentOption>
      </PaymentOptions>
      {error && (
        <Error style={{ textAlign: 'center', fontSize: '1rem' }}>
          Selecione a forma de pagamento.
        </Error>
      )}
    </PaymentContainer>
  )
}
