import { useEffect, useState } from 'react';
import './Assets/Styles/index.css';
import Animation from './Components/Animation';
// import PortForm from './Components/PortForm';
import Chart from './Components/Chart';
import Port from './Components/Port';
import Communication from './Components/Communication';
import Database from './Components/Database';

// https://github.com/electron/electron/issues/9920
//      import { ipcRenderer } from 'electron'; NOT WORKING
//      solution provided by Amthieu
const { ipcRenderer } = require('electron');

// TODO:
// ✔️ separate joystick
// ✔️ rename delay => vzorkovacia frekvencia (samplingRate)
// ✔️ delete PortForm.jsx ?
// ✔️ make ports work (selecting port)
// ✔️ table showing database measurements
//
// min-max for arduino
// changing animation only if in gamepad or arduino-joystick mode
//      modes:
//          1. controlling arm
//              1a USB gamepad
//              1b arduino joystick
//          2. reproducing measurements from DB file

function App() {
    // PORTS
    const [availablePorts, setAvailablePorts] = useState('');
    const [selectedPort, setSelectedPort] = useState('');

    const [chartData, setChartData] = useState([]);
    const [angleAnimation, setAngleAnimation] = useState(0);
    const [newDistance, setNewDistance] = useState('');
    const [tableData, setTableData] = useState(null);

    useEffect(() => {
        // run once on-load
        ipcRenderer.send('portRequest', 'client portRequest');
    }, []);

    // PORTS
    useEffect(() => {
        // console.log('usefect ports, rerending hopefully');
    }, [availablePorts]);

    useEffect(() => {
        // console.log('usefect selected port');
        // console.log(selectedPort);
        if (selectedPort) ipcRenderer.send('portSelected', selectedPort);
    }, [selectedPort]);

    // ANIMATION
    useEffect(() => {
        // console.log('usefect animation, rerending hopefully');
    }, [angleAnimation]);

    // DISTANCE
    useEffect(() => {
        if (newDistance != -1) {
            // received new distance
            setChartData((oldArr) => [...oldArr, newDistance]);
        }
        setNewDistance(-1);
    }, [newDistance]);

    const showme = () => {
        // console.log(availablePorts);
        // console.log(selectedPort);
        // console.log('ok');
        // let x = null;
        // let z = x || 0.11;
        // console.log(z);
    };

    return (
        <div className="App bg-slate-400">
            <h1 className="text-blue-600">Hello, electron world!</h1>

            <Port
                availablePorts={availablePorts}
                setAvailablePorts={setAvailablePorts}
                setSelectedPort={setSelectedPort}
            />

            <Communication setAngle={setAngleAnimation} setNewDistance={setNewDistance} />

            <Animation angle={angleAnimation} />

            <button onClick={showme}>click me</button>
            <div className="w-100">
                <Chart chartData={chartData} setChartData={setChartData} />
            </div>
            <Database
                tableData={tableData}
                setTableData={setTableData}
                setAngle={setAngleAnimation}
                setNewDistance={setNewDistance}
            />
        </div>
    );
}

export default App;
