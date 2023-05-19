import React, { useContext } from 'react'
import styles from '../../styles/CartBar.module.css'
import { CartContext } from '@/context/cartContext'

const CartBar = () => {
  const { items, removeFromCart } = useContext(CartContext)



  return (
    <div className={styles.container}>
      {!items.length && <p>Вы ещё не выбрали товар</p>}
      <ul className={styles.cartList}>
        {items.map((item) => (
          <li className={styles.cartItem} key={item.id}>
            <p className={styles.index}>{(items.indexOf(item)) + 1}</p>
            <div className={styles.info}>
              <p className={styles.cartName}>{item.name}</p>
              <p className={styles.cartPrice}>{item.price}<strong>₽</strong></p>
              <button className={styles.cancelButton} onClick={() => { removeFromCart(item.id) }}>Отмена</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CartBar
