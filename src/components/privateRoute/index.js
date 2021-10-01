import { Route, Redirect } from "react-router-dom"

const PrivatRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => 
                localStorage.getItem('idToken') ? <Component {...props} /> : <Redirect to="/"/>}
        />
    )
}

export default PrivatRoute;