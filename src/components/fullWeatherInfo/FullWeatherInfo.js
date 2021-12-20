import './fullWeatherInfo.scss'
const info = {
  location: {
    name: 'London',
    region: 'City of London, Greater London',
    country: 'United Kingdom',
    lat: 51.52,
    lon: -0.11,
    tz_id: 'Europe/London',
    localtime_epoch: 1639840881,
    localtime: '2021-12-18 15:21',
  },
  current: {
    last_updated_epoch: 1639840500,
    last_updated: '2021-12-18 15:15',
    temp_c: 9.0,
    temp_f: 48.2,
    is_day: 1,
    condition: {
      text: 'Overcast',
      icon: '//cdn.weatherapi.com/weather/64x64/day/122.png',
      code: 1009,
    },
    wind_mph: 6.9,
    wind_kph: 11.2,
    wind_degree: 70,
    wind_dir: 'ENE',
    pressure_mb: 1038.0,
    pressure_in: 30.65,
    precip_mm: 0.0,
    precip_in: 0.0,
    humidity: 87,
    cloud: 100,
    feelslike_c: 7.2,
    feelslike_f: 44.9,
    vis_km: 10.0,
    vis_miles: 6.0,
    uv: 4.0,
    gust_mph: 8.3,
    gust_kph: 13.3,
  },
}
export default function FullWeatherInfo() {
  const body = document.querySelector('body')

  const likeButton = document.createElement('button')
  const infoDiv = document.createElement('div')
  const headerContainer = document.createElement('div')
  const container = document.createElement('div')
  const townName = document.createElement('div')
  const temp = document.createElement('div')
  const text = document.createElement('div')
  const icon = document.createElement('img')
  const wind_mph = document.createElement('div')
  const pressure_mb = document.createElement('div')
  const humidity = document.createElement('div')
  const leftDivInfo = document.createElement('div')

  AddClass(
    [
      townName,
      headerContainer,
      temp,
      text,
      wind_mph,
      container,
      pressure_mb,
      humidity,
      leftDivInfo,
      infoDiv,
      likeButton,
    ],
    [
      'town-info',
      'headerContainer',
      'temp',
      'condition',
      'info',
      'container',
      'info',
      'info',
      'left-div-info',
      'right-div-info',
      'like-button',
    ]
  )
  likeButton.innerHTML =
    '<img src="https://img.icons8.com/external-prettycons-lineal-prettycons/49/000000/external-favorite-essentials-prettycons-lineal-prettycons.png"/>'
  humidity.innerHTML =
    `<span>${info.current.humidity}%</span>` +
    '<img src="https://img.icons8.com/ios/50/000000/humidity.png"/>'
  pressure_mb.innerHTML =
    `<span>${info.current.pressure_mb}</span>` +
    '<img src="https://img.icons8.com/ios/50/000000/pressure.png"/>'
  wind_mph.innerHTML =
    `<span>${info.current.wind_mph}</span>` +
    '<img src="https://img.icons8.com/material-outlined/24/000000/wind.png"/>'
  text.innerHTML = `<span>${info.current.condition.text}</span>`
  townName.innerHTML = `<span class="Town-info-row">
   ${info.location.name},
   ${info.location.country}</span>`
  temp.innerHTML = `<span>${info.current.temp_c}°C</span>`

  setAttributes(icon, {
    src: `${info.current.condition.icon}`,
  })
  Appends(leftDivInfo, [icon])
  Appends(infoDiv, [townName, temp, text])
  Appends(headerContainer, [infoDiv, leftDivInfo, likeButton])
  Appends(container, [humidity, pressure_mb, wind_mph])
  Appends(body, [headerContainer, container])
}

function setAttributes(el, attrs) {
  for (let key in attrs) {
    el.setAttribute(key, attrs[key])
  }
}
function Appends(el, attrs) {
  for (let i = 0; i < attrs.length; i++) {
    el.appendChild(attrs[i])
  }
}
function AddClass(el, classes) {
  for (let i = 0; i < classes.length; i++) {
    el[i].classList.add(classes[i])
  }
}
