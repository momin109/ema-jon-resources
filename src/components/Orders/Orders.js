import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products);

    const handleRemovePrduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest);
        removeFromDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className='reviewitem-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemovePrduct={handleRemovePrduct}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <Link to="shipment">
                        <button>Proceed Check out</button>
                    </Link>
                </Cart>
            </div>


        </div>
    );
};

export default Orders;