import React, { useState, useEffect } from "react"
import slide1 from "./img/slide_1.png"
import slide2 from "./img/slide_2.png"
import slide3 from "./img/slide_3.png"
import styles from '../../styles/Slider.module.css'
import Image from 'next/image'

const img = [
	<Image key={slide1} src={slide1} alt='img'/>,
	<Image key={slide2} src={slide2} alt='img'/>,
	<Image key={slide3} src={slide3} alt='img'/>,
]
const Slider = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	// Хук Effect
	useEffect(() => {
		// Запускаем интервал
		const interval = setInterval(() => {
			// Меняем состояние
			setActiveIndex((current) => {
				// Вычисляем индекс следующего слайда, который должен вывестись
				const res = current === img.length - 1 ? 0 : current + 1
				// Возвращаем индекс
				return res
			})
		}, 7000)
		// Выключаем интервал
		return () => clearInterval()
	}, [])

	// Вычисляем индекс предыдущего слайда
	const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
	// Вычисляем индекс следующего слайда
	const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1

	return (
		<div className={styles.slider}>
			<div className={`${styles.sliderImg} ${styles.sliderImgPrev}`}
					key={prevImgIndex}>
				{img[prevImgIndex]}
			</div>
			<div className={styles.sliderImg}
					key={activeIndex}>
				{img[activeIndex]}
			</div>
			<div className={`${styles.sliderImg} ${styles.sliderImgNext}`}
					key={nextImgIndex}>
				{img[nextImgIndex]}
			</div>
		</div>
	)
}

export default Slider
