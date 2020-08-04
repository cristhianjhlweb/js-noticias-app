import { ArticlesList } from './ArticlesList'

export const filters = {
  category: '',
  country: ''
}

// obtener valor del select para implementarlo en la url
export const listChange = () => {
  document.querySelector('#categoryList').addEventListener('change', e => {
    filters.category = e.target.value
    console.log(filters.category, filters.country)
    document.querySelector("#news-container").innerHTML = ""
    ArticlesList(filters.category, filters.country)
  })
}

export const changeCountry = () => {
  document.querySelector('#countryList').addEventListener('change', e => {
    filters.country = e.target.value
    document.querySelector("#news-container").innerHTML = ""
    ArticlesList(filters.category, filters.country)
  })
}
