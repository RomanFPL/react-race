import { useHistory } from "react-router";

const GamePage = () => {
    const hist = useHistory()
    const handleClickButton = () => {
        hist.push("/")
    }
    return (
            <div>
                <section style={{padding: "75px"}}>This is Game Page!!!</section>
                <button onClick={handleClickButton}>Go back</button>
            </div>
    )
}
export default GamePage;