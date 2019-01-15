import React from 'react';
import PaymentList from './PaymentList';
import PaymentListFilters from './PaymentListFilters';

const PaymentDashboardPage = () => (
  <div className="Dashboard">
    <PaymentListFilters />
    <PaymentList />
  </div>
);

export default PaymentDashboardPage;