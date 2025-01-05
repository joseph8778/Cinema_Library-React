import CartItem from '../components/CartItem';
import { Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { RiArrowLeftLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const CartCheckout = ({cart, setCart, setTotalQuant}) => { 
    const [subTotal, setSubTotal] = useState(0);
    const taxRate = .1

useEffect(() => {
    const calculateSubTotal = () => {
    if (cart.length > 0) {
        const subTotalCalc = cart.reduce((acc, item) => acc + item.quantity * item.price, 0)
        setSubTotal(subTotalCalc)}
    else {setSubTotal(0)}
    };

    calculateSubTotal();
}, [cart]);


    const removeCartItem = (id) => {
        setCart((prevCart) => prevCart.filter(item => item.movie.imdbID !== id));
    }

    

    return (
        <div className="checkout">
            <div className="container">
                <div className="row">
            <Link to="/search">
                            <Button 
                            colorPalette="red" 
                            variant="solid"
                            >
                            <RiArrowLeftLine /> Movies
                            </Button>
            </Link>
                    <div className="cart__title">
                        <h1>Cart</h1>
                    </div>
                    <div className="cart__header">
                        <h1 className='htxt header__movie'>Movie</h1>
                        <h1 className='htxt header__quantity'>Quantity</h1>
                        <h1 className='htxt header__price'>Price</h1>
                    </div>
                
                    {cart.length > 0 ? (
                        cart.map((item) => (
                            <CartItem
                            key={item.id}
                            movieOb={item}
                            remove={removeCartItem}
                            cart={cart}
                            setCart={setCart}
                            />
                        ))
                        ) : (
                            <img src="./assets/empty-cart.png" alt="" />
                        )}


                <div className="checkout__container">
                    <div className="checkout__wrapper">
                        <div className="checkout__text Subtotal">
                            <span>Subtotal</span>
                            <span>${subTotal.toFixed(2)}</span>
                        </div>
                        <div className="checkout__text Taxes">
                            <span>Tax</span>
                            <span>${(subTotal * taxRate).toFixed(2)}</span>
                        </div>
                        <div className="checkout__text Total">
                            <span>Total</span>
                            <span>${(subTotal * (1 + taxRate)).toFixed(2)}</span>
                        </div>
                        <Button colorPalette="red" variant="solid">
                             Proceed to checkout
                        </Button>
                    </div>
                </div>

                </div>
            </div>
        </div>
    );
}

export default CartCheckout;