import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStatevalue } from './StateProvider'
import { getBasketTotal } from './Reduce';

function Subtotal() {

    const [{basket}, dispatch] = useStatevalue();

    return (
        <div className="subtotal">
            {/* Price */}
            <CurrencyFormat
            renderText={(value) => (
              <>
              <p>
            SubTotal ({basket.length} items): <strong>{`${value}`}</strong>
              </p>
              <small className="subtotal__gift">
                  <input type="checkbox"/>This order contains the gift card

              </small>
              </>

            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"INR:"}>

            </CurrencyFormat>
            <button>Proceed To Checkout</button>
            
        </div>
    )
}

export default Subtotal
