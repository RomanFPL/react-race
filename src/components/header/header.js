import header from "./header.css"

const Header = ({title, descr}) => {
    return (
        <header className="root">
            <div className="forest"></div>
            <div className="container">
                <h1>{title}</h1>
                <p>{descr}</p>
            </div>
        </header>
    )
}

export default Header;