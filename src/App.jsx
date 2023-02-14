import { useEffect, useState } from 'react';
import './Assets/Styles/index.css';
import Animation from './Components/Animation';
import PortForm from './Components/PortForm';

// https://github.com/electron/electron/issues/9920
//      import { ipcRenderer } from 'electron'; NOT WORKING
//      solution provided by Amthieu
const { ipcRenderer } = require('electron');

function App() {
    const [availablePorts, setAvailablePorts] = useState('');
    const [selectedPort, setSelectedPort] = useState('');

    const armCenter = 151.5; // ++ = down (90)
    const armTop = 151.5 - 90; // nulled

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

    const getPorts = () => {
        ipcRenderer.send('portRequest', 'client portRequest');
    };

    ipcRenderer.on('portResponse', (event, data) => {
        // console.log(data);
        setAvailablePorts(data);
    });

    const startCommunication = () => {
        ipcRenderer.send('startComRequest', 'client startComRequest');
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

    setInterval(() => {
        const gamepads = navigator.getGamepads();
        if (gamepads[0]) {
            console.log(gamepads[0].axes);
        }
    }, 100);

    const showme = () => {
        console.log(availablePorts);
        console.log(selectedPort);
        console.log('ok');
    };

    // getPorts();

    return (
        <div className="App bg-slate-400">
            <h1 className="text-blue-600">Hello, electron world!</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    getPorts();
                }}
            >
                <button>getPorts</button>
            </form>
            <PortForm availablePorts={availablePorts} setSelectedPort={setSelectedPort} />

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
        </div>
    );
}

export default App;
