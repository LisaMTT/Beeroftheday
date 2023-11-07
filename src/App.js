import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const URL = "https://random-data-api.com/api/v2/beers"



function App() {

  const [brand, setBrand] = useState('')
  const [name, setName] = useState('')
  const [style, setStyle] = useState('')

  useEffect(() => {
   axios.get(URL)
      .then((response)=> {
        console.log(response.data)
        setBrand(response.data.brand)
        setName(response.data.name)
        setStyle(response.data.style)
      }).catch((error) => {
        alert(error)
      })
  }, [])
  

  return (
    <div id="container">
      <h1>BEER OF THE DAY</h1>
      <h3>BRAND</h3><p>{brand}</p>
      <h3>NAME</h3><p>{name}</p>
      <h3>STYLE</h3><p>{style}</p>
    </div>
  );
}

export default App;
