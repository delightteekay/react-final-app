import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
return (
<div className="App">
<div className='container'>
<Weather defaultCity="Thohoyandou" />
<footer>
This project is coded by{" "} 
<a href='https://github.com/' target="_blank" rel="noopener noreferrer">
Delight Tshirando</a>
{" "}and is{" "} 
<a href='https://github.com/delightteekay/react-final-app' target='_blank'
rel="noopener noreferrer">open-sourced on GitHub</a>
</footer>
</div>
</div>
);
}


