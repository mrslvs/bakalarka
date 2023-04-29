import React from 'react';
const { ipcRenderer } = require('electron');

const Port = ({ availablePorts, setAvailablePorts, setSelectedPort }) => {
    const getPorts = () => {
        ipcRenderer.send('portRequest', 'client portRequest');
    };

    ipcRenderer.on('portResponse', (event, data) => {
        setAvailablePorts(data);
    });

    return (
        <div className="flex bg-fuchsia-300">
            {/* GET PORTS */}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    getPorts();
                }}
            >
                <button type="submit" className="button">
                    Refresh ports
                </button>
            </form>

            {/* SET PORT */}
            <form>
                <select
                    id="ports"
                    onChange={(e) => {
                        setSelectedPort(e.target.value);
                    }}
                    className="max-w-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                    <option>Select Arduino port</option>
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
