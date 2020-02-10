class InventoryController {
  constructor() {
    this.dao = new InventoryDao();
  }

  addItem(item, qty, type) {
    const checkQty = this.getItemQty(item);
    if (checkQty || checkQty == 0) {
      return;
    }

    if (type == undefined) type = "resource";

    this.dao.createItem(item, qty);

    const inventoryEl =
      type === "resource"
        ? document.querySelector(".inventory-resources")
        : document.querySelector(".inventory-tools");

    const newItem = document.createElement("div");
    newItem.id = item;
    newItem.classList.add("inventory-item");

    const newItemName = document.createElement("span");
    newItemName.innerHTML = caps(item.split("-").join(" "));
    newItem.append(newItemName);

    const newItemQty = document.createElement("span");
    newItemQty.innerHTML = qty;
    newItem.append(newItemQty);

    item === "fire-strength"
      ? inventoryEl.children[0].after(newItem)
      : inventoryEl.append(newItem);
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
