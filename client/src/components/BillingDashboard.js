import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BillingDashboard = ({ societyId }) => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    if (societyId) {
      axios.get(`/api/billing/society/${societyId}`)
        .then(res => setBills(res.data))
        .catch(console.error);
    }
  }, [societyId]);

  return (
    <div>
      <h2>Billing List</h2>
      <table border="1" cellPadding="5">
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
          {bills.map(bill => (
            <tr key={bill._id}>
              <td>{bill.unit}</td>
              <td>{bill.owner}</td>
              <td>{bill.period}</td>
              <td>{bill.total}</td>
              <td>{bill.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BillingDashboard;
