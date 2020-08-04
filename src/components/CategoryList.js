
const categories = [
      { "value": "business", "label": "Negocios", "icon": "fas fa-briefcase" },
      { "value": "entertainment", "label": "Entretenimiento", "icon": "fas fa-glasses" },
      { "value": "general", "label": "General", "icon": "fas fa-globe" },
      { "value": "health", "label": "Salud", "icon": "fas fa-heartbeat" },
      { "value": "science", "label": "Ciencia", "icon": "fas fa-vials" },
      { "value": "sports", "label": "Deportes", "icon": "far fa-futbol" },
      { "value": "technology", "label": "Tecnología", "icon": "fas fa-microchip" }
]


const countrys = [
  { "value": "ve", "label": "Venezuela" },
  { "value": "ar", "label": "Argentina" },
  { "value": "br", "label": "Brasil" },
  { "value": "co", "label": "Colombia" },
  { "value": "cu", "label": "Cuba" },
  { "value": "ch", "label": "China" },
  { "value": "jp", "label": "Japan" },
  { "value": "mx", "label": "Mexico" },
  { "value": "us", "label": "Estados Unidos" },
  { "value": "gb", "label": "Reino Unido" },
]

export const CategoryList = () => {
  categories.forEach((cat) => {
    const listCategory = `
      <option value="${cat.value}">${cat.label}</option>
    `
    const template = document.querySelector("#categoryList").innerHTML += listCategory 
		return template
  })
}

export const CountryList = () => {
  countrys.forEach((ct) => {
    const listCountry = `
      <option value="${ct.value}">${ct.label}</option>
    `
    const template = document.querySelector("#countryList").innerHTML += listCountry 
		return template
  })
}