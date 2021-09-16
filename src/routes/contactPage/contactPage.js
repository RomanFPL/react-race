const ContactPage = ({changePageState}) => {
    const handleClickButton = () => {
        changePageState && changePageState("app")
    }
    return (
            <div>
                <section style={{padding: "75px"}}>This is Contact Page!!!</section>
                <button onClick={handleClickButton}>Go back</button>
            </div>
    )
}

export default ContactPage;