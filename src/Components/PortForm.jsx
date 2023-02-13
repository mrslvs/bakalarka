import React, { useEffect } from 'react';

const PortForm = ({ availablePorts, setSelectedPort }) => {
    return (
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
    );
};

export default PortForm;
