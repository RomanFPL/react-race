import cn from "classnames";

import s from "./style.module.css"

const Modal = ({title, children, onCloseModal, isOpen}) => {

    const handleCloseModal = () => {
        onCloseModal && onCloseModal(false)
    }

    return (
        <div className={cn(s.root, {[s.open] : isOpen})}>
            <div className={s.modal}>
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