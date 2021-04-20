
import SignInPage from '../Pages/SignInPage/SignInPage';
import Dashboard from "../Pages/Dashboard/Dashboard";
import Report from "../Pages/Report/Report";
import Lists from "../Pages/ListPage/Lists";
import LandingPage from "../Pages/LandingPage/LandingPage";
import SignUpPage from '../Pages/SignUpPage/SignUpPage';
import Expense from '../Pages/Expense/Expense';
import { Redirect, Route } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';

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
        <Route path="/signin" component={SignInPage} />
        <Route path="/signup" component={SignUpPage} /> 
        <Redirect to='/'/>
    </>
);