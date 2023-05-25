import React from 'react';
import logo from '../Assets/Images/fei_logo_transparent.png';
import { BsFillInfoCircleFill } from 'react-icons/bs';

const Header = ({ setIsModalOpen }) => {
    const openModal = () => {
        setIsModalOpen(true);
    };

    return (
        <div className="flex w-1/1 p-3 justify-between bg-slate-400">
            {/* IMAGE */}
            {/* source: https://www.fei.stuba.sk/buxus/assets/images/web/icons/fei_800.png */}
            {/* transparent-background: https://www.remove.bg/ */}
            <div className="self-center w-1/3">
                <img src={logo} alt="Logo" className="w-20 self-center" />
            </div>

            {/* HEADER */}
            <div className="flex justify-center w-1/3">
                <h1 className="text-blue-600 self-center font-bruno text-2xl ">
                    Arduino controll software
                </h1>
            </div>
            <div className="flex justify-end w-1/3" onClick={openModal}>
                {/* <p className="text-blue-600 self-center bg-blue-400">information</p> */}
                <BsFillInfoCircleFill className="w-8 h-8 text-blue-600" />
            </div>
        </div>
    );
};

export default Header;
