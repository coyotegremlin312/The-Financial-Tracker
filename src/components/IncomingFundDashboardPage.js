import React from 'react';
import IncomingFundList from './IncomingFundList';
import IncomingFundListFilters from './IncomingFundListFilters';

const IncomingFundDashboardPage = () => (
  <div className="Dashboard">
    <IncomingFundListFilters />
    <IncomingFundList />
  </div>
);

export default IncomingFundDashboardPage;