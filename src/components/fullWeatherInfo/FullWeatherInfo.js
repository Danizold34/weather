import './fullWeatherInfo.scss'

export default function FullWeatherInfo(info) {
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
