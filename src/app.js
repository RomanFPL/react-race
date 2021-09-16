import GamePage from "./routes/gamePage";
import HomePage from "./routes/homePage";
import ContactPage from "./routes/contactPage";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import AboutPage from "./routes/aboutPage/aboutPage";

import s from "./app.module.css"
import cn from "classnames";
import Footer from "./components/footer";
import MenuHeader from "./components/menuHeader";

const App = () => {
  const match = useRouteMatch("/");
  return (
      <Switch>
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
                </Switch>
              </div>
            <Footer/>
          </> 
        </Route>
        <Route render={() => <h1>404 NotFound</h1>}/>
      </Switch>
  )
//   const [page, setPage] = useState("app");

//   const handleChangePanel = (page) => {
//     setPage(page);
//   }

//   switch (page) {
//     case "app":
//       return <HomePage changePageState={handleChangePanel}/>
//     case "game": 
//       return <GamePage changePageState={handleChangePanel}/>
//     default:
//       return <HomePage/>
//   }
}

export default App;