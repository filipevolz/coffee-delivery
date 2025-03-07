import {
  AddressHeader,
  AddressInfo,
  AddressInputs,
  MapIcon,
  AddressInput,
  ComplementContainer,
  InputContainer,
  Error,
} from './styles'
import {
  UseFormRegister,
  UseFormWatch,
  UseFormSetValue,
  FieldError,
} from 'react-hook-form'
import { CreateOrderFormData } from '../../pages/Cart'
import { useEffect } from 'react'
import axios from 'axios'

interface AddressProps {
  register: UseFormRegister<CreateOrderFormData>
  watch: UseFormWatch<CreateOrderFormData>
  setValue: UseFormSetValue<CreateOrderFormData>
  error?: Partial<Record<keyof CreateOrderFormData['address'], FieldError>>
}

export function Address({ register, watch, setValue, error }: AddressProps) {
  const cep = watch('address.cep')
  const complement = watch('address.complement')

  async function getAddress(zipCode: string) {
    const response = await axios.get(
      `https://viacep.com.br/ws/${zipCode}/json/`,
    )
    const data = response.data
    if (data) {
      setValue('address.cep', data.cep)
      setValue('address.street', data.logradouro)
      setValue('address.number', '')
      setValue('address.complement', '')
      setValue('address.neighborhood', data.bairro)
      setValue('address.city', data.localidade)
      setValue('address.state', data.uf)
    } else {
      console.error('Failed to fetch address data:', response.status)
      return null
    }
  }

  useEffect(() => {
    const zipCode = cep || ''
    const zipCodeNumber = zipCode.replace('-', '')
    if (zipCodeNumber.length === 8) {
      getAddress(zipCodeNumber)
    }
  }, [cep])

  return (
    <AddressInfo>
      <AddressHeader>
        <MapIcon size={22} />
        <div>
          <p>Endereço de entrega</p>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </AddressHeader>
      <AddressInputs>
        <InputContainer>
          <AddressInput
            type="string"
            placeholder="CEP"
            {...register('address.cep')}
          />
          {error?.cep && <Error>{error.cep.message}</Error>}
        </InputContainer>
        <InputContainer>
          <AddressInput
            type="text"
            placeholder="Rua"
            {...register('address.street')}
          />
          {error?.street && <Error>{error.street.message}</Error>}
        </InputContainer>
        <InputContainer>
          <AddressInput
            type="string"
            placeholder="Número"
            {...register('address.number')}
          />
          {error?.number && <Error>{error.number.message}</Error>}
        </InputContainer>
        <InputContainer>
          <ComplementContainer>
            <AddressInput
              type="text"
              placeholder="Complemento"
              {...register('address.complement')}
            />
            {complement === '' && <em>Opcional</em>}
          </ComplementContainer>
        </InputContainer>
        <InputContainer>
          <AddressInput
            type="text"
            placeholder="Bairro"
            {...register('address.neighborhood')}
          />
          {error?.neighborhood && <Error>{error.neighborhood.message}</Error>}
        </InputContainer>
        <InputContainer>
          <AddressInput
            type="text"
            placeholder="Cidade"
            {...register('address.city')}
          />
          {error?.city && <Error>{error.city.message}</Error>}
        </InputContainer>
        <InputContainer>
          <AddressInput
            type="text"
            placeholder="UF"
            maxLength={2}
            {...register('address.state')}
          />
          {error?.state && <Error>{error.state.message}</Error>}
        </InputContainer>
      </AddressInputs>
    </AddressInfo>
  )
}
