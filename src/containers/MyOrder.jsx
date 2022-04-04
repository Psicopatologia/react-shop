import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import flechita from '@icons/flechita.svg';
import AppContext from '@context/AppContext'
import '@styles/MyOrder.scss';

const MyOrder = () => {
	const { state } = useContext(AppContext);
	if (state) console.log(state);
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={flechita} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`} />
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>$560.00</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
