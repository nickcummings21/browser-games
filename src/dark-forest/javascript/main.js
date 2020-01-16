const actions = new ActionsController();
const inventory = new InventoryController();

localStorage.clear();

inventory.addItem("wood", 0);
actions.addAction("gather-wood", "Gather wood", gatherWood, "actions");
inventory.addItem("rocks", 0);
actions.addAction("gather-rocks", "Gather rocks", gatherRocks, "actions");

function addToFeed(message) {
  var feedEl = document.querySelector(".feed-content");
  var newItem = document.createElement("div");
  newItem.classList.add("feed-item");
  newItem.innerHTML = message;
  feedEl.prepend(newItem);
}
