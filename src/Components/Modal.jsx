import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Modal = ({ setIsModalOpen }) => {
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-10 backdrop-blur-sm">
            <div className="max-w-2xl bg-white rounded-md p-4 ">
                <AiOutlineCloseCircle className="h-8 w-8" onClick={closeModal} />
                <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa fugiat ipsam vero
                    obcaecati, mollitia dicta facere dolor sed nostrum voluptates natus harum unde
                    impedit modi molestias porro expedita alias consequatur! Ea totam soluta,
                    officiis recusandae consectetur qui perspiciatis distinctio eum architecto
                    quibusdam? Ipsum, fuga veniam quibusdam alias explicabo expedita facere illum
                    neque, doloribus nam reprehenderit? Adipisci est iste neque possimus?Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Quisquam ducimus labore ea
                    consequuntur aspernatur? Laboriosam ullam, repellat aut fuga, sequi excepturi
                    explicabo, doloribus consequatur alias reiciendis harum modi aliquid obcaecati?
                </p>
            </div>
        </div>
    );
};

export default Modal;
