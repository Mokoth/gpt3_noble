import React from "react";
import { Article, Brand, CTA, Navbar, Feature } from "./components";
import { Blog, Header, Features, Footer, Possibility, WhatGPT3 } from "./containers";

import './App.css'

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <div>
                <Article />
                <Brand />
                <CTA />
                <Feature />
                
                <Blog />
                <Features />
                <Footer />
                <Possibility />
                <WhatGPT3 />
            </div>
        </div>
  )
}

export default App