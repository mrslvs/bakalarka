import React from 'react';
const { ipcRenderer } = require('electron');
import { BsJoystick } from 'react-icons/bs';
import { GrGamepad } from 'react-icons/gr';
import { FaGamepad } from 'react-icons/fa';

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
}) => {
    let distancesReceived = [];
    let armAnglesReceived = [];
    let joystickPosition;

    setInterval(() => {
        const gamepads = navigator.getGamepads();
        if (gamepads[0]) {
            joystickPosition = gamepads[0].axes[1];
        }
    }, 16);

    const startCommunication = () => {
        setIsMeasuring(true);
        // if (gamepad == null) {
        // console.log('gamepad is null');
        // } else {
        // joystickPostion = gamepads[0].axes[1];
        // console.log('... got joystick position:');
        // console.log(joystickPostion);
        // }

        let iter = 0;

        setInterval(() => {
            if (iter < process.env.ITERATIONS) {
                ipcRenderer.send('startComRequest', joystickPosition);
            }
            iter++;
        }, process.env.SAMPLING_RATE);
    };

    ipcRenderer.on('receivedData', (evt, message) => {
        let distance = message.split(',')[0];
        let armAngle = message.split(',')[1];

        distancesReceived.push(distance);
        armAnglesReceived.push(armAngle);

        if (distancesReceived.length == process.env.ITERATIONS) {
            console.log('cycle end - lets save into DB');

            let sendDataAsObject = {
                distance: distancesReceived,
                angle: armAnglesReceived,
            };

            if (databaseStatus == 0 && saveToDatabase)
                ipcRenderer.send('saveToDatabase', sendDataAsObject);

            // VERY IMPORTANT: https://stackoverflow.com/questions/1232040/how-do-i-empty-an-array-in-javascript
            // distancesReceived = [];
            // armAnglesReceived = [];
            // ===========
            // console.log('length:' + distancesReceived.length);
            // distancesReceived.length = 0;
            // armAnglesReceived.length = 0;
            // console.log('length:' + distancesReceived.length);
            setIsMeasuring(false);
        }

        setAngle(armAngle);
        setNewDistance(distance);
    });

    const startCommunicationAnalog = () => {
        setIsMeasuring(true);
        // if (gamepad == null) {
        // console.log('gamepad is null');
        // } else {
        // joystickPostion = gamepads[0].axes[1];
        // console.log('... got joystick position:');
        // console.log(joystickPostion);
        // }

        let iter = 0;

        setInterval(() => {
            if (iter < process.env.ITERATIONS) {
                ipcRenderer.send('startComRequestAnalog', 0);
            }
            iter++;
        }, process.env.SAMPLING_RATE);
    };

    // const startCommunicationAnalog = () => {
    //     // if (gamepad == null) {
    //     // console.log('gamepad is null');
    //     // } else {
    //     // joystickPostion = gamepads[0].axes[1];
    //     // console.log('... got joystick position:');
    //     // console.log(joystickPostion);
    //     // }

    //     let iter = 0;

    //     setInterval(() => {
    //         if (iter < process.env.ITERATIONS) {
    //             ipcRenderer.send('startComRequestAnalog', 0);
    //         }
    //         iter++;
    //     }, process.env.SAMPLING_RATE);
    // };

    // ipcRenderer.on('receivedData', (evt, message) => {
    //     let distance = message.split(',')[0];
    //     let armAngle = message.split(',')[1];

    //     distancesReceived.push(distance);
    //     armAnglesReceived.push(armAngle);

    //     if (distancesReceived.length == process.env.ITERATIONS) {
    //         console.log('cycle end - lets save into DB');

    //         let sendDataAsObject = {
    //             distance: distancesReceived,
    //             angle: armAnglesReceived,
    //         };

    //         ipcRenderer.send('saveToDatabase', sendDataAsObject);
    //     }

    //     setAngle(armAngle);
    //     setNewDistance(distance);
    // });

    const clear = () => {
        setChartData([]);
        setAngleAnimation(0);
        setNewDistance(-1);
        setTableData(null);
        while (distancesReceived.length) {
            distancesReceived.pop();
        }
        while (armAnglesReceived.length) {
            armAnglesReceived.pop();
        }
    };
    let canStartComm = databaseStatus != 1 && selectedPort && !isMeasuring && !tableData;

    return (
        <div className="inline-flex w-1/2 justify-center bg-fuchsia-500">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    startCommunication();
                }}
                className="flex items-center border border-black"
            >
                <button
                    type="submit"
                    disabled={!canStartComm}
                    className={
                        canStartComm
                            ? 'button inline-flex items-center justify-center'
                            : 'button-disabled inline-flex items-center justify-center'
                    }
                >
                    <span className="pr-1">Start gamepad</span>
                    <FaGamepad className="w-6 h-6" />
                </button>
            </form>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    startCommunicationAnalog();
                }}
                className="flex items-center border border-black"
            >
                <button
                    type="submit"
                    disabled={!canStartComm}
                    className={
                        canStartComm
                            ? 'button inline-flex items-center justify-center'
                            : 'button-disabled inline-flex items-center justify-center'
                    }
                >
                    <span className="pr-1">Start analog</span>
                    <BsJoystick className="w-5 h-5" />
                </button>
            </form>
            <button
                onClick={clear}
                disabled={isMeasuring}
                className={
                    isMeasuring
                        ? 'button-disabled inline-flex items-center justify-center'
                        : 'button inline-flex items-center justify-center'
                }
            >
                Clear
            </button>
        </div>
    );
};

export default Communication;
