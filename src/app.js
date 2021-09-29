import GamePage from "./routes/gamePage";
import HomePage from "./routes/homePage";
import ContactPage from "./routes/contactPage";
import { useRouteMatch, Route, Switch, Redirect } from "react-router-dom";
import AboutPage from "./routes/aboutPage/aboutPage";

import s from "./app.module.css"
import cn from "classnames";
import Footer from "./components/footer";
import MenuHeader from "./components/menuHeader";

import { FireBaseContext } from "./services/firebaseContect";
// import Firebase from "./services/firebase";
import FirebaseClass from "./services/firebase";

const App = () => {
  const match = useRouteMatch("/");
  return (
    <FireBaseContext.Provider value={FirebaseClass}>
      <Switch>
        <Route path="/404" render={() => <h1>404 NotFound</h1>}/>
        <Route>
          <>
            <MenuHeader bgActive={!match.isExact}/>
              <div className={cn(s.wrap, {[s.isHomePage]:match.isExact})}>
                <Switch>
                  <Route path="/" exact component={HomePage}/>
                  <Route path="/home" component={HomePage}/>
                  <Route path="/game" component={GamePage}/>
                  <Route path="/about" component={AboutPage}/>
                  <Route path="/contact" component={ContactPage}/>
                  <Route render={() => (<Redirect to="/404"/>)}/>
                </Switch>
              </div>
            <Footer/>
          </> 
        </Route>
      </Switch>
    </FireBaseContext.Provider>
  )
}

export default App;