export const toggleLoading = () => {
  return {
    type: 'TOGGLE_LOADING'
  }
};

export const storeError = (error) => {
  return {
    type: 'STORE_ERROR',
    error
  }
};
