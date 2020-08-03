import { truncateText } from './helpers'

export const ArticlesList = async (container) => {
  const API_KEY = "fdeb4a9a31ba43a894d35f25abf9b7e9"
	const URL = `https://newsapi.org/v2/top-headlines?country=ve&apiKey=${API_KEY}`
  const request = await fetch(URL)
  const response = await request.json()
  const articlesArray = response.articles
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
      return container.innerHTML += listArticle
    })
}