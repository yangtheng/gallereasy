export const toggleLoading = (loading) => {
  return {
    type: 'TOGGLE_LOADING',
    loading
  }
};

export const storeError = (error) => {
  return {
    type: 'STORE_ERROR',
    error
  }
};
