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
  coffee: {
    id: string
    image: string
    tags: string[]
    title: string
    description: string
    price: number
  }
}
export function Coffee({ coffee }: CoffeeProps) {
  const { addToCart } = useContext(CoffeesContext)

  const [quantity, setQuantity] = useState(1)

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function handleAddToCart() {
    addToCart(coffee.id, quantity)
  }

  return (
    <CoffeContainer>
      <img src={coffee.image} alt={coffee.title} />
      <TagsList>
        {coffee.tags.map((tag) => {
          return <TagsItem key={tag}>{tag}</TagsItem>
        })}
      </TagsList>
      <CoffeTitle>{coffee.title}</CoffeTitle>
      <CoffeDescription>{coffee.description}</CoffeDescription>
      <CoffeeFooter>
        <CofferPrice>
          R$ <span>{coffee.price.toFixed(2)}</span>
        </CofferPrice>
        <ButtonsActions>
          <BtnCounter
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
          <CartButton onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </ButtonsActions>
      </CoffeeFooter>
    </CoffeContainer>
  )
}
