import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MapComponent = () => {
    const [locations, setLocations] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchLocations = async () => {
            const options = {
                method: 'GET',
                url: 'https://realty-in-us.p.rapidapi.com/locations/v2/auto-complete',
                params: { input: 'new york', limit: '10' },
                headers: {
                    'X-RapidAPI-Key': 'c23f1f5040msh2d9f888e2376ee5p16c500jsnf0fa9092ba10', // This is the API key that it generated when I signed up
                    'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                setLocations(response.data);
            } catch (error) {
                console.error(error);
                setError('Failed to fetch data');
            }
        };

        fetchLocations();
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div>
            {error && <p>Error: {error}</p>}
            {locations.length > 0 ? (
                <ul>
                    {locations.map(location => (
                        <li key={location.id}>{location.name}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading locations...</p>
            )}
        </div>
    );
};

export default MapComponent;
