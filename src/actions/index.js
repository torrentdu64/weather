import axios from 'axios';


const API_KEY = 'c632991d3940903768ddbe468969a101';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city) {
  const url = `${ROOT_URL}&q=${city},fr`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
    };
}


