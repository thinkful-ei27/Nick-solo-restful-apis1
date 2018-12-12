'use strict';
/* global */

const api =(function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/nicknotJ';
  
  function getItems(callback){
    callback('api module works!');
  }

  return {
    BASE_URL,
    getItems
  };
}());

