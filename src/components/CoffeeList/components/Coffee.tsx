import { useContext, useState } from 'react'
import { ShoppingCart } from 'phosphor-react'
import {
  CoffeContainer,
  TagsList,
  TagsItem,
  CoffeTitle,
  CoffeDescription,
  CoffeeFooter,
  CofferPrice,
  ButtonsActions,
  CartButton,
} from './styles'
import { BtnCounter } from '../../BtnCounter'
import { CoffeesContext } from '../../../contexts/CoffeesContext'

interface CoffeeProps {
  id: string
  img: string
  tags: string[]
  name: string
  description: string
  price: number
}
export function Coffee({
  id,
  img,
  tags,
  name,
  description,
  price,
}: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useContext(CoffeesContext)

  function handleAddToCart() {
    console.log('Adicionando ao carrinho:', { id, quantity })
    addToCart(id, quantity)
  }

  return (
    <CoffeContainer>
      <img src={img} alt={name} />
      <TagsList>
        {tags.map((tag) => {
          return <TagsItem key={tag}>{tag}</TagsItem>
        })}
      </TagsList>
      <CoffeTitle>{name}</CoffeTitle>
      <CoffeDescription>{description}</CoffeDescription>
      <CoffeeFooter>
        <CofferPrice>
          R$ <span>{price}</span>
        </CofferPrice>
        <ButtonsActions>
          <BtnCounter quantity={quantity} setQuantity={setQuantity} />
          <CartButton onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </ButtonsActions>
      </CoffeeFooter>
    </CoffeContainer>
  )
}
