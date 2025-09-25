import React, { useState } from 'react';
import SocietySelector from './components/SocietySelector';
import BillingDashboard from './components/BillingDashboard';

function App() {
    const [selectedSociety, setSelectedSociety] = useState(null);
    return (
        <div>
            <SocietySelector onSelect={setSelectedSociety} />
            {selectedSociety && <BillingDashboard societyId={selectedSociety} />}
        </div>
    );
}
export default App;
