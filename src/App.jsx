import { useEffect, useState } from 'react';
import './Assets/Styles/index.css';
import PortForm from './Components/PortForm';

// https://github.com/electron/electron/issues/9920
//      import { ipcRenderer } from 'electron'; NOT WORKING
//      solution provided by Amthieu
const { ipcRenderer } = require('electron');

function App() {
    const [port, setPort] = useState('');
    useEffect(() => {
        console.log('usefect ports, rerending hopefully');
    }, [port]);

    const getPorts = () => {
        ipcRenderer.send('portRequest', 'client portRequest');
    };

    ipcRenderer.on('portResponse', (event, data) => {
        console.log(data);
        setPort(data);
    });

    const startCommunication = () => {
        ipcRenderer.send('startComRequest', 'client startComRequest');
    };

    ipcRenderer.on('startComResponse', (event, data) => {
        console.log('log data inside app.jsx:');
        console.log(event);
    });

    let arm = 151.5;

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
            <PortForm portsArray={port} />

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    startCommunication();
                }}
            >
                <button type="submit">Start Communication</button>
            </form>
            <div>
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
                    <line x1="278" y1="151.5" x2="78" y2={arm} stroke="#FF0000" />
                </svg>

                {/* center: <line x1="278" y1="151.5" x2="78" y2="151.5" stroke="#FF0000" /> */}
            </div>
        </div>
    );
}

export default App;
