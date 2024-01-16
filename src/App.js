import { useEffect, useState } from 'react';
import './App.css';
import CountryList from './components/CountryList';
import axios from 'axios';

function App() {

  const countryList = ['Pakistan','Germany',
    'Canada','Russia','India','USA',
    'England','Australia','France'];

  const [details, setDetails] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    headers: {
      'X-RapidAPI-Key': '4cc8ebcbb3msh053fb805ada74c6p14a33ejsn89c682ff144b',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const result = [];
        for(let i = 0; i<countryList.length; i++) {
          options.params = {'q':countryList[i]};
          const response = await axios.request(options);
          result.push(response.data);
        }
        setDetails(result);
      }catch(err) {
        console.log(err);
      }
    };
    fetchData();
     // eslint-disable-next-line
  },[])

  return (
    <div className="App">
      <CountryList
        details = {details}
      />
    </div>
  );
}

export default App;
