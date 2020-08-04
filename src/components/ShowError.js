export const ShowError = (mensaje, display) => {
  const div = document.createElement('div')
  div.classList.add('alert', 'error', `d-${display}`)
  div.textContent = mensaje
  document.querySelector("#news-container").appendChild(div)
}