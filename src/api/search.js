export const fetchResults = (query) => {
  return window.fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=G3TGUp3a1oHM8NfYbGVFMG87Trl8h2hp&limit=65`)
        .then(response => response.json())
        .then(json => {
          return json.data.map(obj => {
            return {
              id: obj.id,
              url: obj.images.original.url
            }
          })
        })
}
