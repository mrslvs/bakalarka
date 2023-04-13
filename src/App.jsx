import { useEffect, useState } from 'react';
import './Assets/Styles/index.css';
import Animation from './Components/Animation';
import PortForm from './Components/PortForm';
import Chart from './Components/Chart';
import Port from './Components/Port';

// https://github.com/electron/electron/issues/9920
//      import { ipcRenderer } from 'electron'; NOT WORKING
//      solution provided by Amthieu
const { ipcRenderer } = require('electron');

// TODO:
// delete PortForm.jsx ?

function App() {
    const [availablePorts, setAvailablePorts] = useState('');
    const [selectedPort, setSelectedPort] = useState('');

    const armCenter = 1.51; // ++ = down (90)
    const armTop = 151.5 - 90; // nulled
    let valuesReceived = [];

    const [armAnimation, setArmAnimation] = useState(armTop);

    useEffect(() => {
        // run once on-load
        // getPorts();
    }, []);

    useEffect(() => {
        console.log('usefect ports, rerending hopefully');
    }, [availablePorts]);

    useEffect(() => {
        console.log('usefect animation, rerending hopefully');
    }, [armAnimation]);

    useEffect(() => {
        console.log('usefect selected port');
        console.log(selectedPort);
    }, [selectedPort]);

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

    ipcRenderer.on('startComResponse', (event, data) => {
        // console.log('log message inside app.jsx:');
        // xx,yyy
        console.log('comm response: ' + data);
        const divided = data.split(',');
        const angle = divided[1];
        // console.log(angle);
        if (!isNaN(angle)) {
            let newAngle = armTop + parseInt(angle);
            // console.log(newAngle);
            // setArmAnimation(armTop + angle);
            setArmAnimation(newAngle);
        }
    });

    ipcRenderer.on('sprava', (evt, message) => {
        console.log('received sprava:');
        console.log(message); // Returns: {'SAVED': 'File Saved'}
    });

    ipcRenderer.on('startComResponseTest', (evt, message) => {
        // console.log('working test:');
        let distance = message.split(',')[0];
        valuesReceived.push(distance);
        console.log(valuesReceived);
        // console.log(message);
    });

    const showme = () => {
        console.log(availablePorts);
        console.log(selectedPort);
        console.log('ok');
        let x = null;
        let z = x || 0.11;
        console.log(z);

        console.log('env: ');
        console.log(process.env.ITERATIONS);
    };

    // getPorts();

    return (
        <div className="App bg-slate-400">
            <h1 className="text-blue-600">Hello, electron world!</h1>

            <Port
                availablePorts={availablePorts}
                setAvailablePorts={setAvailablePorts}
                setSelectedPort={setSelectedPort}
            />

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    startCommunication();
                }}
            >
                <button type="submit">Start Communication</button>
            </form>

            <Animation angle={armAnimation} />
            <div>
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
                    <line x1="278" y1="151.5" x2="78" y2={armAnimation} stroke="#FF0000" />
                </svg> */}

                {/* center: <line x1="278" y1="151.5" x2="78" y2="151.5" stroke="#FF0000" /> */}
            </div>
            <button onClick={showme}>click me</button>
            <div className="w-200">
                <Chart />
            </div>
        </div>
    );
}

export default App;
