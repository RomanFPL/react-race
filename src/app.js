import GamePage from "./routes/gamePage";
import HomePage from "./routes/homePage";
import ContactPage from "./routes/contactPage";
import { useRouteMatch, Route, Switch, Redirect } from "react-router-dom";
import AboutPage from "./routes/aboutPage/aboutPage";
import firebase from "firebase/compat";

import s from "./app.module.css"
import cn from "classnames";
import Footer from "./components/footer";
import MenuHeader from "./components/menuHeader";

const firebaseConfig = {
  apiKey: "AIzaSyBdjsNGOzDGvt6VIdhRj1nmOBQvA_wMm9s",
  authDomain: "pokemon-game-24b59.firebaseapp.com",
  databaseURL: "https://pokemon-game-24b59-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pokemon-game-24b59",
  storageBucket: "pokemon-game-24b59.appspot.com",
  messagingSenderId: "1000311813585",
  appId: "1:1000311813585:web:23afaff20c10973a529cf0"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref("pokemons").on("value", (snapshot) => {
  console.log(snapshot.val())
})

const App = () => {
  const match = useRouteMatch("/");
  return (
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
  )
}

export default App;