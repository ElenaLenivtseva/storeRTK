import React from 'react'
import CartItem from './CartItem/CartItem'

const cartCards = [
    {},
    {}
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
        <p className="cart__totalText"></p>
        <p className="cart__totalPrice"></p>
      </div>
      <Button className='button button_black'>Go to Checkout</Button>
      <Button className='button button_withoutOutline'>Go to Checkout</Button>
    </div>
  )
}

export default Cart
