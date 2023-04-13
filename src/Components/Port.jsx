import React from 'react';
const { ipcRenderer } = require('electron');

const Port = ({ availablePorts, setAvailablePorts, setSelectedPort }) => {
    const getPorts = () => {
        ipcRenderer.send('portRequest', 'client portRequest');
    };

    ipcRenderer.on('portResponse', (event, data) => {
        // console.log(data);
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
                <button>Update ports</button>
            </form>

            {/* SET PORT */}
            <form>
                <label>Available ports:</label>
                <select
                    id="ports"
                    // defaultValue={'Please update available ports'}
                    onChange={(e) => {
                        console.log('pf.jxs: ' + e.target.value);
                        setSelectedPort(e.target.value);
                    }}
                >
                    {availablePorts ? (
                        availablePorts.map((port) => {
                            return port.manufacturer ? (
                                <option key={port.path} value={port.path}>
                                    {' '}
                                    {port.manufacturer}{' '}
                                </option>
                            ) : (
                                <option disabled={false} key={port.path}>
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
