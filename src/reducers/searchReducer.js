export const searchReducer = (state = [], action) => {
  switch (action.type) {
    case 'RESET_SEARCH':
      return []
    case 'STORE_RESULTS':
      return action.urlArr
    default:
      return state
  }
}
