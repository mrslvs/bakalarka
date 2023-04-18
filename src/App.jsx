import { useEffect, useState } from 'react';
import './Assets/Styles/index.css';
import Animation from './Components/Animation';
// import PortForm from './Components/PortForm';
import Chart from './Components/Chart';
import Port from './Components/Port';
import Communication from './Components/Communication';

// https://github.com/electron/electron/issues/9920
//      import { ipcRenderer } from 'electron'; NOT WORKING
//      solution provided by Amthieu
const { ipcRenderer } = require('electron');

// TODO:
// delete PortForm.jsx ?
// separate joystick
// min-max for arduino
// rename IPC startComResponseTest id
//
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

    useEffect(() => {
        // run once on-load
        // getPorts();
    }, []);

    // PORTS
    useEffect(() => {
        console.log('usefect ports, rerending hopefully');
    }, [availablePorts]);

    useEffect(() => {
        console.log('usefect selected port');
        console.log(selectedPort);
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

    // CHART
    useEffect(() => {
        console.log('chart data changed: ' + chartData);
    }, [chartData]);

    // ipcRenderer.on('startComResponse', (event, data) => {
    //     // console.log('log message inside app.jsx:');
    //     // xx,yyy
    //     console.log('comm response: ' + data);
    //     const divided = data.split(',');
    //     const angle = divided[1];
    //     // console.log(angle);
    //     if (!isNaN(angle)) {
    //         let newAngle = armTop + parseInt(angle);
    //         // console.log(newAngle);
    //         // setArmAnimation(armTop + angle);
    //         setArmAnimation(newAngle);
    //     }
    // });

    const showme = () => {
        // console.log(availablePorts);
        // console.log(selectedPort);
        // console.log('ok');
        // let x = null;
        // let z = x || 0.11;
        // console.log(z);

        // console.log('env iterations: ' + process.env.ITERATIONS);
        // console.log('chartData: ' + chartData);
        // console.log('charData length: ' + chartData.length);

        setTestArray((oldarr) => [...oldarr, 4]);

        console.log(testArray);
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
        </div>
    );
}

export default App;
