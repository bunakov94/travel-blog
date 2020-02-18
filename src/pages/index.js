import React from "react"
import {Link} from "gatsby"
import Nav from "../components/nav/nav"
import Featured from "../components/featured/featured"
import Home from "../components/home/home"
import Footer from "../components/footer/footer"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.css"

const IndexPage = () => (
    <Layout>
        <SEO title="Home"/>
        <Nav/>
        <Featured/>
        <Home/>
        <Link to="/blog" className="viewmore">View More</Link>
        <Footer/>
    </Layout>
)

export default IndexPage
