import React from "react"
import Header from "../header/header";
import Layout from "../layout/layout";
import Footer from "../footer/footer";

const App = () => {
    return (
        <>
            <Header title={"Title"} descr={"Description"}/>
            <Layout/>
            <Layout/>
            <Layout/>
            <Footer/>
        </>
    )
}

export default App;