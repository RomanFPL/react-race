import { Route, Switch, useRouteMatch } from "react-router";
import BoardPage from "./routes/board";
import FinishPage from "./routes/finish";
import StartPage from "./routes/start";

const GamePage = () => {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route path={`${match.path}/`} exact component={StartPage} />
            <Route path={`${match.path}/board`} component={BoardPage} />
            <Route path={`${match.path}/finish`} component={FinishPage} />1
        </Switch>
    );
};

export default GamePage;