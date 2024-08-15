import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { Cta, Brand, Navbar } from './components';
import './App.css'

const App = () => {
    return (
        <section className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />

        </section>
    )
}

export default App