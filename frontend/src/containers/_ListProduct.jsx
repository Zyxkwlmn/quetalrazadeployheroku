import React from 'react';
import Product  from '../components/Product';
import '../styles/ListProduct.scss';
import useGetProducts from '../hooks/useGetProduct';

const API = 'https://api.escuelajs.co/api/v1/products';

const ListProduct = () => {

    const products = useGetProducts(API);
    return (
        <section className="main-container">
        <div className="cards-container">
            {products.map(product => (
                <Product product={product} key={product.id}/>
            ))}
        </div>
        </section>
        
    );
}

export default ListProduct;