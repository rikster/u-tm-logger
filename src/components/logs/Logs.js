import React, {useEffect, useState} from 'react';
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";

const Logs = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setloading] = useState(false);

    useEffect(() => {
        getLogs();
        // eslint-disable-next-line
    }, []);

    const getLogs = async () => {
        setloading(true);

        const res = await fetch('/logs'); //proxy in package.json will add API hostname
        const data = await res.json(); // vs axios res.data
        setLogs(data);

        setloading(false);
    }

    if (loading) {
        return (<Preloader/>);
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
                    logs.map(log => <LogItem log={log} key={log.id}/>)
                )}
            </ul>
        </div>
    );
};

export default Logs;
