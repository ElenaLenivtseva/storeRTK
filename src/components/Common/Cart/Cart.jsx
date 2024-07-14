import React from 'react'
import Button from '../Button/Button'
import CartItem from './CartItem/CartItem'
import './Cart.scss'

const cartCards = [
    {
        id: 1,
        title: "Noir V Neck Wrap Blouse",
        img: [
          "https://img.ltwebstatic.com/images3_pi/2023/07/15/1689355312b07e31dacd0d30b161770bff88f0c3a6_thumbnail_720x_thumbnail_720x.jpg",
        ],
        price: 420,
        materials: ["Cotton 80%", "Poliester 15%", "Elastan 5%"],
        sizes: ["S", "M", "L", "XL"],
        colors: [
          { colorText: "noir", colorCode: "#000", active: true },
          { colorText: "beige", colorCode: "#FFE4B5", active: false },
        ],
        bodyTypes: ["Apple", "Pear"],
        appearanceTypes: ["GR", "RG"],
        colorTypes: ["Cold Winter"],
        note: "Model|Ella is 1.78m tall and wears a size S",
        reviews: [
          {
            id: 1,
            product: "Noir Dress",
            date: "2024-07-04",
            author: "Tyenna",
            // при отправке каждого нового отзыва нужна будет проверка, что оценка от 1 до 5
            rating: 4,
            size: "M",
            color: "Noir",
            title: "Bold and Secure!",
            comment:
              "Love the deep V-neck that always stays in place! It's daring without the worry, perfect for nights out",
          },
          {
            id: 2,
            product: "Noir Dress",
            date: "2024-07-01",
            author: "Mila",
            // при отправке каждого нового отзыва нужна будет проверка, что оценка от 1 до 5
            rating: 5,
            size: "XL",
            color: "Beige",
            title: "It's a compliment magnet!",
            comment:
              "The unique design is so eye-catching! It's my go-to for making an impression",
          },
          {
            id: 3,
            product: "Noir Dress",
            date: "2024-05-04",
            author: "Violla",
            // при отправке каждого нового отзыва нужна будет проверка, что оценка от 1 до 5
            rating: 3,
            size: "S",
            color: "Noir",
            title: "So perect",
            comment:
              "Enchanting evenings call for this dress",
          },
        ],
      }

]

const Cart = () => {
  return (
    <div className='cart'>
      <h4 className="cart__title">Cart {cartCards.length}</h4>
      <div className="cart__cardsWrap">
        {cartCards.map((item, index)=>{
            return (
                <CartItem card={item} key={index}/>
            )
        })}
      </div>
      <div className="cart__total">
        <p className="cart__totalText">Subtotal</p>
        <p className="cart__totalPrice">750</p>
      </div>
      <Button className='button button_totalBlack'>Go to Checkout</Button>
      <Button className='button button_withoutOutline'>Continue Shopping</Button>
    </div>
  )
}

export default Cart
