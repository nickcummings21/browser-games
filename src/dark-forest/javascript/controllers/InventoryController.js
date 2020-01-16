class InventoryController {
  constructor() {
    this.dao = new InventoryDao();
  }

  addItem(item, qty) {
    const checkQty = this.getItemQty(item);
    if (checkQty || checkQty == 0) {
      return;
    }

    this.dao.createItem(item, qty);

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

  getItemQty(item) {
    return this.dao.getItem(item);
  }

  getItemEl(item) {
    return document.querySelector("#" + item).children[1];
  }

  incrementItem(item, qty) {
    const newQty = this.dao.incrementItem(item, qty);
    this.updateItemEl(item);
    return newQty;
  }

  decrementItem(item, qty) {
    const newQty = this.dao.decrementItem(item, qty);
    this.updateItemEl(item);
    return newQty;
  }

  updateItemEl(item) {
    const qty = this.dao.getItem(item);
    document.querySelector("#" + item).children[1].innerHTML = qty;
  }
}
