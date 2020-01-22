function addToFeed(message) {
  var feedEl = document.querySelector(".feed-content");
  var newItem = document.createElement("div");
  newItem.classList.add("feed-item");
  newItem.innerHTML = message;
  feedEl.prepend(newItem);
}

const caps = text => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const randomInt = (minimum, maximum) => {
  if (maximum === undefined) {
    maximum = minimum;
    minimum = 0;
  }

  if (typeof minimum !== "number" || typeof maximum !== "number") {
    throw new TypeError("Expected all arguments to be numbers");
  }

  return Math.floor(Math.random() * (maximum - minimum + 1) + minimum);
};
