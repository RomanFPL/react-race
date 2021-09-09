import React from "react"
import Header from "../header/header";
import Layout from "../layout/layout";
import Footer from "../footer/footer";

const App = () => {
    return (
        <>
            <Header title={"Title"} descr={"Description"}/>
            <Layout title={"Test title #1"} descr={"Description"} urlBg={""} colorBg={""}/>
            <Layout title={"Test title #2"} descr={"Description"} urlBg={""} colorBg={""}/>
            <Layout title={"Test title #3"} descr={"Description"} urlBg={""} colorBg={""}/>
            <Footer/>
        </>
    )
}

export default App;