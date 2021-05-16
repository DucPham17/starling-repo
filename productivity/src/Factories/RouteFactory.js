
import Dashboard from "../Pages/Dashboard/Dashboard";
import Report from "../Pages/Report/Report";
import { Notes } from "../Pages/Notes";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Expense from '../Pages/Expense/Expense';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import './routeFactory.css';
import Menu from "../Component/Menu";

export const getMainRoutes = () => (
    <div className='appWrapper'>
        <Header className='appHeader'/>
        <Menu className='appMenu'/>
        <div className='appContent'>
            <Switch>
                <Route exact path="/home" component={Dashboard} /> 
                <Route path="/report" component={Report} /> 
                <Route path="/notes" component={Notes} /> 
                <Route path="/expense" component={Expense}/> 
                <Redirect to='/home'/>
            </Switch>
        </div>
        {/* <Footer className='appFooter'/> */}
    </div>
);

export const getEntryRoutes = () => (
    <>
        <Route exact path="/" component={LandingPage} /> 
        <Redirect to='/'/>
    </>
);