import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'

import styles from '../../styles/index.module.css'
import { CartContext } from '@/context/cartContext'
import { useRouter } from 'next/router'

const Product = ({ product }) => {
	const { items, addToCart, removeFromCart } = useContext(CartContext)
	const [exists, setExists] = useState(false);
	const router = useRouter()

	const { id, price, name } = product;

	const openProductPage = () => {
		router.push({
			pathname: "products/[id]",
			query: { id: id }
		})
	}

	useEffect(() => {
		const inCart = items.find((item) => item.id === id);

		if (inCart) {
			setExists(true);
		} else {
			setExists(false);
		}
	}, [items, id]);


	return (
		<li className={styles.productCard}>
			<Image onClick={openProductPage} src="/img/item1.jpg" alt='' width={200} height={200}></Image>
			<p className={styles.productPrice}>{product.price}</p>
			<p className={styles.productName}>{product.name}</p>
			{
				exists
					? <button onClick={() => removeFromCart(id)}>Удалить из корзины</button>
					: <button onClick={() => addToCart({ id, name, price })}>Купить</button>
			}
		</li>
	)
}

export default Product
