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

function App() {
    const [availablePorts, setAvailablePorts] = useState('');
    const [selectedPort, setSelectedPort] = useState('');

    const armCenter = 1.51; // ++ = down (90)
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
        console.log(availablePorts);
        console.log(selectedPort);
        console.log('ok');
        let x = null;
        let z = x || 0.11;
        console.log(z);

        console.log('env: ');
        console.log(process.env.ITERATIONS);
    };

    return (
        <div className="App bg-slate-400">
            <h1 className="text-blue-600">Hello, electron world!</h1>

            <Port
                availablePorts={availablePorts}
                setAvailablePorts={setAvailablePorts}
                setSelectedPort={setSelectedPort}
            />

            <Communication />

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
            <div className="w-100">
                <Chart />
            </div>
        </div>
    );
}

export default App;
