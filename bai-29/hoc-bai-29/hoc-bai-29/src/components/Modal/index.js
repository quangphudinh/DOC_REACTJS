import { useState } from 'react'
import './Modal.scss'
function Modal() {
    const [showModal, setShowModal] = useState(true)
    const headleShowModal = () =>
    {
        setShowModal(true)
    }
    const headleCloseModal = () =>
        {
            setShowModal(false)
        }

    return (
        <>

            <button onClick={headleShowModal}>Click</button>
            {showModal &&
                (
                    <div className="modal">
                        <div className="modal-body">
                            <button className="modal-close"  onClick={headleCloseModal}>
                                x
                            </button>
                            <div className="modal-content">
                                Noi dung ...
                            </div>
                        </div>
                    </div>
                )}
        </>
    )
}

export default Modal