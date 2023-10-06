import { FaAngleDown, FaSearch } from 'react-icons/fa';

import React from 'react';
import data from '../../data/data.json';
import useSearch from '../../Hook/useSearch';

const Search = () => {
  const {
    searchQuery,
    searchResults,
    showResults,
    isDropdownOpen,
    handleInputChange,
    searchResultsRef,
  } = useSearch(data);


  return (
    <div className="container mt-4 mb-2" style={{ position: 'relative' }}>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 col-12 d-flex justify-content-center">
          <div className="input-group" style={{ maxWidth: '450px' }}>
            <input
              type="text"
              className="form-control  rounded rounded-10"
              placeholder="جستجو کتاب به فارسی"
              value={searchQuery}
              onChange={handleInputChange}
            />
            <div className="input-group-append">
              <button className="btn" type="button">
                <span className="text-secondary small">کتاب</span>
                <FaAngleDown className="gray-icon" />
              </button>
              {isDropdownOpen && (
                <div className="dropdown-content">
                </div>
              )}
              <button className="btn btn-success" type="button">
                <FaSearch className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {showResults && (
        <div ref={searchResultsRef} style={{ cursor: 'pointer', position: 'absolute', zIndex: '5', top: '100%', left: '0', width: "100%", maxHeight: '450px', overflowY: 'auto', background: 'rgba(128, 128, 128, 0.5)' }}>
          {searchResults.map((book) => (
            <div key={book.id}>
              <h5>{book.title}</h5>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
