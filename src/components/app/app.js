import React from "react"
import Header from "../header";
import Layout from "../layout";
import Footer from "../footer";


import imgBG from "../../assets/bg.jpg"
import jucyBG from "../../assets/bg1.jpg"

const App = () => {
    return (
        <>
            <Header title={"Title"} descr={"Description"}/>
            <Layout title={"Test title #1"} descr={"Description"} urlBg={imgBG}/>
            <Layout title={"Test title #2"} descr={"Description"} colorBg={"#78c594"}/>
            <Layout title={"Test title #3"} descr={"Description"} urlBg={jucyBG}/>
            <Footer/>
        </>
    )
}

export default App;
