import React from 'react';
import AssetList from './AssetList';
import AssetListFilters from './AssetListFilters';
import DebtList from './DebtList';

const Home = () => (
  <div className="HomePage">
    <AssetList />
    <DebtList /> 
  </div>
);

export default Home;