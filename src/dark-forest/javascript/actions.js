function gatherWood() {
  addToFeed("You find some sticks and twigs nearby.");

  const woodQty = inventory.incrementItem("wood", 1);
  const rocksQty = inventory.getItemQty("rocks");
  const isFireLit = inventory.getItemQty("fire-strength") >= 1;
  if (
    woodQty >= BUILD_FIRE_WOOD_COST &&
    rocksQty >= BUILD_FIRE_ROCKS_COST &&
    !isFireLit
  ) {
    enableBuildFire();
  }

  const pointyStickQty = inventory.getItemQty("pointy-stick");
  if (isFireLit && rocksQty > 0 && !pointyStickQty && pointyStickQty != 0) {
    enableCraftPointyStick();
  }

  actions.disableAction("gather-wood", GATHER_WOOD_COOLDOWN);
}

function gatherRocks() {
  addToFeed("You find some rocks lying around.");

  const rocksQty = inventory.incrementItem("rocks", 1);
  const woodQty = inventory.getItemQty("wood");
  const isFireLit = inventory.getItemQty("fire-strength") >= 1;
  if (
    woodQty >= BUILD_FIRE_WOOD_COST &&
    rocksQty >= BUILD_FIRE_ROCKS_COST &&
    !isFireLit
  ) {
    enableBuildFire();
  }

  const pointyStickQty = inventory.getItemQty("pointy-stick");
  if (isFireLit && woodQty > 0 && !pointyStickQty && pointyStickQty != 0) {
    enableCraftPointyStick();
  }
  
  actions.disableAction("gather-rocks", GATHER_ROCKS_COOLDOWN);
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
  
  actions.disableAction("fire-btn", FIRE_COOLDOWN);
}

function enableCraftPointyStick() {
  actions.addAction(
    "craft-pointy-stick",
    "Craft pointy stick",
    craftPointyStick,
    "crafting"
  );
  inventory.addItem("pointy-sticks", 0, "tool");
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

  actions.disableAction("craft-pointy-stick", CRAFT_POINTY_STICK_COOLDOWN);
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
  if (pointyStickQty <= 0) {
    addToFeed("Can't hunt much with just your bare hands.");
    return;
  }

  let rand = randomInt(100);
  if (rand < 90) {
    if (rand < 20) {
      huntDeer();
    }
    else if (rand < 50) {
      huntRabbit();
    }
    else {
      huntSquirrel();
    }
  }
  else {
    addToFeed("The forest is silent and empty. You go home empty-handed.");
  }
  
  rand = randomInt(100);
  if (rand < 50) {
    breakPointyStick();
  }

  actions.disableAction("go-hunting", GO_HUNTING_COOLDOWN);
}

function huntDeer() {
  addToFeed("You kill a deer.");
  inventory.incrementItem("animal-guts", 10);
  inventory.incrementItem("furs", 3);
  inventory.incrementItem("bones", 5);
  inventory.incrementItem("meat", 3);
}

function huntRabbit() {
  addToFeed("You kill a rabbit.");
  inventory.incrementItem("animal-guts", 2);
  inventory.incrementItem("furs", 1);
  inventory.incrementItem("bones", 1);
  inventory.incrementItem("meat", 1);
}

function huntSquirrel() {
  addToFeed("You kill a squirrel.");
  inventory.incrementItem("animal-guts", 1);
  inventory.incrementItem("furs", 1);
  inventory.incrementItem("bones", 0);
  inventory.incrementItem("meat", 1);
}

function breakPointyStick() {
  addToFeed("You break a pointy stick while hunting.");
  inventory.decrementItem("pointy-sticks", 1);
}
