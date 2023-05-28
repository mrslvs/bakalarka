import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Modal = ({ setIsModalOpen }) => {
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-10 backdrop-blur-sm">
            <div className="max-w-2xl bg-white rounded-md p-4 ">
                <AiOutlineCloseCircle
                    className="h-8 w-8 hover:text-blue-300"
                    onClick={closeModal}
                />
                <p>Táto aplikácia vznikla ako bakalársky projekt</p>
            </div>
        </div>
    );
};

export default Modal;
