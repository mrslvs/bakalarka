import { useState } from 'react';
import './Assets/Styles/index.css';

// https://github.com/electron/electron/issues/9920
//      import { ipcRenderer } from 'electron'; NOT WORKING
//      solution provided by Amthieu
const { ipcRenderer } = window.require('electron');

function App() {
    const [port, setPort] = useState('');

    const getPorts = () => {
        ipcRenderer.send('portRequest', 'client portRequest');
    };

    ipcRenderer.on('portResponse', (event, data) => {
        console.log(data);
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
            <p>{port ? port : 'no ports available'}</p>
        </div>
    );
}

export default App;
