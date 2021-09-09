import header from "./header.css"

const Header = ({title, descr}) => {
    return (
        <header class="root">
            <div class="forest"></div>
            <div class="container">
                <h1>{title}</h1>
                <p>{descr}</p>
            </div>
        </header>
    )
}

export default Header;