export const resetSearch = () => {
  return {
    type: 'RESET_SEARCH'
  }
}

export const updateQuery = (query) => {
  return {
    type: 'UPDATE_QUERY',
    query
  }
}

export const storeResults = (urlArr) => {
  return {
    type: 'STORE_RESULTS',
    urlArr
  }
}

export const changeDisplayCount = (displayCount) => {
  return {
    type: 'CHANGE_DISPLAY_COUNT',
    displayCount
  }
}
