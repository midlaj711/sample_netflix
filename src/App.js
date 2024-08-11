import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import {originals,action, Comedy, Horror, Romance, Documentaries, Trending } from './urls'
import './App.css';
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost url={originals} title='Netflix Originals' />
    <RowPost url={Trending} title='Trending' />
    <RowPost url={action} title='Action' isSmall />
    <RowPost url={Comedy} title='Comedy' isSmall />
    <RowPost url={Horror} title='Horror' isSmall />
    <RowPost url={Romance} title='Romance' isSmall />
    <RowPost url={Documentaries} title='Documantaries' isSmall />
    
    </div>
  );
}

export default App;
