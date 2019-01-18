import React from 'react';
import IncomingFundList from './IncomingFundList';
import IncomingFundListFilters from './IncomingFundListFilters';

const IncomingFundDashboardPage = () => (
  <div>
    <div className="Dashboard"><IncomingFundListFilters /></div>
    <div><IncomingFundList /></div> 
  </div>
);

export default IncomingFundDashboardPage;