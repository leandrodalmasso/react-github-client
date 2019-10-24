// Dependencies
import { useEffect, useState } from 'react';

export function useSearch(searchAction, searchResetAction, resultsArray) {
  const [keyword, setKeyword] = useState('');

  function handleUserSearch() {
    if (keyword && (keyword.length >= 3)) {
      searchAction(keyword);
    } else {
      if (resultsArray.length) searchResetAction();
    }
  }
  useEffect(handleUserSearch, [keyword]);

  function handleClear() {
    searchResetAction();
    setKeyword('');
  }

  return [keyword, setKeyword, handleClear];
}