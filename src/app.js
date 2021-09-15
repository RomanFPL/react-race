import { useState } from "react";

import GamePage from "./routes/gamePage";
import HomePage from "./routes/homePage";
import ContactPage from "./routes/contactPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutPage from "./routes/aboutPage/aboutPage";

import "./app.css"

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/home" component={HomePage}/>
        <Route path="/game" component={GamePage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/contact" component={ContactPage}/>
        <Route render={() => <h1>404 NotFound</h1>}/>
      </Switch>
    </BrowserRouter>
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