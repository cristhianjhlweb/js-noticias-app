
const categories = [
      { "value": "business", "label": "Negocios", "icon": "fas fa-briefcase" },
      { "value": "entertainment", "label": "Entretenimiento", "icon": "fas fa-glasses" },
      { "value": "general", "label": "General", "icon": "fas fa-globe" },
      { "value": "health", "label": "Salud", "icon": "fas fa-heartbeat" },
      { "value": "science", "label": "Ciencia", "icon": "fas fa-vials" },
      { "value": "sports", "label": "Deportes", "icon": "far fa-futbol" },
      { "value": "technology", "label": "Tecnología", "icon": "fas fa-microchip" }
]

export const CategoryList = (container) => {
  categories.forEach((cat) => {
    const listCategory = `
			<div class="form-group">
					<input type="radio" name="category" id="${cat.value}" value="${cat.value}">
					<label for="${cat.value}"><i class="icon ${cat.icon}"></i> ${cat.label}</label>
			</div>
    `
    const template = container.innerHTML += listCategory 
		return template
  })
}