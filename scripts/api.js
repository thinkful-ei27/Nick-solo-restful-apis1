'use strict';
/* global */

const api =(function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/nicknotJ';
  
  function getItems(callback){
    $.getJSON(`${BASE_URL}/items`, callback);
  }

  return {
    BASE_URL,
    getItems
  };
}());

