import cn from "classnames";
import { useRef } from "react";

import s from "./style.module.css"

const Modal = ({title, children, onCloseModal, isOpen}) => {

    const modalEl = useRef();

    const handleCloseModal = () => {
        onCloseModal && onCloseModal(false)
    }

    const onClickRoot = (e) => {
        if(!modalEl.current.contains(e.target)) {
            handleCloseModal();
        }
    }

    return (
        <div 
            className=
                {cn(s.root, 
                {[s.open] : isOpen})}
            onClick={onClickRoot}>
            <div 
                className={s.modal}
                ref={modalEl}>
                <div className={s.head}>
                    {title}
                    <span 
                        className={s.btnClose}
                        onClick={handleCloseModal}></span>
                </div>
                <div className={s.content}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal;