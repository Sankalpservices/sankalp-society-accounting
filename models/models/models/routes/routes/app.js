// src/App.js
import React, { useState } from 'react';
import SocietySelector from './components/SocietySelector';
import BillingDashboard from './components/BillingDashboard';

function App() {
    const [selectedSociety, setSelectedSociety] = useState(null);
    return (
        <div>
            <h1>Accounting</h1>
            <SocietySelector onSelect={setSelectedSociety} />
            {selectedSociety && <BillingDashboard societyId={selectedSociety} />}
        </div>
    );
}

export default App;
