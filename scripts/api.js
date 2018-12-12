'use strict';
/* global */

const api =(function(){
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/nicknotJ';
  
  function getItems(callback){
    $.getJSON(`${BASE_URL}/items`, callback);
  }
  
  function createItem(name, callback){
    const newItem = JSON.stringify({name: name});
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callback
    });
  }

  return {
    BASE_URL,
    getItems,
    createItem
  };
}());

