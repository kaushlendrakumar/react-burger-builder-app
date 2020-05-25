import React from 'react';
import classes from './Modal.css';

import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
    return(
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'transalteY(-100vw)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </Aux>
    )
}
export default Modal;