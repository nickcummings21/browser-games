const actions = new ActionsController();
const inventory = new InventoryController();

localStorage.clear();

inventory.addItem("wood", 0);
actions.addAction("gather-wood", "Gather wood", gatherWood, "actions");
inventory.addItem("rocks", 0);
actions.addAction("gather-rocks", "Gather rocks", gatherRocks, "actions");

let time = 0;
const mainTimer = async () => {
  // addToFeed("Time: " + time + "s");
  time += 1;
  actions.refreshActions();
  setTimeout(mainTimer, 1000);
}

mainTimer();
