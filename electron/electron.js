const path = require('path');
const { app, BrowserWindow, ipcMain } = require('electron');
const { getAvailablePorts, startCom } = require('../src/API/serial');
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
// eslint-disable-next-line global-require
// if (require("electron-squirrel-startup")) {
//   app.quit();
// }

const createWindow = () => {
    const mainWindow = new BrowserWindow({
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

ipcMain.on('portRequest', async (event, data) => {
    console.log(data);
    const ports = await getAvailablePorts();
    event.reply('portResponse', ports);
});

ipcMain.on('startComRequest', async (event, data) => {
    try {
        console.log('ddd:');
        console.log(data);
        const msg = await startCom(event, data);
    } catch (err) {
        console.log(err);
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
