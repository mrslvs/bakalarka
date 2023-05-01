const { SerialPort, ReadlineParser } = require('serialport');

// let parser = new ReadlineParser();

const createPort = (path) => {
    return new SerialPort({
        path: path,
        baudRate: 9600,
        dataBits: 8,
        stopBits: 1,
        parity: 'none',
    });
};

const getAvailablePorts = async () => {
    const ports = await SerialPort.list();
    return ports;
};

module.exports = {
    getAvailablePorts,
    //  parser,
    createPort,
    ReadlineParser,
};
