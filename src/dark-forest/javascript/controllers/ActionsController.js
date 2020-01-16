class ActionsController {
  constructor(document) {
    this.document = document;
  }

  addAction(actionId, actionText, action, actionArea) {
    let actionBtn = document.querySelector("#" + actionId);
    if (actionBtn) {
      return;
    }

    const campEl = document.querySelector("." + actionArea);
    actionBtn = document.createElement("div");
    actionBtn.id = actionId;
    actionBtn.classList.add("btn");
    actionBtn.innerHTML = actionText;
    actionBtn.onclick = action;
    campEl.append(actionBtn);

    var actionObj = {
      id: actionId,
      text: actionText,
      action: action
    };
    localStorage.setItem(actionId, JSON.stringify(actionObj));
  }

  getAction(actionId) {
    return JSON.parse(localStorage.getItem(actionId));
  }

  updateAction(actionId, actionText, action) {
    var actionBtn = document.querySelector("#" + actionId);
    actionBtn.id = actionId;
    actionBtn.classList.add("btn");
    actionBtn.innerHTML = actionText;
    actionBtn.onclick = action;
    campEl.append(actionBtn);

    var actionObj = {
      id: actionId,
      text: actionText,
      action: action
    };
    localStorage.setItem(actionId, JSON.stringify(actionObj));
  }
}
