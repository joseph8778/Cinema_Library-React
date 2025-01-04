import CartItem from '../components/CartItem';
import { Button } from '@chakra-ui/react';
import React from 'react';
import { RiArrowLeftLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const CartCheckout = () => {
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
                    <CartItem/>

                    <div className="checkout__wrapper">
                        <div className="Subtotal">
                            <span>Subtotal</span>
                            <span>40$</span>
                        </div>
                        <div className="Taxes">
                            <span>Tax</span>
                            <span>2$</span>
                        </div>
                        <div className="Total">
                            <span>Total</span>
                            <span>42$</span>
                        </div>
                        <Button 
                            colorPalette="red" 
                            variant="solid"
                            >
                            <RiArrowLeftLine /> Movies
                            </Button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CartCheckout;