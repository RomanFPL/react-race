import { useHistory } from "react-router";

const GamePage = () => {
    const hist = useHistory()
    const handleClickButton = () => {
        hist.push("/")
    }
    return (
            <div>
                <section>This is Game Page!!!</section>
                <button onClick={handleClickButton}>Go back</button>
            </div>
    )
}
export default GamePage;