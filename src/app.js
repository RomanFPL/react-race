import { useState } from "react";
import GamePage from "./routes/game";
import HomePage from "./routes/home";

const App = () => {
  const [page, setPage] = useState("app");

  const handleChangePanel = (page) => {
    setPage(page);
  }

  switch (page) {
    case "app":
      return <HomePage changePageState={handleChangePanel}/>
    case "game": 
      return <GamePage/>
    default:
      return <HomePage/>
  }
}

export default App;