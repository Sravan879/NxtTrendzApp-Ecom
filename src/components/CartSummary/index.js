// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(Item => {
        total += Item.price * Item.quantity
      })

      return (
        <div className="card-total-container">
          <h1 className="order-total-heading">
            <span className="order-total-label">Order Total:</span> Rs {total}
            /-
          </h1>
          <p className="total-items">{cartList.length} Items in cart</p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
