export const searchReducer = (state = [], action) => {
  switch (action.type) {
    case 'STORE_RESULTS':
      return action.urlArr
    default:
      return state
  }
}