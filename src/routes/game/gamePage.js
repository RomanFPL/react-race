const GamePage = ({changePageState}) => {
    const handleClickButton = () => {
        changePageState && changePageState("app")
    }
    return (
        <div>
            This is Game Page!!!
            <button onClick={handleClickButton}>Go back</button>
        </div>
    )
}
export default GamePage;