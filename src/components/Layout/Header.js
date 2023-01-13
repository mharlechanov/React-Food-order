import React from 'react'
import HeaderCartButton from './HeaderCartButton'
import mealsImage from '../../assets/meals.jpg'
import styles from './Header.module.css'

function Header(props) {

    
    return (
        <>
            <header className={styles.header}>
                <h1>Meals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={styles[`main-image`]}>
                <img alt="A table full of delicios food!" src={mealsImage} />
            </div>
        </>
    )
}

export default Header