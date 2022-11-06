import { useState } from 'react';

function App() {
    const { ports, setPorts } = useState();

    return (
        <div className="App">
            <h1>Hello electron world!</h1>
            <p>{ports ? ports : 'no ports'}</p>
        </div>
    );
}

export default App;
