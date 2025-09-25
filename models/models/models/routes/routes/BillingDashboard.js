import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BillingDashboard = ({ societyId }) => {
    const [bills, setBills] = useState([]);
    useEffect(() => {
        if (societyId)
            axios.get(`/api/billing/society/${societyId}`).then((res) => setBills(res.data));
    }, [societyId]);
    return (
        <div>
            <h2>Bills</h2>
            <table>
                <thead>
                    <tr>
                        <th>Unit</th>
                        <th>Owner</th>
                        <th>Period</th>
                        <th>Total</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {bills.map(b => (
                        <tr key={b._id}>
                            <td>{b.unit}</td>
                            <td>{b.owner}</td>
                            <td>{b.period}</td>
                            <td>{b.total}</td>
                            <td>{b.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default BillingDashboard;
