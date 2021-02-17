import React, {useEffect, useState} from 'react';

const Logs = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setloading] = useState(false);

    useEffect(() => {
        getLogs();
        // eslint-disable-next-line
    }, []);

    const getLogs = async () => {
        setloading(true);

        const res = await fetch('http://localhost:5000/logs'); //proxy in package.json will add API hostname
        const data = await res.json(); // vs axios res.data
        setLogs(data);

        setloading(false);
    }

    if (loading) {
        return (<h4>Loading...</h4>);
    }

    return (
        <div>
            <ul className="collection with-header">
                <li className="collection-header">
                    <h4 className="center">Systems Logs</h4>
                </li>
                {!loading && logs.length === 0 ? (
                    <p className='center'>No logs to show...</p>
                ) : (
                    logs.map(log => <li>{log.message}</li>)
                )}
            </ul>
        </div>
    );
};

export default Logs;
