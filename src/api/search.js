export const fetchResults = (query) => {
  return window.fetch(`${process.env.REACT_APP_GIPHY_API_URL}/v1/gifs/search?q=${query}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=65`)
        .then(response => {
          if (response.ok) return response.json()
          else throw new Error(response.statusText)
        })
        .then(json => {
          return json.data.map(obj => {
            return {
              id: obj.id,
              url: obj.images.original.url
            }
          })
        })
}
