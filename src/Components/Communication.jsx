import { useEffect, useRef, useState } from 'react';
const { ipcRenderer } = require('electron');
import { BsJoystick } from 'react-icons/bs';
import { FaGamepad } from 'react-icons/fa';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'; // Import the default styles

const Communication = ({
    setAngle,
    setNewDistance,
    databaseStatus,
    saveToDatabase,
    isMeasuring,
    setIsMeasuring,
    selectedPort,
    setChartData,
    setAngleAnimation,
    setTableData,
    tableData,
    readyToMeasureAgain,
    setReadyToMeasureAgain,
}) => {
    const [distancesReceived, setDistancesReceived] = useState([]);
    const [armAnglesReceived, setArmAnglesReceived] = useState([]);
    // const [sliderValue, setSliderValue] = useState(0);
    // let sliderTemp;
    let joystickPosition;

    // useEffect(() => {
    //     console.log('slider value has been changed and reflected in useEffect');
    //     sliderTemp = sliderValue;
    //     console.log('USEFFECT CHANGING: ' + sliderTemp);
    // }, [sliderValue]);

    // const handleSliderChange = (value) => {
    // console.log('changing slider value from (' + sliderTemp + ') to (' + value + ')');
    // sliderTemp = value;
    // setSliderValue(value);
    // };

    setInterval(() => {
        const gamepads = navigator.getGamepads();
        if (gamepads[0]) {
            joystickPosition = gamepads[0].axes[1];
        }
    }, 16);

    const startCommunication = (isAnalog) => {
        setIsMeasuring(true);

        let iter = 0;
        console.log(isAnalog);

        setInterval(() => {
            if (iter < process.env.ITERATIONS) {
                if (isAnalog) {
                    ipcRenderer.send('startComRequestAnalog', 0);
                } else {
                    ipcRenderer.send('startComRequest', joystickPosition);
                }
            }
            iter++;
        }, process.env.SAMPLING_RATE);
    };

    const startCommSlider = () => {
        setIsMeasuring(true);
        let iter = 0;

        setInterval(() => {
            if (iter < process.env.ITERATIONS) {
                // const tmp = sliderTemp / 100;
                // console.log('inside function sliderTemp is: ' + sliderTemp);
                // console.log('sending slider at: ' + tmp);
                const sliderElement = document.querySelector('.rc-slider-handle');
                // const currentValue = sliderElement.rcSlider.getValue();
                const value = sliderElement.getAttribute('aria-valuenow') / 100;
                ipcRenderer.send('startComRequest', value);
            }
            iter++;
        }, process.env.SAMPLING_RATE);
    };

    ipcRenderer.removeAllListeners('receivedData');

    ipcRenderer.on('receivedData', (evt, message) => {
        let distance = message.split(',')[0];
        let armAngle = message.split(',')[1];

        distancesReceived.push(distance);
        armAnglesReceived.push(armAngle);

        if (distancesReceived.length == process.env.ITERATIONS) {
            console.log('end of comm triggered');
            setReadyToMeasureAgain(false);
            let sendDataAsObject = {
                distance: distancesReceived,
                angle: armAnglesReceived,
            };

            if (databaseStatus == 0 && saveToDatabase)
                ipcRenderer.send('saveToDatabase', sendDataAsObject);

            setIsMeasuring(false);
        }

        setAngle(armAngle);
        setNewDistance(distance);
    });

    const clear = () => {
        setChartData([]);
        setAngleAnimation(0);
        setNewDistance(-1);
        setTableData(null);
        distancesReceived.length = 0;
        armAnglesReceived.length = 0;
        setReadyToMeasureAgain(true);
    };

    const showData = () => {
        // console.log('distancesReceived (' + distancesReceived.length + '): ' + distancesReceived);
        console.log('sliderTemp:' + sliderTemp);
    };

    let canStartComm =
        databaseStatus != 1 && selectedPort && !isMeasuring && !tableData && readyToMeasureAgain;

    return (
        <div className="w-1/1 flex justify-center">
            <button onClick={showData}> show data</button>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    startCommunication(false);
                }}
                className="flex items-center "
            >
                <button
                    type="submit"
                    disabled={!canStartComm}
                    className={
                        canStartComm
                            ? 'button inline-flex items-center justify-center mr-2'
                            : 'button-disabled inline-flex items-center justify-center mr-2'
                    }
                >
                    <span className="pr-1">Start gamepad</span>
                    <FaGamepad className="w-6 h-6" />
                </button>
            </form>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    startCommunication(true);
                }}
                className="flex items-center"
            >
                <button
                    type="submit"
                    disabled={!canStartComm}
                    className={
                        canStartComm
                            ? 'button inline-flex items-center justify-center mr-2'
                            : 'button-disabled inline-flex items-center justify-center mr-2'
                    }
                >
                    <span className="pr-1">Start analog</span>
                    <BsJoystick className="w-5 h-5" />
                </button>
            </form>

            {/* <button
                disabled={!canStartComm}
                className={
                    canStartComm
                        ? 'button inline-flex items-center justify-center mr-2'
                        : 'button-disabled inline-flex items-center justify-center mr-2'
                }
                onClick={startCommSlider}
            >
                <span className="pr-1">Start slider</span>
                <BsJoystick className="w-5 h-5" />
            </button> */}

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    startCommSlider();
                }}
                className="flex items-center"
            >
                <button
                    type="submit"
                    disabled={!canStartComm}
                    className={
                        canStartComm
                            ? 'button inline-flex items-center justify-center mr-2'
                            : 'button-disabled inline-flex items-center justify-center mr-2'
                    }
                >
                    <span className="pr-1">Start Slider</span>
                    <BsJoystick className="w-5 h-5" />
                </button>
            </form>

            <button
                onClick={clear}
                disabled={isMeasuring}
                className={
                    isMeasuring
                        ? 'button-disabled inline-flex items-center justify-center mr-2'
                        : 'button inline-flex items-center justify-center mr-2'
                }
            >
                Clear
            </button>
            <div className="min-w-48 w-48 mt-1">
                <Slider
                    min={-100}
                    max={100}
                    defaultValue={0}
                    // onChange={handleSliderChange}
                />
                {/* <p className="flex justify-center">{sliderValue / 100}</p> */}
            </div>
        </div>
    );
};

export default Communication;
