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

export const storeResults = (imgArr) => {
  return {
    type: 'STORE_RESULTS',
    imgArr
  }
}

export const changeDisplayCount = (displayCount) => {
  return {
    type: 'CHANGE_DISPLAY_COUNT',
    displayCount
  }
}
