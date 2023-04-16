import React from 'react';
const { ipcRenderer } = require('electron');

const Communication = () => {
    let valuesReceived = [];
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
        }, 90);
        // ipcRenderer.send('startComRequest', joystickPosition);
    };

    ipcRenderer.on('startComResponseTest', (evt, message) => {
        let distance = message.split(',')[0];
        valuesReceived.push(distance);

        console.log(valuesReceived);
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
