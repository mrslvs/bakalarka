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

const startCom = async () => {
    parser.on('data', (data) => {
        if (data == 1111) {
            console.log('arduino initiated comm and awaits data for 1 second');

            // send joystick input
            port.write('0.20\n');
        } else if (data == 2222) {
            console.log('arduino received message and broadcasts it now: ');
            // return 'got to the ending symbol, starting to broadcast received message';
        } else {
            console.log(data);
            return data;
        }
    });
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