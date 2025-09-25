// src/components/SocietySelector.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SocietySelector = ({ onSelect }) => {
    const [societies, setSocieties] = useState([]);
    useEffect(() => {
        axios.get('/api/society').then((res) => setSocieties(res.data));
    }, []);
    return (
        <div>
            <label>Select Society:</label>
            <select onChange={e => onSelect(e.target.value)}>
                <option value="">Choose...</option>
                {societies.map(s => (
                    <option key={s._id} value={s._id}>{s.name}</option>
                ))}
            </select>
        </div>
    );
};

export default SocietySelector;
