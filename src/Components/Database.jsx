import React from 'react';
const { ipcRenderer } = require('electron');
import { AiFillPlaySquare } from 'react-icons/ai';
import { SiMongodb } from 'react-icons/si';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { FiRefreshCw } from 'react-icons/fi';

const Database = ({
    tableData,
    setTableData,
    setAngle,
    setNewDistance,
    databaseStatus,
    setDatabaseStatus,
    saveToDatabase,
    setSaveToDatabase,
}) => {
    const requestDatabaseData = () => {
        console.log('requesting database data');
        ipcRenderer.send('requestDatabaseData', null);
    };

    const checkConnection = () => {
        setDatabaseStatus(1);
        ipcRenderer.send('checkDatabaseConnection', null);
    };

    ipcRenderer.on('databaseData', (evt, message) => {
        setTableData(message);
    });

    ipcRenderer.on('isConnected', (evt, message) => {
        // message == 0
        //     ? console.log('connected')
        //     : console.log('not connected triggered in electorn.js');
        let status = message ? 0 : 2;
        setDatabaseStatus(status);
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

    const hanldeCheckbox = () => {
        // without this separate function, checked state cycles uncontrollably: https://www.robinwieruch.de/react-checkbox/
        setSaveToDatabase(!saveToDatabase);
    };

    return (
        <div>
            <input
                type="checkbox"
                checked={saveToDatabase}
                onChange={hanldeCheckbox}
                disabled={databaseStatus != 0}
            />
            <span>Save to DB</span>
            <button
                onClick={requestDatabaseData}
                disabled={databaseStatus != 0}
                className={
                    databaseStatus != 0
                        ? 'button-disabled inline-flex items-center justify-center'
                        : 'button inline-flex items-center justify-center'
                }
            >
                <span className="pr-1">get data</span>
                <FaCloudDownloadAlt className="w-5 h-5" />
            </button>
            <button
                onClick={checkConnection}
                className="button inline-flex items-center justify-center"
            >
                <span>check connection</span>
                {databaseStatus == 1 ? (
                    <FiRefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                    <SiMongodb className="w-4 h-4" />
                )}
                {/* <SiMongodb className="w-4 h-4" /> */}
            </button>
            <div className="h-24 overflow-y-auto">
                <table className="table-custom table-custom-text table-fixed">
                    <thead className="sticky top-0 bg-black text-white">
                        <tr>
                            <th className="table-custom table-fixed w-44">ID</th>
                            <th className="table-custom table-fixed w-24">Sampling Rate</th>
                            <th className="table-custom table-fixed w-28">User</th>
                            <th className="table-custom">Replay</th>
                        </tr>
                    </thead>

                    <tbody>
                        {tableData ? (
                            tableData.map((measurement) => {
                                return (
                                    <tr key={measurement.id}>
                                        <td className="table-custom text-center">
                                            {measurement.id}
                                        </td>
                                        <td className="table-custom text-end pr-2">
                                            {measurement.sampling_rate}
                                        </td>
                                        <td className="table-custom text-center">
                                            {measurement.user}
                                        </td>
                                        <td className="table-custom text-center">
                                            <button
                                                onClick={() => {
                                                    runAnimation(measurement.id);
                                                }}
                                            >
                                                <AiFillPlaySquare className="w-6 h-6 text-blue-900 hover:text-red-900" />
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
        </div>
    );
};

export default Database;
