import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Home from '../components/Home';
import IncomingFundDashboardPage from '../components/IncomingFundDashboardPage';
import PaymentDashboardPage from '../components/PaymentDashboardPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddAssetPage from '../components/AddAssetPage';
import AddDebtPage from '../components/AddDebtPage';
import AddIncomingFundPage from '../components/AddIncomingFundPage';
import AddPaymentPage from '../components/AddPaymentPage';
import AddExpensePage from '../components/AddExpensePage';
import EditAssetPage from '../components/EditAssetPage';
import EditDebtPage from '../components/EditDebtPage';
import EditIncomingFundPage from '../components/EditIncomingFundPage';
import EditPaymentPage from '../components/EditPaymentPage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


const AppRouter = () => (
    <BrowserRouter>
        <div>
        <Header />
            <Switch>
            <Route path="/" component={Home} exact={true} />   
            <Route path="/incomingfunddashboard" component={IncomingFundDashboardPage} /> 
            <Route path="/paymentdashboard" component={PaymentDashboardPage} /> 
            <Route path="/expensedashboard" component={ExpenseDashboardPage} />
            <Route path="/addasset" component={AddAssetPage} /> 
            <Route path="/adddebt" component={AddDebtPage} /> 
            <Route path="/addincomingfund" component={AddIncomingFundPage} /> 
            <Route path="/addpayment" component={AddPaymentPage} />  
            <Route path="/addexpense" component={AddExpensePage} /> 
            <Route path="/editasset/:id" component={EditAssetPage} /> 
            <Route path="/editdebt/:id" component={EditDebtPage} /> 
            <Route path="/editincomingfund/:id" component={EditIncomingFundPage} /> 
            <Route path="/editpayment/:id" component={EditPaymentPage} /> 
            <Route path="/editexpense/:id" component={EditExpensePage} />            
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;