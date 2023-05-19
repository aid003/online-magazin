import React from 'react'
import Header from './Header/Header'
import styles from '../styles/MainContainer.module.css'

const MainContainer = ({children}) => {
  return (
	<>
	  <Header />
	  <div className={styles.mainContainer}>
		{children}
	  </div>
	</>
  )
}

export default MainContainer
