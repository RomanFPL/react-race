import React from "react"
import Header from "../header/header";
import Layout from "../layout/layout";
import Footer from "../footer/footer";

const App = () => {
    return (
        <>
            <Header title={"Title"} descr={"Description"}/>
            <Layout title={"title"} descr={"description"} urlBg={"sdjbjdskb"} colorBg={"jdbkdbsjd"}/>
            <Layout title={"title"} descr={"description"} urlBg={"sdjbjdskb"} colorBg={"jdbkdbsjd"}/>
            <Layout title={"title"} descr={"description"} urlBg={"sdjbjdskb"} colorBg={"jdbkdbsjd"}/>
            <Footer/>
        </>
    )
}

export default App;