import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SocietySelector = ({ onSelect }) => {
    const [societies, setSocieties] = useState([]);
    useEffect(() => {
        axios.get('/api/society').then((res) => setSocieties(res.data));
    }, []);
    return (
        <select onChange={(e) => onSelect(e.target.value)}>
            <option>Select Society</option>
            {societies.map(s => (
                <option key={s._id} value={s._id}>{s.name}</option>
            ))}
        </select>
    );
};
export default SocietySelector;
