import React from 'react';
import logo from '../Assets/Images/fei_logo_transparent.png';

const Header = () => {
    return (
        <div className="flex w-1/1">
            {/* IMAGE */}
            {/* source: https://www.fei.stuba.sk/buxus/assets/images/web/icons/fei_800.png */}
            {/* transparent-background: https://www.remove.bg/ */}
            <img src={logo} alt="Logo" className="w-20 self-center" />

            {/* HEADER */}
            <h1 className="text-blue-600 self-center font-bruno">Arduino controll software</h1>
        </div>
    );
};

export default Header;
