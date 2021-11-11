
import './App.css';


import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import AuthProvider from './Pages/context/AuthProvider/AuthProvider';
import Footer from './Pages/Shered/Footer/Footer';
import Navigation from './Pages/Shered/Navigation/Navigation';
import Services from './Pages/Services/Services';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Parchages from './Pages/Parchages/Parchages';
import Dashboard from './Pages/Dashboard/Dashboard';
import Pay from './Pages/Dashboard/Pay/Pay';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import Review from './Pages/Dashboard/Review/Review';

function App() {
  return (
    <div className="App body">
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/parchages/:serviceId">
              <Parchages></Parchages>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
