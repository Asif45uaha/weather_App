import React from 'react'
import styled from 'styled-components'
export const WeatherInfoIcons = {
  sunset: '/images/temp.svg',
  sunrise: '/images/temp.svg',
  humidity: '/images/humidity.svg',
  wind: '/images/wind.svg',
  pressure: '/images/pressure.svg'
}
export const WeatherIcons = {
  "01d": "/images/sunny.svg",
  "01n": "/images/night.svg",
  "02d": "/images/day.svg",
  "02n": "/images/cloudy-night.svg",
  "03d": "/images/cloudy.svg",
  "03n": "/images/cloudy.svg",
  "04d": "/images/perfect-day.svg",
  "04n": "/images/cold-night.svg",
  "09d": "/images/rain.svg",
  "09n": "/images/rain-night.svg",
  "10d": "/images/rain.svg",
  "10n": "/images/rain-night.svg",
  "11d": "/images/storm.svg",
  "11n": "/images/storm.svg",
  "50d": "/images/mist.svg"

}
const WeatherCondition = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   width: 100%;
   justify-content: space-between;
   margin: 30px auto;
`
const Condition = styled.span`
  margin: 20px auto;
  font-size: 14px;
 & span {
  font-size: 28px;
 }
`

const WeatherLogo = styled.img`

  width: 100px;
  height: 100px;
  margin: 50px auto;
`
const Location = styled.span`
  font-size: 28px;
  font-weight: bold;
`
const Label = styled.span`
   font-size: 14px;
   font-weight: bold;
   margin: 20px 25px 10px;
   text-align: start;
   width: 90%;

`
const WeatherInfoContainer = styled.div`
   display: flex;
   width: 90%;
   flex-direction: row;
   justify-content: space-evenly;
   align-items: center;
   flex-wrap: wrap;
`
const InfoContainer = styled.div`
   display: flex;
   margin: 5px 10px;
   flex-direction: row;
   justify-content: space-evenly;
   align-items: center;
`
const InfoIcon = styled.img`
   width: 36px;
   height: 36px;
`
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
`

const WeatherInfoComponent = (props) => {
  const { name, value } = props;

  return (
    <InfoContainer>
      <InfoIcon src={WeatherInfoIcons[name]} />
      <InfoLabel>
        {value}
        <span>{name}</span>
      </InfoLabel>
    </InfoContainer>
  )
}
const WeatherComponent = (props) => {
  const { weather } = props;
  const isDay = weather?.weather[0].icon?.includes('d');
  const getTime = (timestamp) => {
    return `${new Date(timestamp = 1000).getHours()} : ${new Date(timestamp = 1000).getMinutes()}`
  }
  return (
    <>
      <WeatherCondition>
        <Condition> <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>{`| ${weather?.weather[0].description}`}
        </Condition>
        <WeatherLogo src={WeatherIcons[weather?.weather[0].icon]} />
      </WeatherCondition>
      <Location>{`${weather?.name},${weather?.sys?.country}`}</Location>
      <Label>Weather Info</Label>
      <WeatherInfoContainer>
        <WeatherInfoComponent name={isDay ? 'sunset' : 'sunrise'} value={getTime(weather?.sys[isDay ? 'sunset' : 'sunrise'])} />
        <WeatherInfoComponent name='humidity' value={weather?.main?.humidity} />
        <WeatherInfoComponent name='wind' value={weather?.wind?.speed} />
        <WeatherInfoComponent name='pressure' value={weather?.main?.pressure} />
      </WeatherInfoContainer>
    </>
  )
}

export default WeatherComponent