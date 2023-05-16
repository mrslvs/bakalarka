import { useEffect, useState } from 'react';
import './Assets/Styles/index.css';
import Header from './Components/Header';
import Animation from './Components/Animation';
import Chart from './Components/Chart';
import Port from './Components/Port';
import Communication from './Components/Communication';
import Database from './Components/Database';

// https://github.com/electron/electron/issues/9920
//      import { ipcRenderer } from 'electron'; NOT WORKING
//      solution provided by Amthieu
const { ipcRenderer } = require('electron');

// TODO - DONE:
// ✔️ separate joystick
// ✔️ rename delay => vzorkovacia frekvencia (samplingRate)
// ✔️ delete PortForm.jsx ?
// ✔️ make ports work (selecting port)
// ✔️ table showing database measurements
// ✔️ fix communication when samsung is selected
// ✔️ set port to default value missing key
// ✔️ cannot start without port selected
// ✔️ changing animation only if in gamepad or arduino-joystick mode
//      modes:
//          ✔️ 1. controlling arm
//              ✔️ 1a USB gamepad
//              ✔️ 1b arduino joystick
//          ✔️ 2. reproducing measurements from DB file
// ✔️ repeat measurement button + disability of comm buttons after first measurement
// TODO:
// DB:
//      disablity of SAVE to DB button
//      disablity of DB play button
//      db status color
//      animated refresh button while checking connection
// MISC:
// clean code
// min-max for arduino
// sensitivity for joysticks
// gamepads as global var
// state diagram using petri
// remove servo noise, buzzing (YT video)

// BUTTONS disable
// refresh ports => you can always refresh ports
// start comm (gamepad/analog)
// save measurement
// get data
// check connection
// ______________________________________________
// states:
//      checking database connection    (refresh port / select port)
//      connection established          (start comm / save / get data)
//      running comm                    (refresh port / MAYBE get data)
//      finished comm                   (refresh port / clear)
function App() {
    // PORTS
    const [availablePorts, setAvailablePorts] = useState('');
    const [selectedPort, setSelectedPort] = useState('');

    const [chartData, setChartData] = useState([]);
    const [angleAnimation, setAngleAnimation] = useState(0);
    const [newDistance, setNewDistance] = useState('');
    const [tableData, setTableData] = useState(null);

    // flags
    const [databaseStatus, setDatabaseStatus] = useState(1);
    // 0 - ok
    // 1 - checking
    // 2 - not connected
    const [saveToDatabase, setSaveToDatabase] = useState(false);
    const [isMeasuring, setIsMeasuring] = useState(false);

    // rework
    const [readyToMeasureAgain, setReadyToMeasureAgain] = useState(true);

    useEffect(() => {
        // run once on-load
        ipcRenderer.send('portRequest', 'client portRequest');
        ipcRenderer.send('checkDatabaseConnection', null);
    }, []);

    // PORTS
    useEffect(() => {
        // console.log('usefect ports, rerending hopefully');
    }, [availablePorts]);

    useEffect(() => {
        // because default option ist the only "path" that contains strings
        // if (selectedPort && !selectedPort.includes(' '))
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

    useEffect(() => {
        // icons changing
    }, [databaseStatus]);
    // useEffect(() => {}, [databaseStatus]);

    const showme = () => {
        // console.log(availablePorts);
        // console.log(selectedPort);
        // console.log('ok');
        // let x = null;
        // let z = x || 0.11;
        // console.log(z);
        // const gamepads = navigator.getGamepads();
        // gamepads[1] ? console.log('ok') : console.log('null');
        // =======================
        // setChartData([]);
        // setAngleAnimation(0);
        // setNewDistance(-1);
        // setTableData(null);
        console.log('databaseStatus:' + databaseStatus);
        console.log('selectedPort:' + selectedPort);
        console.log('isMeasuring:' + isMeasuring);
        console.log('chartData:' + chartData);
    };

    // const [distancesReceived, setDistancesReceived] = useState([]);
    // const [armAnglesReceived, setArmAnglesReceived] = useState([]);

    return (
        <div className="bg-slate-300">
            <Header></Header>

            <div className="grid grid-cols-3 bg-black">
                <div className="col-start-1 col-end-3">
                    <div className="flex p-2 bg-red-400 ">
                        <Port
                            availablePorts={availablePorts}
                            setAvailablePorts={setAvailablePorts}
                            setSelectedPort={setSelectedPort}
                            isMeasuring={isMeasuring}
                        />
                        <Communication
                            setAngle={setAngleAnimation}
                            setNewDistance={setNewDistance}
                            databaseStatus={databaseStatus}
                            saveToDatabase={saveToDatabase}
                            isMeasuring={isMeasuring}
                            setIsMeasuring={setIsMeasuring}
                            selectedPort={selectedPort}
                            setChartData={setChartData}
                            setAngleAnimation={setAngleAnimation}
                            setTableData={setTableData}
                            tableData={tableData}
                            readyToMeasureAgain={readyToMeasureAgain}
                            setReadyToMeasureAgain={setReadyToMeasureAgain}
                            // distancesReceived={distancesReceived}
                            // setDistancesReceived={setDistancesReceived}
                            // armAnglesReceived={armAnglesReceived}
                            // setArmAnglesReceived={setArmAnglesReceived}
                        />
                    </div>

                    <div className="bg-yellow-400 p-2">
                        <Chart chartData={chartData} />
                        <Animation angle={angleAnimation} />
                    </div>
                </div>

                <div className="bg-pink-200 p-2">
                    {/* <button onClick={showme}>click me</button> */}
                    <Database
                        tableData={tableData}
                        setTableData={setTableData}
                        setAngle={setAngleAnimation}
                        setNewDistance={setNewDistance}
                        databaseStatus={databaseStatus}
                        setDatabaseStatus={setDatabaseStatus}
                        saveToDatabase={saveToDatabase}
                        setSaveToDatabase={setSaveToDatabase}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
