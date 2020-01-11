localStorage.clear();
localStorage.setItem("firewood", 0);

var BUILD_FIRE_COST = 5;
var FEED_FIRE_COST = 1;
var MAX_FIRE = 5;

function gatherFirewood() {
  addToFeed("You find some twigs nearby.");
  
  var firewoodQty = incrementItem("firewood", 1);
  var isFireLit = getItem("fire-strength") >= 1;
  if (firewoodQty == BUILD_FIRE_COST && !isFireLit) {
    enableBuildFire();
  }
}

function enableBuildFire() {
  addAction("fire-btn", "Build a fire", buildFire);
}

function buildFire() {
  addToFeed("You coax a small flame from the dry wood.");
  addToFeed("The fire flickers softly.");
  
  createItem("fire-strength", 1);
  decrementItem("firewood", BUILD_FIRE_COST);
  updateItemEl("firewood");
  addItemEl("fire-strength", 1);
  
  var fireBtn = document.querySelector("#fire-btn");
  fireBtn.innerHTML = "Feed the flames";
  fireBtn.onclick = feedFire;
}

function feedFire() {
  var firewood = getItem("firewood");
  if (firewood < FEED_FIRE_COST) {
    addToFeed("Need to find some more wood.");
    return;
  }
  
  var fireStrength = getItem("fire-strength");
  if (fireStrength == MAX_FIRE) {
    addToFeed("The flames blaze brightly.");
    return;
  }
  
  addToFeed("The flames grow stronger.");
  incrementItem("fire-strength", 1);
  decrementItem("firewood", FEED_FIRE_COST);
}

function addAction(actionId, actionText, action) {
  var campEl = document.querySelector(".camp");
  var actionBtn = document.createElement("div");
  actionBtn.id = actionId;
  actionBtn.classList.add("btn");
  actionBtn.innerHTML = actionText;
  actionBtn.onclick = action;
  campEl.append(actionBtn);
  
  var actionObj = {
    id: actionId,
    text: actionText,
    action: action
  };
  localStorage.setItem(actionId, JSON.stringify(actionObj));
}

function getAction(actionId) {
  return JSON.parse(localStorage.getItem(actionId));
}

function updateAction(actionId, actionText, action) {
  var actionBtn = document.querySelector("#" + actionId);
  actionBtn.id = actionId;
  actionBtn.classList.add("btn");
  actionBtn.innerHTML = actionText;
  actionBtn.onclick = action;
  campEl.append(actionBtn);
  
  var actionObj = {
    id: actionId,
    text: actionText,
    action: action
  };
  localStorage.setItem(actionId, JSON.stringify(actionObj));
}

function addToFeed(message) {
  var feedEl = document.querySelector(".feed-content");
  var newItem = document.createElement("div");
  newItem.classList.add("feed-item");
  newItem.innerHTML = message;
  feedEl.prepend(newItem);
}

function addItemEl(item, qty) {
  var inventoryEl = document.querySelector(".inventory-content");
  var newItem = document.createElement("div");
  newItem.id = item;
  newItem.classList.add("inventory-item");
  
  var newItemName = document.createElement("span");
  newItemName.innerHTML = caps(item.split("-").join(" "));
  newItem.append(newItemName);
  
  var newItemQty = document.createElement("span");
  newItemQty.innerHTML = qty;
  newItem.append(newItemQty);
  
  inventoryEl.append(newItem);
}

function getItemEl(item) {
  return document.querySelector("#" + item).children[1];
}

function updateItemEl(item) {
  var qty = getItem(item);
  document.querySelector("#" + item).children[1].innerHTML = qty;
}

function createItem(item, qty) {
  localStorage.setItem(item, qty);
  return qty;
}

function getItem(item) {
  return parseInt(localStorage.getItem(item));
}

function incrementItem(item, qty) {
  var currQty = getItem(item);
  var newQty = currQty + qty;
  localStorage.setItem(item, newQty);
  
  updateItemEl(item);
  return newQty;
}

function decrementItem(item, qty) {
  var currQty = getItem(item);
  var newQty = currQty - qty;
  localStorage.setItem(item, newQty);
  
  updateItemEl(item);
  return newQty;
}

function caps(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}











