import Cookies from 'js-cookie'

const cityKey = 'city'
const adcodeKey = 'adcode'

export function getCity() {
  return Cookies.get(cityKey)
}

export function setCity(city) {
  return Cookies.set(cityKey, city)
}

export function getAdcode() {
  return Cookies.get(adcodeKey)
}

export function setAdcode(adcode) {
  return Cookies.set(adcodeKey, adcode)
}


