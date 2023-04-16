import React from 'react';

const Animation = ({ angle }) => {
    return (
        <div id="animation">
            <svg
                width="228"
                height="208"
                viewBox="0 0 228 208"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_d_0_1)">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M104 180H204V200H104L4 200V180L104 180ZM109 188C109 185.239 111.239 183 114 183C116.761 183 119 185.239 119 188V193C119 195.761 116.761 198 114 198C111.239 198 109 195.761 109 193V188ZM154 183C151.239 183 149 185.239 149 188V193C149 195.761 151.239 198 154 198C156.761 198 159 195.761 159 193V188C159 185.239 156.761 183 154 183ZM169 188C169 185.239 171.239 183 174 183C176.761 183 179 185.239 179 188V193C179 195.761 176.761 198 174 198C171.239 198 169 195.761 169 193V188ZM194 183C191.239 183 189 185.239 189 188V193C189 195.761 191.239 198 194 198C196.761 198 199 195.761 199 193V188C199 185.239 196.761 183 194 183ZM129 188C129 185.239 131.239 183 134 183C136.761 183 139 185.239 139 188V193C139 195.761 136.761 198 134 198C131.239 198 129 195.761 129 193V188ZM9 188C9 185.239 11.2386 183 14 183C16.7614 183 19 185.239 19 188V193C19 195.761 16.7614 198 14 198C11.2386 198 9 195.761 9 193V188ZM54 183C51.2386 183 49 185.239 49 188V193C49 195.761 51.2386 198 54 198C56.7614 198 59 195.761 59 193V188C59 185.239 56.7614 183 54 183ZM69 188C69 185.239 71.2386 183 74 183C76.7614 183 79 185.239 79 188V193C79 195.761 76.7614 198 74 198C71.2386 198 69 195.761 69 193V188ZM94 183C91.2386 183 89 185.239 89 188V193C89 195.761 91.2386 198 94 198C96.7614 198 99 195.761 99 193V188C99 185.239 96.7614 183 94 183ZM29 188C29 185.239 31.2386 183 34 183C36.7614 183 39 185.239 39 188V193C39 195.761 36.7614 198 34 198C31.2386 198 29 195.761 29 193V188Z"
                        fill="#A30000"
                    />
                </g>
                <g filter="url(#filter1_d_0_1)">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M204 200V40H224V200H204ZM212 195C209.239 195 207 192.761 207 190C207 187.239 209.239 185 212 185H217C219.761 185 222 187.239 222 190C222 192.761 219.761 195 217 195H212ZM207 170C207 172.761 209.239 175 212 175H217C219.761 175 222 172.761 222 170C222 167.239 219.761 165 217 165H212C209.239 165 207 167.239 207 170ZM212 155C209.239 155 207 152.761 207 150C207 147.239 209.239 145 212 145H217C219.761 145 222 147.239 222 150C222 152.761 219.761 155 217 155H212ZM207 130C207 132.761 209.239 135 212 135H217C219.761 135 222 132.761 222 130C222 127.239 219.761 125 217 125H212C209.239 125 207 127.239 207 130ZM212 115C209.239 115 207 112.761 207 110C207 107.239 209.239 105 212 105H217C219.761 105 222 107.239 222 110C222 112.761 219.761 115 217 115H212ZM207 90C207 92.7614 209.239 95 212 95H217C219.761 95 222 92.7614 222 90C222 87.2386 219.761 85 217 85H212C209.239 85 207 87.2386 207 90ZM212 75C209.239 75 207 72.7614 207 70C207 67.2386 209.239 65 212 65H217C219.761 65 222 67.2386 222 70C222 72.7614 219.761 75 217 75H212ZM207 50C207 52.7614 209.239 55 212 55H217C219.761 55 222 52.7614 222 50C222 47.2386 219.761 45 217 45H212C209.239 45 207 47.2386 207 50Z"
                        fill="#0010A3"
                    />
                </g>
                <circle cx="214" cy="70" r="5" fill="black" />
                <path d="M53 138H93V158H53V138Z" fill="black" />
                <path d="M53 158H58V180H53V158Z" fill="black" />
                <path d="M88 158H93V180H88V158Z" fill="black" />
                {/* <line x1="214" y1="70.5" x2="34" y2="30" stroke="#A30000" /> */}
                <line x1="214" y1="70.5" x2="34" y2={angle - 50} stroke="#A30000" />
                {/* <line x1="214" y1="70.5" x2="34" y2="110" stroke="#A30000" /> */}
                <g filter="url(#filter2_d_0_1)">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M204 0V40V200H224V40V0H204ZM212 25C209.239 25 207 27.2386 207 30C207 32.7614 209.239 35 212 35H217C219.761 35 222 32.7614 222 30C222 27.2386 219.761 25 217 25H212ZM207 10C207 7.23858 209.239 5 212 5H217C219.761 5 222 7.23858 222 10C222 12.7614 219.761 15 217 15H212C209.239 15 207 12.7614 207 10ZM207 190C207 192.761 209.239 195 212 195H217C219.761 195 222 192.761 222 190C222 187.239 219.761 185 217 185H212C209.239 185 207 187.239 207 190ZM212 175C209.239 175 207 172.761 207 170C207 167.239 209.239 165 212 165H217C219.761 165 222 167.239 222 170C222 172.761 219.761 175 217 175H212ZM207 150C207 152.761 209.239 155 212 155H217C219.761 155 222 152.761 222 150C222 147.239 219.761 145 217 145H212C209.239 145 207 147.239 207 150ZM212 135C209.239 135 207 132.761 207 130C207 127.239 209.239 125 212 125H217C219.761 125 222 127.239 222 130C222 132.761 219.761 135 217 135H212ZM207 110C207 112.761 209.239 115 212 115H217C219.761 115 222 112.761 222 110C222 107.239 219.761 105 217 105H212C209.239 105 207 107.239 207 110ZM212 95C209.239 95 207 92.7614 207 90C207 87.2386 209.239 85 212 85H217C219.761 85 222 87.2386 222 90C222 92.7614 219.761 95 217 95H212ZM207 70C207 72.7614 209.239 75 212 75H217C219.761 75 222 72.7614 222 70C222 67.2386 219.761 65 217 65H212C209.239 65 207 67.2386 207 70ZM212 55C209.239 55 207 52.7614 207 50C207 47.2386 209.239 45 212 45H217C219.761 45 222 47.2386 222 50C222 52.7614 219.761 55 217 55H212Z"
                        fill="#0010A3"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_d_0_1"
                        x="0"
                        y="180"
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
                        y="40"
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
                    <filter
                        id="filter2_d_0_1"
                        x="200"
                        y="0"
                        width="28"
                        height="208"
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
