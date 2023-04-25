import React from 'react';
const { ipcRenderer } = require('electron');

const Database = ({ tableData, setTableData }) => {
    const requestDatabaseData = () => {
        ipcRenderer.send('requestDatabaseData', null);
    };

    ipcRenderer.on('databaseData', (evt, message) => {
        // console.log('got database data:');
        // console.log(message);
        setTableData(message);
    });

    return (
        <div>
            <p>database table goes here</p>
            <button onClick={requestDatabaseData}>get data</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Sampling Rate</th>
                        <th>User</th>
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
