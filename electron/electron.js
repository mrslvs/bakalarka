require('dotenv').config();

const path = require('path');
const { app, BrowserWindow, ipcMain, ipcRenderer } = require('electron');
const {
    getAvailablePorts,
    // startCom,
    // startComAnalog,
    // parser,
    createPort,
    ReadlineParser,
} = require('../src/API/serial');
const { connect } = require('../src/API/mongo');
const { Measurement } = require('../src/Models/Measurement');
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
// eslint-disable-next-line global-require
// if (require("electron-squirrel-startup")) {
//   app.quit();
// }

let mainWindow;

const createWindow = () => {
    // const mainWindow = new BrowserWindow({
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            // preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    // and load the index.html of the app.
    //   mainWindow.loadFile(path.join(__dirname, "index.html"));
    if (app.isPackaged) {
        mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
    } else {
        mainWindow.loadURL('http://localhost:5173');
    }

    // Open the DevTools.
    mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

// (async () => {
//     await connect(process.env.DB_CONNECTION_URL);

//     let testArr = [3, 3, 3, 3, 3, 9, 9, 9, 9];

//     const testMeasurement = new Measurement({
//         time_delta: 90,
//         user: 'test_user',
//         distance: testArr,
//     });
// })();

let port = null;
let parser = new ReadlineParser();

const startCom = async (event, data) => {
    console.log('starting gamepad comm');
    let tmp = 'startpassLX' + data + '\n';
    port.write(tmp);
};

const startComAnalog = async (event, data) => {
    let tmp = 'startanalogpass' + '\n';
    port.write(tmp);
};

ipcMain.on('portRequest', async (event, data) => {
    console.log(data);
    const ports = await getAvailablePorts();
    event.reply('portResponse', ports);
});

ipcMain.on('portSelected', async (event, data) => {
    console.log('port has been selected:' + data);
    if (port) {
        port.unpipe(parser);
        port.close();

        port = createPort(data);
    } else {
        port = createPort(data);
    }
    port.pipe(parser);
});

// ipcMain.on('portSelected', async (event, data) => {
//     console.log('port has been selected:' + data);
//     if (port) {
//         // console.log(port.path);
//         // port.path = data;
//         let tmpPort = createPort(data);
//         port = tmpPort;
//         // parser = new ReadlineParser();
//         // port.pipe(parser);
//         // console.log(port._readableState);
//     } else {
//         port = createPort(data);
//         // port.pipe(parser);
//     }
//     parser = new ReadlineParser();
//     port.pipe(parser);
// });

ipcMain.on('startComRequest', async (event, data) => {
    try {
        // console.log('ddd:');
        // console.log(data);
        const msg = await startCom(event, data);
    } catch (err) {
        console.log(err);
    }
});

ipcMain.on('startComRequestAnalog', async (event, data) => {
    try {
        const msg = await startComAnalog(event, data);
    } catch (err) {
        console.log(err);
    }
});

var util = require('util');

ipcMain.on('requestDatabaseData', async (event, data) => {
    try {
        // let result = await Measurement.findById('644825e7df6720f60a019134');
        let result = await Measurement.find();

        let responseArray = [];

        result.forEach((measurement) => {
            let distanceArray = measurement.distance.map((value) => value);
            let angleArray = measurement.angle.map((value) => value);

            let tmpObject = {
                id: measurement.id,
                sampling_rate: measurement.sampling_rate,
                user: measurement.user,
                distance: distanceArray,
                angle: angleArray,
            };

            responseArray.push(tmpObject);
        });

        event.reply('databaseData', responseArray);
    } catch (err) {
        console.log('error while getting all measurements');
        console.log(err);
    }
});

ipcMain.on('checkDatabaseConnection', async (event, data) => {
    const isConnected = await connect(process.env.DB_CONNECTION_URL);
    event.reply('isConnected', isConnected);
});

parser.on('data', (data) => {
    console.log(data);

    mainWindow.webContents.send('receivedData', data);
});

// ipcMain.on('saveToDatabase', async (event, data) => {
//     try {
//         // parseInt() because IPC return integer as '140\r'
//         console.log('starting saveToDatabase');

//         const measurementToSave = new Measurement({
//             sampling_rate: process.env.SAMPLING_RATE,
//             user: 'test_user',
//             angle: data.angle.map((angle) => parseInt(angle)),
//             distance: data.distance.map((distance) => parseInt(distance)),
//         });

//         console.log(measurementToSave);

//         try {
//             await measurementToSave.save();
//             console.log('saved');
//         } catch (error) {
//             console.log("couldn't save the test data, error:");
//             console.log(tmp);
//         }
//     } catch (err) {
//         console.log('error while saving data');
//         // console.log(error);
//     }
// });

ipcMain.on('saveToDatabase', async (event, data) => {
    // parseInt() because IPC return integer as '140\r'

    const measurementToSave = new Measurement({
        sampling_rate: process.env.SAMPLING_RATE,
        user: 'test_user',
        angle: data.angle.map((angle) => parseInt(angle)),
        distance: data.distance.map((distance) => parseInt(distance)),
    });

    console.log(measurementToSave);

    try {
        await measurementToSave.save();
        console.log('saved');
    } catch (error) {
        console.log("couldn't save the test data, error:");
        // console.log(error);
        mainWindow.webContents.send('isConnected', false);
    }
});

// window.addEventListener('gamepadconnected', (e) => {
//     console.log(
//         'Gamepad connected at index %d: %s. %d buttons, %d axes.',
//         e.gamepad.index,
//         e.gamepad.id,
//         e.gamepad.buttons.length,
//         e.gamepad.axes.length
//     );
// });

// emulacia web app
// moznosti vyberu databaz (vymenovat aspon 2) a odovodnit vyber (predchadzajuce skusenosti su dovod)

// jun obhajoby
