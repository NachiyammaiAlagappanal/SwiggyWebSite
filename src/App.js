import React from "react";
import Header from './Header/Header'
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import { useEffect } from "react";
import './App.css'
import Shimmer from "./shimmer";

const App = () => 
   {
        return <div>
            <Header />
            <Body />
            <Shimmer/>
            <Footer />
        </div>;
    }


export default App;