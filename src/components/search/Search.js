import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { searchGames } from '../actions/searchAction';
import './Search.css';

export const Search = () => {
  const [formValue, handleInputChange] = useForm({
    searchText: '',
  });
  const dispatch = useDispatch();

  const { searchText } = formValue;
  // const heroesFilter = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchGames(searchText));
  };
  return (
    <div>
      <form className="mt-5" onSubmit={handleSearch}>
        <div className="p-1 bg-dark rounded  shadow-sm mb-4">
          <div className="input-group">
            <input
              type="search"
              placeholder="Find your game"
              aria-describedby="button-addon1"
              className="form-control border-0 bg-dark"
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
              autoComplete="off"
            />
            <div className="input-group-append">
              <button
                id="button-addon1"
                type="submit"
                className="btn btn-link text-primary">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
