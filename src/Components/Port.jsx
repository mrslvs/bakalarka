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
        <div>
            {/* GET PORTS */}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    getPorts();
                }}
            >
                <button
                    type="submit"
                    // button styles inspiration: https://flowbite.com/docs/components/buttons/
                    className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
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
