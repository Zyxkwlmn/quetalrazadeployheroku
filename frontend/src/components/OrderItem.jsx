import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import '@styles/OrderItem.scss';
import close from '@icons/cancelar.png'

const OrderItem = ({product}) => {

	const {removeFromCart} = useContext(AppContext);
	const hanldeRemove = product => {
		removeFromCart(product);
	}
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.tittle} />
			</figure>
			<p>{product.tittle}</p>
			<p>${product.price}</p>
			<img src={close} alt="close" onClick={() => hanldeRemove(product)}/>
		</div>
	);
}

export default OrderItem;