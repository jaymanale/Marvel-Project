import React from 'react';

const SearchInput = ({ onSearchInput, searchOf }) => {
  const placeHolder = `Search ${searchOf}`;
  return (
    <React.Fragment>
      <div className="input-group">
        <input
          type="text"
          placeholder={placeHolder}
          className="form-control"
          aria-label={placeHolder}
          onChange={onSearchInput}
        />
        <div className="input-group-append">
          <span className="btn btn-link input-group-text" id="basic-addon2">
            X
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SearchInput;
