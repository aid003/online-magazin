import React from 'react'
import styles from '../../styles/CategoryBar.module.css'

const CategoryBar = () => {
  return (
	<div className={`${styles.container}`}>
	  <ul className={styles.CategoryList}>
		<li className={styles.CategotyItem}>Игрушки</li>
		<li className={styles.CategotyItem}>Книги</li>
		<li className={styles.CategotyItem}>Сигареты</li>
		<li className={styles.CategotyItem}>Кроссовки</li>
		<li className={styles.CategotyItem}>Ноутбуки</li>
		<li className={styles.CategotyItem}>Телефоны</li>
	  </ul>
	</div>
  )
}

export default CategoryBar
