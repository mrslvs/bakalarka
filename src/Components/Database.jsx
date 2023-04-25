import React from 'react';
const { ipcRenderer } = require('electron');

const Database = () => {
    const requestDatabaseData = () => {
        ipcRenderer.send('requestDatabaseData', null);
    };

    ipcRenderer.on('databaseData', (evt, message) => {
        console.log('got database data:');
        console.log(message);
    });

    return (
        <div>
            <p>database table goes here</p>
            <button onClick={requestDatabaseData}>get data</button>
        </div>
    );
};

export default Database;
