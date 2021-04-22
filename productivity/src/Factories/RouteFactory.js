
import Dashboard from "../Pages/Dashboard/Dashboard";
import Report from "../Pages/Report/Report";
import Lists from "../Pages/ListPage/Lists";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Expense from '../Pages/Expense/Expense';
import { Redirect, Route } from 'react-router-dom';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

export const getMainRoutes = () => (
    <>
        <Header/>
        <Route exact path="/" component={Dashboard} /> 
        <Route path="/report" component={Report} /> 
        <Route path="/lists" component={Lists} /> 
        <Route path="/expense" component={Expense}/> 
        <Redirect to='/'/>
        <Footer/>
    </>
);

export const getEntryRoutes = () => (
    <>
        <Route exact path="/" component={LandingPage} /> 
        <Redirect to='/'/>
    </>
);