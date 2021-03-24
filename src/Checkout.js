import React from 'react';
import CheckOutProduct from './CheckOutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import("./Checkout.css");


function Checkout() {
    const [{ basket, user },] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" alt="" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />

                <div>
                    <h2>Hello, {user?.email} </h2>
                    <h2 className="checkout__title">Your shopping Basket</h2>

                    {basket.map(item => (
                        <CheckOutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating} />

                    ))}

                </div>

            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>



        </div>
    )
}

export default Checkout;
