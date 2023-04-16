import React from 'react';

const Animation = ({ angle }) => {
    return (
        <div id="animation">
            {/* <svg
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
            </svg> */}

            <svg
                width="228"
                height="168"
                viewBox="0 0 228 168"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_d_0_1)">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M104 140H204V160H104L4 160V140L104 140ZM109 148C109 145.239 111.239 143 114 143C116.761 143 119 145.239 119 148V153C119 155.761 116.761 158 114 158C111.239 158 109 155.761 109 153V148ZM154 143C151.239 143 149 145.239 149 148V153C149 155.761 151.239 158 154 158C156.761 158 159 155.761 159 153V148C159 145.239 156.761 143 154 143ZM169 148C169 145.239 171.239 143 174 143C176.761 143 179 145.239 179 148V153C179 155.761 176.761 158 174 158C171.239 158 169 155.761 169 153V148ZM194 143C191.239 143 189 145.239 189 148V153C189 155.761 191.239 158 194 158C196.761 158 199 155.761 199 153V148C199 145.239 196.761 143 194 143ZM129 148C129 145.239 131.239 143 134 143C136.761 143 139 145.239 139 148V153C139 155.761 136.761 158 134 158C131.239 158 129 155.761 129 153V148ZM9 148C9 145.239 11.2386 143 14 143C16.7614 143 19 145.239 19 148V153C19 155.761 16.7614 158 14 158C11.2386 158 9 155.761 9 153V148ZM54 143C51.2386 143 49 145.239 49 148V153C49 155.761 51.2386 158 54 158C56.7614 158 59 155.761 59 153V148C59 145.239 56.7614 143 54 143ZM69 148C69 145.239 71.2386 143 74 143C76.7614 143 79 145.239 79 148V153C79 155.761 76.7614 158 74 158C71.2386 158 69 155.761 69 153V148ZM94 143C91.2386 143 89 145.239 89 148V153C89 155.761 91.2386 158 94 158C96.7614 158 99 155.761 99 153V148C99 145.239 96.7614 143 94 143ZM29 148C29 145.239 31.2386 143 34 143C36.7614 143 39 145.239 39 148V153C39 155.761 36.7614 158 34 158C31.2386 158 29 155.761 29 153V148Z"
                        fill="#A30000"
                    />
                </g>
                <g filter="url(#filter1_d_0_1)">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M204 160V0H224V160H204ZM212 155C209.239 155 207 152.761 207 150C207 147.239 209.239 145 212 145H217C219.761 145 222 147.239 222 150C222 152.761 219.761 155 217 155H212ZM207 130C207 132.761 209.239 135 212 135H217C219.761 135 222 132.761 222 130C222 127.239 219.761 125 217 125H212C209.239 125 207 127.239 207 130ZM212 115C209.239 115 207 112.761 207 110C207 107.239 209.239 105 212 105H217C219.761 105 222 107.239 222 110C222 112.761 219.761 115 217 115H212ZM207 90C207 92.7614 209.239 95 212 95H217C219.761 95 222 92.7614 222 90C222 87.2386 219.761 85 217 85H212C209.239 85 207 87.2386 207 90ZM212 75C209.239 75 207 72.7614 207 70C207 67.2386 209.239 65 212 65H217C219.761 65 222 67.2386 222 70C222 72.7614 219.761 75 217 75H212ZM207 50C207 52.7614 209.239 55 212 55H217C219.761 55 222 52.7614 222 50C222 47.2386 219.761 45 217 45H212C209.239 45 207 47.2386 207 50ZM212 35C209.239 35 207 32.7614 207 30C207 27.2386 209.239 25 212 25H217C219.761 25 222 27.2386 222 30C222 32.7614 219.761 35 217 35H212ZM207 10C207 12.7614 209.239 15 212 15H217C219.761 15 222 12.7614 222 10C222 7.23857 219.761 5 217 5H212C209.239 5 207 7.23857 207 10Z"
                        fill="#0010A3"
                    />
                </g>
                <circle cx="214" cy="30" r="5" fill="black" />
                <path d="M53 98H93V118H53V98Z" fill="black" />
                <path d="M53 118H58V140H53V118Z" fill="black" />
                <path d="M88 118H93V140H88V118Z" fill="black" />
                {/* <line x1="214" y1="30.5" x2="34" y2="30.5" stroke="#A30000" /> */}
                <line x1="214" y1="30.5" x2="34" y2={angle} stroke="#A30000" />
                <defs>
                    <filter
                        id="filter0_d_0_1"
                        x="0"
                        y="140"
                        width="208"
                        height="28"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_0_1"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_0_1"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter1_d_0_1"
                        x="200"
                        y="0"
                        width="28"
                        height="168"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_0_1"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_0_1"
                            result="shape"
                        />
                    </filter>
                </defs>
            </svg>
        </div>
    );
};

export default Animation;
