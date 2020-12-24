import React from 'react'
import { useStatevalue } from './StateProvider'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';



function Checkout() {

    const [{ basket }] = useStatevalue();

    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg">

            </img>

            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is Empty</h2>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>

                    {/* List out all the checkout products */}
                    {basket.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        >

                        </CheckoutProduct>
                    

                        
                    ))}


                </div>

            )}
            </div>

            {basket.length > 0 && (
                <div className="checkout__right">
                    <h1>SubTotal</h1>
                    <Subtotal></Subtotal>
                </div>
            )}

            
        </div>
    )
}

export default Checkout
