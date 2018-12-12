'use strict'
/* global shoppingList, global api, cuid */

// eslint-disable-next-line no-unused-vars
const store = (function(){
  const items = [];
  let hideCheckedItems = false;
  let searchTerm = '';
  function findAndUpdate(id, newData){
    return Object.assign(this.items.find(function(element){
      return element.id === id;
    }), newData);
  }
  return {
    items,
    hideCheckedItems,
    searchTerm,
    findAndUpdate
  };
}());

$(document).ready(function() {
  api.getItems((items) => {
    items.forEach((item) => shoppingList.addItem(item));
    shoppingList.render();
  });
  shoppingList.bindEventListeners();
  shoppingList.render();
});

