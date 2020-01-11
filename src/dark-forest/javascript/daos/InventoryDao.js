class InventoryDao {
  createItem(item, qty) {
    localStorage.setItem(item, qty);
    return qty;
  }

  getItem(item) {
    const qtyString = localStorage.getItem(item);
    const qty = parseInt(qtyString);
    return qty;
  }

  incrementItem(item, qty) {
    var currQty = this.getItem(item);
    var newQty = currQty + qty;
    localStorage.setItem(item, newQty);
    return newQty;
  }

  decrementItem(item, qty) {
    var currQty = this.getItem(item);
    var newQty = currQty - qty;
    localStorage.setItem(item, newQty);
    return newQty;
  }
}
