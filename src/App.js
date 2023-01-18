import './App.css';
import CityComponent from './components/CityComponent';
import WeatherComponent from './components/WeatherComponent';
import styled from 'styled-components'
import { useState } from 'react';
import axios from 'axios';
const API_key = '48a1cb06f93316abb5b9b3e9adab3a3b';
const Container = styled.div`

  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px #555;
  padding: 20px 10px;
  border-radius: 4px;
  width: 380px;
  background: white;


`
const Applabel = styled.span`
   color: black;
   font-size: 18px;
   font-weight: bold;
`


function App() {
  const [city,setCity] = useState();
  const [weather,setWeather] = useState();
  const fetchWeather = async(e)=>{
    e.preventDefault();
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);
    console.log(response);
    setWeather(response.data)
  }
  fetchWeather()
  return (
    <Container >
      <Applabel>React Weather App</Applabel>
      {weather ? (<WeatherComponent weather={weather}/>) :  (<CityComponent setCity={setCity} fetchWeather={fetchWeather}/>) }
    </Container>
  );
}

export default App;
