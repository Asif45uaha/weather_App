import React from 'react'
import styled from 'styled-components'
const WeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`
const WeatherLabel = styled.span`
 color: black;
 font-size: 18px;
 font-weight: bold;
 margin: 10px auto;
`
const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  border: black solid 1px;
  border-radius: 2px;
  color: black;
 font-size: 18px;
 font-weight: bold;
 margin: 20px auto;
 & input{
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
 }
 & button{
    
    font-size: 14px;
    color: white;
    background-color: black;
    border: none;
    outline: none;
    cursor: pointer;
 }
`

const CityComponent = (props) => {
  const {setCity,fetchWeather} = props;
  return (
    <>
    <WeatherLogo src='/images/perfect-day.svg' alt="error" />
    <WeatherLabel>Find Weather from City</WeatherLabel>
    <SearchBox onSubmit={fetchWeather}>
        <input type="text" placeholder='City' onChange={(e)=>setCity(e.target.value)} />
        <button type='submit'>Search</button>
    </SearchBox>
    </>
  )
}

export default CityComponent