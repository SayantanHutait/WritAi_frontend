import React, { useEffect, useState } from 'react';

function History() {
    const [history, setHistory] = useState([]);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const getHistory = () => {
        fetch(import.meta.env.VITE_POST_HISTORY_URL, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
            },
        })
        .then((response) => {
            if (!response.ok) throw new Error("Failed to fetch history");
            return response.json();
        })
        .then((data) => {
            setHistory(data);
            console.log(data);
        })
        .catch((err) => {
            setError(err.message);
        });
    };

    const deleteHistory = (id) => {
        fetch(`${import.meta.env.VITE_POST_HISTORY_URL}/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
            },
        })
        .then((response) => {
            if (!response.ok) throw new Error("Failed to delete");
            return response.json();
        })
        .then(() => {
            setSuccess("Deleted successfully");
            setHistory(prev => prev.filter(h => h.id !== id));
        })
        .catch((err) => {
            setError(err.message);
        });
    };

    useEffect(() => {
        getHistory();
        console.log('history');
    }, []);

    return (
        <div className='container mt-4'>
            {error && (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    {error}
                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => setError("")}
                        aria-label="Close"
                    ></button>
                </div>
            )}

            {success && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    {success}
                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => setSuccess("")}
                        aria-label="Close"
                    ></button>
                </div>
            )}

            {history.map((his) => (
                <div key={his.id} className="card mb-3 bg-dark text-white">
                    <div className="card-body d-flex justify-content-between align-items-center">
                        <div>
                            <p className="mb-1">{his.journal}</p>
                            <small className="text-secondary">{his.timestamp}</small>
                        </div>
                        <button
                            onClick={() => deleteHistory(his.id)}
                            className='btn btn-outline-secondary btn-sm'
                        >
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default History;
