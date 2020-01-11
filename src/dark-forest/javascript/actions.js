const invntCtrl = new InventoryController();

function gatherFirewood() {
  addToFeed("You find some twigs nearby.");

  var firewoodQty = invntCtrl.incrementItem("firewood", 1);
  var isFireLit = invntCtrl.getItemQty("fire-strength") >= 1;
  if (firewoodQty == BUILD_FIRE_COST && !isFireLit) {
    enableBuildFire();
  }
}

function enableBuildFire() {
  actions.addAction("fire-btn", "Build a fire", buildFire);
}

function buildFire() {
  addToFeed("You coax a small flame from the dry wood.");
  addToFeed("The fire flickers softly.");

  invntCtrl.addItem("fire-strength", 1);
  invntCtrl.decrementItem("firewood", BUILD_FIRE_COST);

  var fireBtn = document.querySelector("#fire-btn");
  fireBtn.innerHTML = "Feed the flames";
  fireBtn.onclick = feedFire;
}

function feedFire() {
  var firewood = invntCtrl.getItemQty("firewood");
  if (firewood < FEED_FIRE_COST) {
    addToFeed("Need to find some more wood.");
    return;
  }

  var fireStrength = invntCtrl.getItemQty("fire-strength");
  if (fireStrength == MAX_FIRE) {
    addToFeed("The flames blaze brightly.");
    return;
  }

  addToFeed("The flames grow stronger.");
  invntCtrl.incrementItem("fire-strength", 1);
  invntCtrl.decrementItem("firewood", FEED_FIRE_COST);
}
