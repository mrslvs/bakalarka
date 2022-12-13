import React, { useEffect } from 'react';

const PortForm = ({ portsArray }) => {
    return (
        <form>
            <label>Ports:</label>
            <select id="ports">
                {portsArray ? (
                    portsArray.map((port) => {
                        return port.manufacturer ? (
                            <option key={port.path}> {port.manufacturer} </option>
                        ) : (
                            <option disabled={true}>{'unknwon manufacturer'}</option>
                        );
                    })
                ) : (
                    <option disabled={true}>Get available ports first</option>
                )}
            </select>
        </form>
    );
};

export default PortForm;
