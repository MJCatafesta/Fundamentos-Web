import React from 'react';
import './Home.css';


interface MinhaProps{
    title : string;
    description : string;
}

function Home(props:MinhaProps) {
    
    return (
    <>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    </>
    ); 
  }
  
  export default Home;