import React from 'react'
import './CheckoutProduct.css'
import  { useStatevalue, useStateValue } from './StateProvider'

function CheckoutProduct({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStatevalue();

    console.log()

    const removeFromBasket = () => {
        //remove items from the baskets....
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
      
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>

                <p className="checkoutProduct__price">
                <small>INR</small>
                <strong>{price}</strong>
                </p>
                <div className="checkProduct__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p>⭐</p>
                ))}
            </div>

            <button onClick={removeFromBasket}>Remove from basket</button>

            </div>
            
        </div>
    )
}

export default CheckoutProduct
