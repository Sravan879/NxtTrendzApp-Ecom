import {MdRemoveShoppingCart} from 'react-icons/md'
import Popup from 'reactjs-popup'

import CartContext from '../../context/CartContext'

import Header from '../Header'
import CartListView from '../CartListView'

import EmptyCartView from '../EmptyCartView'
import CartSummary from '../CartSummary'

import './index.css'

const contentStyle = {borderRadius: '10px'}

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      const removeAll = () => {
        removeAllCartItems()
      }
      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <div className="heading-remove-header">
                  <h1 className="cart-heading">My Cart</h1>
                  <div className="popup-container">
                    <Popup
                      modal
                      {...{contentStyle}}
                      trigger={
                        <button type="button" className="remove-all-button">
                          <div className="cartDiv">
                            <MdRemoveShoppingCart size={20} color="#0967d2" />
                          </div>
                          <p className="remove-all">Remove All</p>
                        </button>
                      }
                    >
                      {close => (
                        <div className="modal-container">
                          <p className="modal-heading">
                            Are you sure you want to delete all CartItems?
                          </p>
                          <div className="model-buttons">
                            <button
                              type="button"
                              className="remove-ok"
                              onClick={removeAll}
                            >
                              ok
                            </button>
                            <button
                              type="button"
                              className="remove-ok cancel"
                              onClick={() => close()}
                            >
                              cancel
                            </button>
                          </div>
                        </div>
                      )}
                    </Popup>
                  </div>
                </div>

                <CartListView />
                <CartSummary />
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
