export const addFavourite = (img) => {
  return {
    type: 'ADD_FAVOURITE',
    img
  }
}

export const removeFavourite = (img) => {
  return {
    type: 'REMOVE_FAVOURITE',
    img
  }
}
