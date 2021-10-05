import GamePage from "./routes/gamePage";
import HomePage from "./routes/homePage";
import ContactPage from "./routes/contactPage";
import { useRouteMatch, Route, Switch, Redirect } from "react-router-dom";
import AboutPage from "./routes/aboutPage/aboutPage";
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import s from "./app.module.css"
import cn from "classnames";
import Footer from "./components/footer";
import MenuHeader from "./components/menuHeader";
import PrivatRoute from "./components/privateRoute";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserAsync } from "./store/user";

const App = () => {
  const match = useRouteMatch("/");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAsync());
  },[])
  return (
    <>
      <Switch>
        <Route path="/404" render={() => <h1>404 NotFound</h1>}/>
        <Route>
          <>
            <MenuHeader bgActive={!match.isExact}/>
              <div className={cn(s.wrap, {[s.isHomePage]:match.isExact})}>
                <Switch>
                  <Route path="/" exact component={HomePage}/>
                  <Route path="/home" component={HomePage}/>
                  <PrivatRoute path="/game" component={GamePage}/>
                  <PrivatRoute path="/about" component={AboutPage}/>
                  <Route path="/contact" component={ContactPage}/>
                  <Route render={() => (<Redirect to="/404"/>)}/>
                </Switch>
              </div>
            <Footer/>
          </> 
        </Route>
      </Switch>
    <NotificationContainer/>
  </>
  )
}

export default App;