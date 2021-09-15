import MenuHeader from "../../components/menuHeader";

const AboutPage = ({changePageState}) => {
    const handleClickButton = () => {
        changePageState && changePageState("app")
    }
    return (
            <div>
                <MenuHeader bgActive="true"/>
                    <section style={{padding: "75px"}}>This is Contact Page!!!</section>
                    <button onClick={handleClickButton}>Go back</button>
            </div>
    )
}

export default AboutPage;