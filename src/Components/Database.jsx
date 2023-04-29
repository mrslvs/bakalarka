import React from 'react';
const { ipcRenderer } = require('electron');

const Database = ({ tableData, setTableData, setAngle, setNewDistance }) => {
    const requestDatabaseData = () => {
        ipcRenderer.send('requestDatabaseData', null);
    };

    const checkConnection = () => {
        ipcRenderer.send('checkDatabaseConnection', null);
    };

    ipcRenderer.on('databaseData', (evt, message) => {
        setTableData(message);
    });

    ipcRenderer.on('isConnected', (evt, message) => {
        message ? console.log('connected') : console.log('not connected');
    });

    const runAnimation = (key) => {
        // console.log('key' + key);

        tableData.forEach((measurement) => {
            if (measurement.id == key) {
                let i = 0;

                setInterval(() => {
                    if (i < 100) {
                        setAngle(measurement.angle[i]);
                        setNewDistance(measurement.distance[i]);
                    }
                    i++;
                }, measurement.sampling_rate);
            }
        });
    };

    return (
        <div>
            <p>database table goes here</p>
            <button onClick={requestDatabaseData} className="button">
                get data
            </button>
            <button onClick={checkConnection} className="button">
                check connection
            </button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Sampling Rate</th>
                        <th>User</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {tableData ? (
                        tableData.map((measurement) => {
                            return (
                                <tr key={measurement.id}>
                                    <td>{measurement.id}</td>
                                    <td>{measurement.sampling_rate}</td>
                                    <td>{measurement.user}</td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                runAnimation(measurement.id);
                                            }}
                                        >
                                            test me
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <></>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Database;
