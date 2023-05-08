import React, {useContext} from 'react';
import '@styles/ListProduct.scss';
import add from '@icons/cancelar.png';
import AppContext from '../context/AppContext';

const Product = ({product}) => {

    const {addToCart} = useContext(AppContext);

    const handleCart = item => {
      addToCart(item);
    }

    return (
        <div className="product-card">
        <img src={product.images[0]} alt={product.tittle}/>
        <div className="product-info">
          <div>
            <p>${product.price}</p>
            <p>{product.title}</p>
          </div>
          <figure onClick={() => handleCart(product)}>
            <img src={add} alt=""/>
          </figure>
        </div>
      </div>
    );
}

export default Product;