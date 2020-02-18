import React from "react"
import Nav from "../components/nav/nav"
import Featured from "../components/featured/featured"
import Home from "../components/home/home"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
        <SEO title="Home"/>
        <Nav/>
        <Featured/>
        <Home/>
    </Layout>
)

export default IndexPage
