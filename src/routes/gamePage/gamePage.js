import MenuHeader from "../../components/menuHeader";

const GamePage = ({changePageState}) => {
    const handleClickButton = () => {
        changePageState && changePageState("app")
    }
    return (
            <div>
                <MenuHeader bgActive="true"/>
                    <section style={{padding: "75px"}}>This is Game Page!!!</section>
                    <button onClick={handleClickButton}>Go back</button>
            </div>
    )
}
export default GamePage;