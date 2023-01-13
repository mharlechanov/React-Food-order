
import React, { useContext, useEffect, useState } from 'react'
import styles from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'

export default function HeaderCartButton(props) {
    const [btnAnim, setBtnAnim] = useState(false)
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;

    }, 0);


    const btnClasses = `${styles.button} ${btnAnim ? styles.bump : ''}`;


    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnAnim(true)

        const timer = setTimeout(() => {
            setBtnAnim(false)
        }, 300);

        return () => {
            clearTimeout(timer)
        };
    }, [items])

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span >Your Cart</span>
            <span className={styles.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )
}
