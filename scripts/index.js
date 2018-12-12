'use strict'
/* global shoppingList, global api, cuid */

// eslint-disable-next-line no-unused-vars
const store = {
  items: [],
  hideCheckedItems: false,
  searchTerm: ''
};

$(document).ready(function() {
  api.getItems((items) => {
    items.forEach((item) => shoppingList.addItem(item));
    shoppingList.render();
  });
  shoppingList.bindEventListeners();
  shoppingList.render();
});

