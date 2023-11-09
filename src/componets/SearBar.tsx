import React from 'react'
import { useAppDispatch } from '../redux/hook';
import { setSearchTerm } from '../redux/featured/book/bookSlice';

export default function SearBar() {
    const dispatch = useAppDispatch();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setSearchTerm(e.target.value));
    };
  return (
    <div> <input
    type="text"
    className='border  border-black p-3   m-auto  w-full'
    onChange={handleSearch}
    placeholder="Search by Title, Author, or Genre"
 
  />
 </div>
  )
}
