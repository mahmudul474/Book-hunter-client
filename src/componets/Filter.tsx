import React from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { setGenreFilter, setYearFilter } from '../redux/featured/book/bookSlice';

export default function Filter() {

    const dispatch = useAppDispatch();
    
    const {filter} = useAppSelector((state) => state.book ); // Add yearFilter
  
    const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(setGenreFilter(e.target.value));
    };
  
    const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setYearFilter(e.target.value));
    };
  return (
    <div>
    <label>Filter by Genre:</label>
    <select onChange={handleGenreChange}>
        <option value="">All Genres</option>
        <option value="Mystery">Mystery</option>
        <option value="Fantasy">Fantasy</option>
        {/* Add more genre options as needed */}
      </select>

    <label>Filter by Publication Year:</label>
    <input
      type="number"
      placeholder="Publication Year"
      onChange={handleYearChange}
      value={filter.year}
    />
  </div>
  )
}
