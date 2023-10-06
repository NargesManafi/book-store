// useSearch.js
import { useEffect, useRef, useState } from 'react';

function useSearch(data) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const searchResultsRef = useRef(null);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setShowResults(false);
      return;
    }

    const results = data.reduce((acc, currentList) => {
      const filteredBooks = currentList.books.filter((book) =>
        book.title.includes(searchQuery)
      );
      if (filteredBooks.length > 0) {
        acc.push(...filteredBooks);
      }
      return acc;
    }, []);

    setSearchResults(results);
    setShowResults(true);
  }, [searchQuery]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchQuery(inputValue);
  };

  const handleCloseResults = () => {
    setShowResults(false);
  };

  const handleDropdownClick = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showResults && searchResultsRef.current && !searchResultsRef.current.contains(e.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showResults]);

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    showResults,
    isDropdownOpen,
    handleInputChange,
    handleCloseResults,
    handleDropdownClick,
    searchResultsRef,
  };
}

export default useSearch;
