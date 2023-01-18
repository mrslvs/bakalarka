const { SerialPort, ReadlineParser } = require('serialport');

const port = new SerialPort({
    // path: "COM3",
    path: '/dev/ttyACM0',
    baudRate: 9600,
    dataBits: 8,
    stopBits: 1,
    parity: 'none',
});

const parser = new ReadlineParser();

port.pipe(parser);

// const startCom = async () => {
//     parser.on('data', (data) => {
//         if (data == 1111) {
//             console.log('arduino initiated comm and awaits data for 1 second');

//             // send joystick input

//             port.write('0.20\n');
//         } else if (data == 992) {
//             console.log('saving char to array');
//             return 'saving char to array';
//         } else if (data == 993) {
//             console.log('got to the ending symbol, starting to broadcast received message');
//             return 'got to the ending symbol, starting to broadcast received message';
//         } else if (data == 1236) {
//             console.log('ending communication');
//             return 'ending communication';
//         } else {
//             console.log('message: ' + data);
//             return 'message: ' + data;
//         }
//     });
// };

// const startCom = async () => {
//     parser.on('data', (data) => {
//         if (data == 1111) {
//             // console.log('arduino initiated comm and awaits data for 1 second');
//             console.log('comm initiated');

//             // send joystick input
//             port.write('0.20\n');
//         }
//         // else if (data == 2222) {
//         //     // console.log('arduino received message and broadcasts it now: ');
//         //     // return 'got to the ending symbol, starting to broadcast received message';
//         // }
//         else {
//             console.log('data startcom: ' + data);
//             // x = data;
//             // port.write('0.20\n');
//             port.write('0.20\n');
//             // return data;
//         }
//     });

//     console.log('startcom got here');
// };

// const startCom = async () => {
//     parser.on('data', (data) => {
//         if (data == 1111) {
//             console.log('comm initiated');
//             // send joystick input
//             port.write('0.20\n');
//         } else {
//             console.log(data);
//             return data;
//         }
//     });
// };

const startCom = async (event) => {
    parser.on('data', (data) => {
        if (data == 1111) {
            // console.log('comm initiated');
            // send joystick input
            port.write('0.20\n');
        } else {
            // funkcia2(data);
            funkcia3(event, data);
            return data;
        }
    });
};

// const startCom = async (event) => {
//     parser.on('data', funkcia);
// };

const funkcia = (data) => {
    if (data == 1111) {
        // console.log('comm initiated');
        // send joystick input
        port.write('0.20\n');
    } else {
        funkcia2(data);
        // funkcia3(event, data);
        return data;
    }
};

const funkcia2 = (sprava) => {
    console.log('funkcia2:');
    console.log(sprava);
};

const funkcia3 = (event, sprava) => {
    // console.log('funkcia3:');
    // console.log(sprava);
    event.reply('startComResponse', sprava);
};

// SerialPort.list().then((ports) => {
//     ports.forEach(function (port) {
//         console.log(port.path);
//     });
// });

const getAvailablePorts = async () => {
    const ports = await SerialPort.list();
    return ports;
};

module.exports = { getAvailablePorts, startCom };
