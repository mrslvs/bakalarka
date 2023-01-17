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