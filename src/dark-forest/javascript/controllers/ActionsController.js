class ActionsController {
  disabledActions = new Set([]);

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

  disableAction(actionId, coolDown) {
    const actionBtn = document.querySelector("#" + actionId);
    actionBtn.classList.add("disabled");
    actionBtn.setAttribute("data-cooldown", coolDown);
    this.disabledActions.add({ btn: actionBtn, coolDownEnd: time + coolDown });
  }

  enableAction(actionId) {
    const actionBtn = document.querySelector("#" + actionId);
    actionBtn.classList.remove("disabled");
  }

  refreshAction(actionBtn) {
    actionBtn.classList.remove("disabled");
    this.disabledActions.delete(actionBtn);
  }

  refreshActions() {
    this.disabledActions.forEach(action => {
      action.coolDownEnd == time
        ? this.refreshAction(action.btn)
        : action.btn.setAttribute("data-cooldown", action.coolDownEnd - time);
    });
  }
}
