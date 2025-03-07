import axios from 'axios'

import {
  AddressHeader,
  AddressInfo,
  AddressInputs,
  MapIcon,
  AddressInput,
} from './styles'
import { useEffect, useState } from 'react'

interface AddressProps {
  zipCode: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  state: string
}

export function Address() {
  const [address, setAddress] = useState<AddressProps>({
    zipCode: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
  })

  const zipCodeMask = (value: string) => {
    if (!value) return ''
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{5})(\d)/, '$1-$2')
    return value
  }

  async function getAddress(zipCode: string) {
    const cleanedZipCode = zipCode.replace(/\D/g, '')
    const response = await axios.get(
      `https://viacep.com.br/ws/${cleanedZipCode}/json/`,
    )
    if (response.status === 200) {
      return setAddress({
        zipCode: response.data.cep,
        street: response.data.logradouro,
        number: '',
        complement: '',
        neighborhood: response.data.bairro,
        city: response.data.localidade,
        state: response.data.uf,
      })
    } else {
      console.error('Failed to fetch address data:', response.status)
      return null
    }
  }

  useEffect(() => {
    if (address.zipCode.length === 9) {
      getAddress(address.zipCode)
    }
  }, [address.zipCode])

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
        <AddressInput
          type="string"
          placeholder="CEP"
          maxLength={9}
          value={address.zipCode}
          onChange={(event) => {
            const rawValue = event.target.value.replace(/\D/g, '')
            setAddress({ ...address, zipCode: zipCodeMask(rawValue) })
          }}
        />
        <AddressInput
          type="text"
          placeholder="Rua"
          value={address.street}
          onChange={(event) =>
            setAddress({ ...address, street: event.target.value })
          }
        />
        <AddressInput
          type="string"
          placeholder="Número"
          value={address.number}
          onChange={(event) =>
            setAddress({ ...address, number: event.target.value })
          }
        />
        <div>
          <AddressInput
            type="text"
            placeholder="Complemento"
            value={address.complement}
            onChange={(event) =>
              setAddress({ ...address, complement: event.target.value })
            }
          />
          {address.complement === '' && <em>Opcional</em>}
        </div>
        <AddressInput
          type="text"
          placeholder="Bairro"
          value={address.neighborhood}
          onChange={(event) =>
            setAddress({ ...address, neighborhood: event.target.value })
          }
        />
        <AddressInput
          type="text"
          placeholder="Cidade"
          value={address.city}
          onChange={(event) =>
            setAddress({ ...address, city: event.target.value })
          }
        />
        <AddressInput
          type="text"
          placeholder="UF"
          maxLength={2}
          value={address.state}
          onChange={(event) =>
            setAddress({ ...address, state: event.target.value })
          }
        />
      </AddressInputs>
    </AddressInfo>
  )
}
