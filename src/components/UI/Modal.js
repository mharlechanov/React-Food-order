import React from 'react'
import { createPortal } from 'react-dom'
import styles from './Modal.module.css'

function Backdrop(props) {
    return (
        <div className={styles.backdrop} onClick={props.onClose}></div>
    )
}

function ModalOverlay(props) {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById("overlays")
export default function Modal(props) {

    return (
        <>
            {createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
            {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
    )
}
