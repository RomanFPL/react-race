import { useState } from "react";
import GamePage from "./routes/gamePage";
import HomePage from "./routes/homePage";
import "./app.css"

const App = () => {
  const [page, setPage] = useState("app");

  const handleChangePanel = (page) => {
    setPage(page);
  }

  switch (page) {
    case "app":
      return <HomePage changePageState={handleChangePanel}/>
    case "game": 
      return <GamePage changePageState={handleChangePanel}/>
    default:
      return <HomePage/>
  }
}

export default App;