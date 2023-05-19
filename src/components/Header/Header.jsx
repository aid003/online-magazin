import React, { useState } from 'react'
import styles from '../../styles/Header.module.css'

import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineSearch } from 'react-icons/ai'
import { ImCancelCircle } from 'react-icons/im'
import { RxPerson } from 'react-icons/rx'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { BsCart2 } from 'react-icons/bs'
import Head from 'next/head'
import Link from 'next/link'
import CategoryBar from '../CategoryBar/CategoryBar'
import CartBar from '../CartBar/CartBar'




const Header = () => {

	const [isShowCategory, setIsShowCategory] = useState(false)
	const [isShowCart, setIsShowCart] = useState(false)

	const showCategoryHandler = () => {
		!isShowCategory ? setIsShowCategory(true) : setIsShowCategory(false)
	}

	const showCartHandler = () => {
		!isShowCart ? setIsShowCart(true) : setIsShowCart(false)
	}

	return (
		<>
			<Head>
				<title>Magazine</title>
				<meta name="description" content="Magazine for you" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className={styles.container}>
				<h1 className={styles.header}>
					<Link href='/'>Magazine shope</Link>
				</h1>
				<div className={styles.catalog} onClick={showCategoryHandler}>
					<RxHamburgerMenu size={25}></RxHamburgerMenu>
					<p className={styles.catalogP}>Каталог</p>
				</div>
				<form className={styles.seacher}>
					<input className={styles.formInput} type='text' placeholder='Искать товары'></input>
					<div className={styles.formButtons}>
						<div className={styles.buttonCancel}>
							<ImCancelCircle size={15}></ImCancelCircle>
						</div>
						<div className={styles.buttonSearch}>
							<AiOutlineSearch size={25}></AiOutlineSearch>
						</div>
					</div>
				</form>
				<div className={styles.actions}>
					<div className={styles.logIn}>
						<RxPerson size={25}></RxPerson>
						<p className={styles.logInP}>Войти</p>
					</div>
					<div className={styles.order}>
						<HiOutlineShoppingBag size={25}></HiOutlineShoppingBag>
						<p className={styles.orderP}>Заказы</p>
					</div>
					<div className={styles.cart} onClick={showCartHandler}>
						<BsCart2 size={25}></BsCart2>
						<p className={styles.cartP}>Корзина</p>
					</div>
				</div>
			</div>
			{isShowCategory && <CategoryBar />}
			{isShowCart && <CartBar />}
		</>
	)
}

export default Header
