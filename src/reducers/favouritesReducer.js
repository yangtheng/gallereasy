export const favouritesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVOURITE':
      return [
        ...state,
        action.url
      ]
    case 'REMOVE_FAVOURITE':
      return state.filter(url => url !== action.url)
    default:
      return state
  }
}
