import React from 'react';
const { ipcRenderer } = require('electron');

const Port = ({ availablePorts, setAvailablePorts, setSelectedPort }) => {
    ipcRenderer.on('portResponse', (event, data) => {
        setAvailablePorts(data);
    });

    return (
        <div>
            {/* GET PORTS */}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    ipcRenderer.send('portRequest', 'client portRequest');
                }}
            >
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Refresh ports
                </button>
            </form>

            {/* SET PORT */}
            <form>
                <label>Available ports:</label>
                <select
                    id="ports"
                    onChange={(e) => {
                        setSelectedPort(e.target.value);
                    }}
                >
                    <option>Select Arduino</option>
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
