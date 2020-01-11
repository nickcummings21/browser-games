const BUILD_FIRE_COST = 5;
const FEED_FIRE_COST = 1;
const MAX_FIRE = 5;

function gatherWood() {
  addToFeed("You find some twigs nearby.");

  const woodQty = inventory.incrementItem("wood", 1);
  const isFireLit = inventory.getItemQty("fire-strength") >= 1;
  if (woodQty == BUILD_FIRE_COST && !isFireLit) {
    enableBuildFire();
  }
}

function enableBuildFire() {
  actions.addAction("fire-btn", "Build a fire", buildFire);
}

function buildFire() {
  addToFeed("You coax a small flame from the dry wood.");
  addToFeed("The fire flickers softly.");

  inventory.addItem("fire-strength", 1);
  inventory.decrementItem("wood", BUILD_FIRE_COST);

  const fireBtn = document.querySelector("#fire-btn");
  fireBtn.innerHTML = "Feed the flames";
  fireBtn.onclick = feedFire;
}

function feedFire() {
  const firewood = inventory.getItemQty("wood");
  if (firewood < FEED_FIRE_COST) {
    addToFeed("Need to find some more wood.");
    return;
  }

  const fireStrength = inventory.getItemQty("fire-strength");
  if (fireStrength == MAX_FIRE) {
    addToFeed("The flames blaze brightly.");
    return;
  }

  addToFeed("The flames grow stronger.");
  inventory.incrementItem("fire-strength", 1);
  inventory.decrementItem("wood", FEED_FIRE_COST);
}
