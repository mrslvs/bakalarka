import React from 'react';
const { ipcRenderer } = require('electron');
import { FiRefreshCw } from 'react-icons/fi';

const Port = ({ availablePorts, setAvailablePorts, setSelectedPort, isMeasuring }) => {
    const getPorts = () => {
        ipcRenderer.send('portRequest', 'client portRequest');
    };

    ipcRenderer.on('portResponse', (event, data) => {
        setAvailablePorts(data);
    });

    return (
        <div className="inline-flex w-1/2 justify-center bg-fuchsia-300">
            {/* // <div className="inline-flex shrink-0 w-1/2 justify-center bg-fuchsia-300 p-2"> */}
            {/* GET PORTS */}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    getPorts();
                }}
                // className="w-2/5 border border-black"
                className="flex items-center border border-black mr-2"
            >
                <button
                    type="submit"
                    // className="button"
                    // className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center h-10"
                    className="button inline-flex items-center justify-center"
                >
                    <span className="pr-1">Refresh ports</span>
                    <FiRefreshCw className="w-4 h-4" />
                </button>
            </form>

            {/* SET PORT */}
            {/* <form className="w-3/5 border border-black"> */}
            <form className="flex items-center border border-black">
                <select
                    id="ports"
                    disabled={isMeasuring}
                    onChange={(e) => {
                        // first option "Select Arduino port" is the only path that includes ' '
                        e.target.value.includes(' ')
                            ? setSelectedPort('')
                            : setSelectedPort(e.target.value);
                    }}
                    // className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-60 h-10"
                >
                    <option key="unavailable">Select Arduino port</option>
                    {availablePorts ? (
                        availablePorts.map((port) => {
                            return port.manufacturer ? (
                                <option key={port.path} value={port.path}>
                                    {' '}
                                    {port.manufacturer}{' '}
                                </option>
                            ) : (
                                <option disabled={true} key={port.path}>
                                    {'unknwon manufacturer'}
                                </option>
                            );
                        })
                    ) : (
                        <option disabled={true}>No available ports</option>
                    )}
                </select>
            </form>
        </div>
    );
};

export default Port;
