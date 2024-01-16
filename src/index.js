import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import NetflixCard from './NetflixCard';

ReactDOM.render(
    <>
        <h1 className='heading_style'>Top 5 Netflix Original Series</h1>
        <NetflixCard imgSrc="https://picsum.photos/327/300" sName="DARK" stitle="Netflix Series" />
        <NetflixCard imgSrc="https://picsum.photos/327/300" sName="Stranger Things" stitle="Netflix Series" />
        <NetflixCard imgSrc="https://picsum.photos/327/300" sName="TI" stitle="Netflix Series" />
    </>
    , document.getElementById("root"));