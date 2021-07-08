import React, {useState} from 'react';
import './TodoFind.css'
import {RiSearchLine} from "react-icons/all";

const TodoFind = (props) => {
  let txtInput = '';

  const findHandler = (val) => {
      props.setSearchInput(txtInput);
  };

  const getData = (val) => {
      txtInput = val.target.value;
  };

  return(
      <div className='headerBlock'>
          <h1 className='titleStyle'>Todo list</h1>
          <div className='searchContainer'>
            <input
                className='inputSearch'
                type='text'
                placeholder='Search todo item'
                onChange={getData}
            />
            <button className='findButton' onClick={findHandler}>
                <RiSearchLine className='searchIcon' />
            </button>
          </div>
      </div>
  )
};

export default TodoFind;