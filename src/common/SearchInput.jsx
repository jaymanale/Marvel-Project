import React from 'react';

const SearchInput = ({ inputValue, onSearchInput, onClearText, searchOf }) => {
  const placeHolder = `Search ${searchOf}`;
  return (
    <React.Fragment>
      <div className="input-group">
        <input
          type="text"
          value={inputValue}
          placeholder={placeHolder}
          className="form-control"
          aria-label={placeHolder}
          onChange={onSearchInput}
        />
        <div className="input-group-append">
          <span className="btn btn-link input-group-text" onClick={onClearText}>
            X
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchInput;
