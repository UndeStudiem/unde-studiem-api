import React from 'react';
import './Search.scss';
import CardItem from '../Card/CardItem'
import Button from '@material-ui/core/Button';
import SearchMenu from './SearchMenu'



function Search(props) {

  return (
    <div className="Search">


      <SearchMenu/>

    </div>
  );
  
}

export default Search;
