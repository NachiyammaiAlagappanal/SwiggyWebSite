import React from "react";
import Header from './Header/Header'
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import { useEffect } from "react";
import './App.css'
import getData from "./Data";

const App = () => 
   {

  useEffect(() => {
    getData();
  }, []);
        return <div>
            <Header />
            <Body />
            <Footer />
        </div>;
    }


export default App;