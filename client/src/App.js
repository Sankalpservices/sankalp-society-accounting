import React, { useState } from 'react';
import SocietySelector from './components/SocietySelector';
import BillingDashboard from './components/BillingDashboard';

function App() {
  const [selectedSociety, setSelectedSociety] = useState('');

  return (
    <div>
      <h1>Accounting</h1>
      <SocietySelector onSelect={setSelectedSociety} />
      <BillingDashboard societyId={selectedSociety} />
    </div>
  );
}

export default App;
