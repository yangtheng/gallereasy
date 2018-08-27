export const statusReducer = (state = {
  loading: false,
  error: ''
}, action) => {
  switch (action.type) {
    case 'TOGGLE_LOADING':
      return {
        ...state,
        ...{
          loading: action.loading
        }
      }
    case 'STORE_ERROR':
      return {
        ...state,
        ...{
          error: action.error
        }
      }
    default:
      return state
  }
}
