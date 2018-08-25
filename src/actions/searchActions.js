export const resetSearch = () => {
  return {
    type: 'RESET_SEARCH'
  }
}

export const storeResults = (urlArr) => {
  return {
    type: 'STORE_RESULTS',
    urlArr
  }
}
