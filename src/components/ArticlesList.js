import { truncateText } from './helpers'
import { ShowError } from './ShowError'

export const ArticlesList = async (category, country) => {
  const API_KEY = "fdeb4a9a31ba43a894d35f25abf9b7e9"
	const URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&q=&pageSize=4&apiKey=${API_KEY}`
	console.log(URL)
  const request = await fetch(URL)
	const response = await request.json()
	const status = await response.status
	const articlesArray = response.articles
	if(status === 'error' || articlesArray.length === 0) {
		ShowError('Hubo un error en la consulta, por favor intetar nuevamente.', 'block')
	} else {
		ShowError('', 'none')
		articlesArray.forEach((article) => {
			const listArticle = `
				<div class="news-card">
					<div class="news-image">
						<img
							src="${article.urlToImage}"
							alt="${article.title}"
							title="${article.title}"
						/>
					</div>
					<div class="news-content">
						<div class="header-content">
							<p class="source">Fuente: <span>${article.source.name}</span></p>
							<p class="author">Autor: <span>${article.author}</span></p>
						</div>
						<h4 class="title" title="${article.title}">${truncateText(article.title, 30)}</h4>
						<p class="description">${truncateText(article.description, 150)}</p>
						<a href="${article.url}" target="_blank" rel="noopener noreferrer" title="${article.title}" class="article-link">Leer Articulo Completo</a>
					</div>
				</div>
					`
				document.querySelector("#news-container").innerHTML += listArticle
			})
	}
}
