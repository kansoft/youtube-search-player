import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './SearchBar.css';
import Logo from '../../assets/images/youtube-logo.svg';
import useDebounce from '../../hooks/useDebounce';
import { searchRequested } from '../../store/actions';

const SearchBar = ({ searchRequested }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const onChangeInputHandle = e => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchRequested(searchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="container">
      <div>
        <img src={Logo} className="logo" alt="Logo" />
      </div>
      <div className="search">
        <input
          className="search-input"
          value={searchTerm}
          onChange={onChangeInputHandle}
          type="text"
          id="search"
          name="search"
        />
      </div>
    </div>
  );
};
const mapDispatchToProps = {
  searchRequested,
};
export default connect(null, mapDispatchToProps)(SearchBar);
