import React, { useEffect } from 'react';

const PortForm = ({ portsArray }) => {
    return (
        <form>
            <label>Ports:</label>
            <select id="ports">
                {portsArray ? (
                    portsArray.map((port) => {
                        return (
                            <option key={port.path}>
                                {port.manufacturer ? port.manufacturer : 'Unknown manufacturer'} (
                                {port.path})
                            </option>
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
