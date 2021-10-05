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
import { useDispatch, useSelector } from "react-redux";
import { getUserAsync, selectUserLoading } from "./store/user";
import UserProfile from "./routes/userProfile";

const App = () => {
  const match = useRouteMatch("/");
  const dispatch = useDispatch();
  const isUseLoading = useSelector(selectUserLoading);

  useEffect(() => {
    dispatch(getUserAsync());
  },[])
  if(isUseLoading){
    return "Loading ..."
  }

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
                  <PrivatRoute path="/user" component={UserProfile}/>
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