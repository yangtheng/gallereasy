export const addFavourite = (url) => {
  return {
    type: 'ADD_FAVOURITE',
    url
  }
}

export const removeFavourite = (url) => {
  return {
    type: 'REMOVE_FAVOURITE',
    url
  }
}
