import React from 'react';
import PaymentList from './PaymentList';
import PaymentListFilters from './PaymentListFilters';

const PaymentDashboardPage = () => (
  <div>
    <div className="Dashboard"><PaymentListFilters /></div>
    <div><PaymentList /></div>
  </div>
);

export default PaymentDashboardPage;