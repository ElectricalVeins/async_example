function requstToAPI(path) {
  return fetch(`https://api.artic.edu/api/v1/${path}`).then((data) => data.json())
}

export const fetchCats = () => requstToAPI('artworks/search?q=cats')
export const fetchDogs = () => requstToAPI('artworks/search?q=dogs')
