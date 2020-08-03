import { CategoryList } from './components/CategoryList'
import { ArticlesList } from './components/ArticlesList'

import './sass/main.scss'

document.addEventListener("DOMContentLoaded", () => {
  CategoryList( document.querySelector("#category-form") )
	ArticlesList( document.querySelector("#news-container") )
})