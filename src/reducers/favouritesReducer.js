export const favouritesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVOURITE':
      return [
        ...state,
        action.img
      ]
    case 'REMOVE_FAVOURITE':
      return state.filter(img => img.id !== action.img.id)
    default:
      return state
  }
}
