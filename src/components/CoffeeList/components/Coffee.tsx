import { useState } from 'react'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  CoffeContainer,
  TagsList,
  TagsItem,
  CoffeTitle,
  CoffeDescription,
  CoffeeFooter,
  CofferPrice,
  ButtonsActions,
  CofferCounter,
  CartButton,
} from './styles'

interface CoffeeProps {
  img: string
  tags: string[]
  name: string
  description: string
  price: number
}
export function Coffee({ img, tags, name, description, price }: CoffeeProps) {
  const [countCoffe, setCountCoffe] = useState(1)
  return (
    <CoffeContainer>
      <img src={img} alt="Expresso Tradicional" />
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
          <CofferCounter>
            <button onClick={() => setCountCoffe(countCoffe - 1)}>
              <Minus size={14} weight="bold" />
            </button>
            <span>{countCoffe}</span>
            <button onClick={() => setCountCoffe(countCoffe + 1)}>
              <Plus size={14} weight="bold" />
            </button>
          </CofferCounter>
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </ButtonsActions>
      </CoffeeFooter>
    </CoffeContainer>
  )
}
