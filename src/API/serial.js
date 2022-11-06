const { SerialPort, ReadlineParser } = require('serialport');

// const port = new SerialPort({
//   // path: "COM3",
//   path: "/dev/ttyACM0",
//   baudRate: 9600,
//   dataBits: 8,
//   stopBits: 1,
//   parity: "none",
// });

// const parser = new ReadlineParser();

// port.pipe(parser);
// parser.on("data", (data) => {
//   if (data == 1234) {
//     console.log(
//       "got handshake, arduino is waiting for my confirmation for 3 seconds"
//     );

//     port.write("abc\n");
//   } else if (data == 992) {
//     console.log("saving char to array");
//   } else if (data == 993) {
//     console.log(
//       "got to the ending symbol, starting to broadcast received message"
//     );
//   } else if (data == 1236) {
//     console.log("ending communication");
//   } else {
//     console.log("message: " + data);
//   }
// });

SerialPort.list().then((ports) => {
    ports.forEach(function (port) {
        console.log(port.path);
    });
});
