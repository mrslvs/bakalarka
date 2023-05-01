import React from 'react';
const { ipcRenderer } = require('electron');
import { AiFillPlaySquare } from 'react-icons/ai';
import { SiMongodb } from 'react-icons/si';
import { FaCloudDownloadAlt } from 'react-icons/fa';

const Database = ({
    tableData,
    setTableData,
    setAngle,
    setNewDistance,
    databaseFlag,
    setDatabaseFlag,
}) => {
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
        setDatabaseFlag(message);
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
            <button
                onClick={requestDatabaseData}
                className={
                    databaseFlag
                        ? 'button inline-flex items-center justify-center'
                        : 'button-disabled inline-flex items-center justify-center'
                }
                disabled={!databaseFlag}
            >
                <span className="pr-1">get data</span>
                <FaCloudDownloadAlt className="w-5 h-5" />
            </button>
            <button
                onClick={checkConnection}
                className="button inline-flex items-center justify-center"
            >
                <span>check connection</span>
                <SiMongodb className="w-4 h-4" />
            </button>
            <table className="table-custom table-custom-text ">
                <thead>
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
                                    <td className="table-custom text-center">{measurement.id}</td>
                                    <td className="table-custom text-end pr-2">
                                        {measurement.sampling_rate}
                                    </td>
                                    <td className="table-custom text-center">{measurement.user}</td>
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
    );
};

export default Database;
