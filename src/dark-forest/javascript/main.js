const actions = new ActionsController(document);

localStorage.clear();
localStorage.setItem("firewood", 0);

const BUILD_FIRE_COST = 5;
const FEED_FIRE_COST = 1;
const MAX_FIRE = 5;

actions.addAction("gather-firewood", "Gather Firewood", gatherFirewood);

function addToFeed(message) {
  var feedEl = document.querySelector(".feed-content");
  var newItem = document.createElement("div");
  newItem.classList.add("feed-item");
  newItem.innerHTML = message;
  feedEl.prepend(newItem);
}

// function addItemEl(item, qty) {
//   var inventoryEl = document.querySelector(".inventory-content");
//   var newItem = document.createElement("div");
//   newItem.id = item;
//   newItem.classList.add("inventory-item");

//   var newItemName = document.createElement("span");
//   newItemName.innerHTML = caps(item.split("-").join(" "));
//   newItem.append(newItemName);

//   var newItemQty = document.createElement("span");
//   newItemQty.innerHTML = qty;
//   newItem.append(newItemQty);

//   inventoryEl.append(newItem);
// }

// function getItemEl(item) {
//   return document.querySelector("#" + item).children[1];
// }

// function updateItemEl(item) {
//   var qty = getItem(item);
//   document.querySelector("#" + item).children[1].innerHTML = qty;
// }

// function createItem(item, qty) {
//   localStorage.setItem(item, qty);
//   return qty;
// }

// function getItem(item) {
//   const qtyString = localStorage.getItem(item);
//   const qty = parseInt(qtyString);
//   return qty;
// }

// function incrementItem(item, qty) {
//   var currQty = getItem(item);
//   var newQty = currQty + qty;
//   localStorage.setItem(item, newQty);

//   updateItemEl(item);
//   return newQty;
// }

// function decrementItem(item, qty) {
//   var currQty = getItem(item);
//   var newQty = currQty - qty;
//   localStorage.setItem(item, newQty);

//   updateItemEl(item);
//   return newQty;
// }
