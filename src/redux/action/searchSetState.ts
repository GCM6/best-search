export const setIsLoading = (isLoading: boolean) => ({
    type: 'IS_LOADING',
    isLoading,
  });
export const setSearchResult = (data: unknown) => ({
  type: 'RESULT',
  data
  });
  