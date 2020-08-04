import { CategoryList, CountryList } from './components/CategoryList'
import { ArticlesList } from './components/ArticlesList'
import { listChange, changeCountry, filters } from './components/EventsChange'


import './sass/main.scss'

document.addEventListener("DOMContentLoaded", () => {

  filters
  CategoryList()
  CountryList()
  ArticlesList('sports', 've')
  listChange()
  changeCountry()
})
