import React from 'react';
const { ipcRenderer } = require('electron');

const Communication = ({ setAngle, setNewDistance }) => {
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

            ipcRenderer.send('saveToDatabase', sendDataAsObject);
        }

        setAngle(armAngle);
        setNewDistance(distance);
    });

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    startCommunication();
                }}
            >
                <button type="submit">Start Communication</button>
            </form>
        </div>
    );
};

export default Communication;
