import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import WeatherInfo from './WeatherInfo'
import WelcomeScreen from './WelcomeScreen'
import ErrorScreen from './ErrorScreen'
import { apiKey, BASE_URL } from '../utils/apiInfo'
import { weatherBoxStyle } from '../theme/customStyles'
import { Paper } from '@mui/material'

interface Coordinates {
  latitude: number
  longitude: number
}

const WeatherBox = () => {
  const [weatherData, setWeatherData] = useState<any>()

  // API URL
  // const apiUrl = `${BASE_URL}/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  // Fetching the Weather Data
  const fetchWeatherData = async () => {
    const location: Coordinates = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
        },
        (err) => {
          reject(err)
        },
      )
    })
    let { latitude, longitude } = location
    const apiUrl = `${BASE_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`

    try {
      const response = await fetch(apiUrl)
      const data = await response.json()
      console.log(data)
      setWeatherData(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchWeatherData();
  }, [])
  



  return (
    <Paper sx={weatherBoxStyle}>
      {/* <SearchBar
        cityName={cityName}
        setCityName={setCityName}
        getWeatherData={getWeatherData}
      /> */}

      {weatherData?.name ? (
        <WeatherInfo weatherData={weatherData} />
      ) : weatherData?.cod === '404' ? (
        <ErrorScreen weatherData={weatherData} />
      ) : (
        <WelcomeScreen />
      )}
    </Paper>
  )
}

export default WeatherBox
