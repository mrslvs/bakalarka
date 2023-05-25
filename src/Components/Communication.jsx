import { useEffect, useState } from 'react';
const { ipcRenderer } = require('electron');
import { BsJoystick } from 'react-icons/bs';
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
    readyToMeasureAgain,
    setReadyToMeasureAgain,

    // distancesReceived,
    // setDistancesReceived,
    // armAnglesReceived,
    // setArmAnglesReceived,
}) => {
    // let distancesReceived = [];
    // let armAnglesReceived = [];
    const [distancesReceived, setDistancesReceived] = useState([]);
    const [armAnglesReceived, setArmAnglesReceived] = useState([]);
    let joystickPosition;

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

    // const startCommunicationAnalog = () => {
    //     setIsMeasuring(true);

    //     let iter = 0;

    //     setInterval(() => {
    //         if (iter < process.env.ITERATIONS) {
    //             ipcRenderer.send('startComRequestAnalog', 0);
    //         }
    //         iter++;
    //     }, process.env.SAMPLING_RATE);
    // };

    ipcRenderer.removeAllListeners('receivedData');

    ipcRenderer.on('receivedData', (evt, message) => {
        let distance = message.split(',')[0];
        let armAngle = message.split(',')[1];

        distancesReceived.push(distance);
        armAnglesReceived.push(armAngle);
        // setDistancesReceived((oldArray) => [...oldArray, distance]);
        // setArmAnglesReceived((oldArray) => [...oldArray, armAngle]);

        // console.log(
        //     'Received distance:' +
        //         distance +
        //         ' pushing into distancesReceived(' +
        //         distancesReceived.length +
        //         '):' +
        //         distancesReceived
        // );

        if (distancesReceived.length == process.env.ITERATIONS) {
            console.log('end of comm triggered');
            setReadyToMeasureAgain(false);
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

            // distance = -1;
            // armAngle = -1;
            // delete sendDataAsObject.distance;
            // delete sendDataAsObject.angle;
            // setAngle(null);
            // setNewDistance(-1);

            // while (distancesReceived.length) {
            //     distancesReceived.pop();
            // }
            // while (armAnglesReceived.length) {
            //     armAnglesReceived.pop();
            // }
            // while (tmpDist.length) {
            //     tmpDist.pop();
            // }
            // while (tmpAng.length) {
            //     tmpAng.pop();
            // }
            // distancesReceived.splice(0, distancesReceived.length);
            // armAnglesReceived.splice(0, armAnglesReceived.length);

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
        console.log('distancesReceived (' + distancesReceived.length + '): ' + distancesReceived);
    };

    let canStartComm =
        databaseStatus != 1 && selectedPort && !isMeasuring && !tableData && readyToMeasureAgain;

    return (
        <div className="inline-flex w-1/2 justify-center bg-fuchsia-500">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    startCommunication(false);
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
                    startCommunication(true);
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
            {/* <button onClick={showData}>show data</button> */}
        </div>
    );
};

export default Communication;
