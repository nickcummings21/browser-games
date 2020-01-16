const BUILD_FIRE_WOOD_COST = 5;
const BUILD_FIRE_ROCKS_COST = 2;
const FEED_FIRE_COST = 1;
const MAX_FIRE = 5;

const CRAFT_POINTY_STICK_COST = 1;

function gatherWood() {
  addToFeed("You find some sticks and twigs nearby.");

  const woodQty = inventory.incrementItem("wood", 1);
  const rocksQty = inventory.getItemQty("rocks");
  const isFireLit = inventory.getItemQty("fire-strength") >= 1;
  if (
    woodQty == BUILD_FIRE_WOOD_COST &&
    rocksQty == BUILD_FIRE_ROCKS_COST &&
    !isFireLit
  ) {
    enableBuildFire();
  }

  const pointyStickQty = inventory.getItemQty("pointy-stick");
  if (isFireLit && rocksQty > 0 && !pointyStickQty && pointyStickQty != 0) {
    enableCraftPointyStick();
  }
}

function gatherRocks() {
  addToFeed("You find some rocks lying around.");

  const rocksQty = inventory.incrementItem("rocks", 1);
  const woodQty = inventory.getItemQty("wood");
  const isFireLit = inventory.getItemQty("fire-strength") >= 1;
  if (
    woodQty == BUILD_FIRE_WOOD_COST &&
    rocksQty == BUILD_FIRE_ROCKS_COST &&
    !isFireLit
  ) {
    enableBuildFire();
  }

  const pointyStickQty = inventory.getItemQty("pointy-stick");
  if (isFireLit && woodQty > 0 && !pointyStickQty && pointyStickQty != 0) {
    enableCraftPointyStick();
  }
}

function enableBuildFire() {
  actions.addAction("fire-btn", "Build a fire", buildFire, "actions");
}

function buildFire() {
  addToFeed("You coax a small flame from the dry wood.");
  addToFeed("The fire flickers softly.");

  inventory.addItem("fire-strength", 1);
  inventory.decrementItem("wood", BUILD_FIRE_WOOD_COST);
  inventory.decrementItem("rocks", BUILD_FIRE_ROCKS_COST);

  const fireBtn = document.querySelector("#fire-btn");
  fireBtn.innerHTML = "Feed the flames";
  fireBtn.onclick = feedFire;
}

function feedFire() {
  const wood = inventory.getItemQty("wood");
  if (wood < FEED_FIRE_COST) {
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

function enableCraftPointyStick() {
  actions.addAction(
    "craft-pointy-stick",
    "Craft pointy stick",
    craftPointyStick,
    "crafting"
  );
  inventory.addItem("pointy-sticks", 0);
}

function craftPointyStick() {
  const rocksQty = inventory.getItemQty("rocks");
  const woodQty = inventory.getItemQty("wood");
  if (woodQty < CRAFT_POINTY_STICK_COST) {
    addToFeed("Need to find a stick to sharpen.");
    return;
  }
  if (rocksQty == 0) {
    addToFeed("Need to find something to sharpen your stick.");
    return;
  }
  addToFeed(
    "You sharpened one of your sticks with a rock. It's better then nothing."
  );

  inventory.decrementItem("wood", CRAFT_POINTY_STICK_COST);
  inventory.incrementItem("pointy-sticks", 1);

  const animalGutsQty = inventory.getItemQty("animal-guts");
  if (!animalGutsQty && animalGutsQty != 0) {
    enableGoHunting();
  }
}

function enableGoHunting() {
  actions.addAction("go-hunting", "Go hunting", goHunting, "actions");
  inventory.addItem("animal-guts", 0);
  inventory.addItem("furs", 0);
  inventory.addItem("bones", 0);
  inventory.addItem("meat", 0);
}

function goHunting() {
  const pointyStickQty = inventory.getItemQty("pointy-sticks");
  if (pointyStickQty == 0) {
    addToFeed("Can't hunt much with just your bare hands.");
  }
  addToFeed("The forest is silent and empty. You go home empty-handed.");
}
