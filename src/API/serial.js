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

// const startCom = async (event) => {
//     // zmenit funkcu startCom ab
//     parser.on('data', (data) => {
//         if (data == 1111) {
//             // console.log('comm initiated');
//             // send joystick input
//             port.write('11lx0.20\n'); // rovnovazny stav 0,0
//         } else if (data == 2222) {
//             return;
//         } else {
//             // funkcia2(data);
//             // funkcia3(event, data);
//             console.log(data);
//             event.reply('startComResponse', data);
//             return data;
//         }
//     });
// };

const startCom = async (event) => {
    // zmenit funkcu startCom ab
    let count = 0;
    setInterval(function () {
        // your code...
        if (count < 5) {
            port.write('1111LX0.00ly0.00rx0.00ry0.00\n');
            // port.write('xy11111xy\n');
        }
        count++;
    }, 300);
};

parser.on('data', (data) => {
    // if (data == 1111) {
    //     // console.log('comm initiated');
    //     // send joystick input
    //     // port.write('11lx0.20\n'); // rovnovazny stav 0,0
    //     console.log('received ' + data);
    // } else if (data == 5555) {
    //     console.log('incorrect start message received');
    // } else {
    //     console.log(data);
    // }
    console.log(data);
});

// const funkcia3 = (event, sprava) => {
//     // console.log('funkcia3:');
//     // console.log(sprava);
//     event.reply('startComResponse', sprava);
// };

const getAvailablePorts = async () => {
    const ports = await SerialPort.list();
    return ports;
};

module.exports = { getAvailablePorts, startCom };
