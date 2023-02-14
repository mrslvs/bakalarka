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

const startCom = async (event) => {
    parser.on('data', (data) => {
        if (data == 1111) {
            // console.log('comm initiated');
            // send joystick input
            port.write('0.20\n'); // rovnovazny stav 0,0
        } else {
            // funkcia2(data);
            funkcia3(event, data);
            return data;
        }
    });
};

const funkcia3 = (event, sprava) => {
    // console.log('funkcia3:');
    // console.log(sprava);
    event.reply('startComResponse', sprava);
};

const getAvailablePorts = async () => {
    const ports = await SerialPort.list();
    return ports;
};

module.exports = { getAvailablePorts, startCom };
