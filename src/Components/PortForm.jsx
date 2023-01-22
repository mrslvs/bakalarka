import React, { useEffect } from 'react';

const PortForm = ({ availablePorts, setSelectedPort }) => {
    return (
        <form>
            <label>Available ports:</label>
            <select id="ports" onChange={(e) => setSelectedPort(e.target.key)}>
                {availablePorts ? (
                    availablePorts.map((port) => {
                        return port.manufacturer ? (
                            <option key={port.path}> {port.manufacturer} </option>
                        ) : (
                            <option disabled={true} key={port.path}>
                                {'unknwon manufacturer'}
                            </option>
                        );
                    })
                ) : (
                    <option disabled={true}>Update available ports first</option>
                )}
            </select>
        </form>
    );
};

export default PortForm;
