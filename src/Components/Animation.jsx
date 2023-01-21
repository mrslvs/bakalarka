import React from 'react';

const Animation = ({ angle }) => {
    return (
        <div id="animation">
            <svg
                width="301"
                height="301"
                viewBox="0 0 301 301"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1 300.5H301M1 0.5H301M300.5 301V1M0.500013 301L0.5 1M278.5 300V151"
                    stroke="black"
                />
                <line x1="278" y1="151.5" x2="78" y2={angle} stroke="#FF0000" />
            </svg>
        </div>
    );
};

export default Animation;
