export const searchReducer = (state = {
  imgArr: [],
  displayCount: 0,
  query: ''
}, action) => {
  switch (action.type) {
    case 'RESET_SEARCH':
      return {...state, ...{ imgArr: [], displayCount: 0 }}
    case 'UPDATE_QUERY':
      return {...state, ...{ query: action.query }}
    case 'STORE_RESULTS':
      return {...state, ...{ imgArr: action.imgArr }}
    case 'CHANGE_DISPLAY_COUNT':
      return {...state, ...{ displayCount: action.displayCount }}
    default:
      return state
  }
}
