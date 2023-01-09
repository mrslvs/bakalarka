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
        </div>
    );
}

export default App;
