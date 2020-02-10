new Vue({
  el: "#app",
  data: {
    showPrompt: false,
    showActions: true,
    currSituationId: 0
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
    },
    startStory: function(event) {
      console.log("STARTING STORY");
      document.querySelector("#prompt").classList.remove("hidden");
      this.nextSituation(0);
    },
    nextSituation: function(actionId) {
      this.currSituationId = actions[actionId].resultingSituation;
      const currSituation = situations[this.currSituationId];

      const promptEl = document.querySelector("#prompt");
      promptEl.innerHTML = prompts[currSituation.promptId];

      const actionsEl = document.querySelector("#actions");
      actionsEl.innerHTML = "";
      for (let i = 0; i < currSituation.actions.length; i++) {
        const actionId = currSituation.actions[i];
        const action = actions[actionId];

        const actionEl = document.createElement("div");
        actionEl.classList.add("action");
        actionEl.innerHTML = action.text;
        actionEl.onclick = () => this.nextSituation(actionId);

        actionsEl.appendChild(actionEl);
      }
    }
  }
});

const situations = {
  1: {
    promptId: 1,
    actions: [1, 2, 3]
  },
  2: {
    promptId: 2,
    actions: [4, 5]
  },
  3: {
    promptId: 3,
    actions: [4, 5]
  },
  4: {
    promptId: 4,
    actions: [4, 5]
  }
}

const prompts = {
  1: "You're driving down a back road through the woods at night when suddenly your car breaks down. What do you do?",
  2: "You stumble through the dark for a while and eventually see a light ahead through the trees.",
  3: "You sit there quietly for a while contemplating your predicament. Suddenly, you hear a twig snap outside.",
  4: "You quickly try to dial 911, but there's no signal..."
}

const actions = {
  0: {
    text: "Start Story",
    resultingSituation: 1
  },
  1: {
    text: "Go for help",
    resultingSituation: 2
  },
  2: {
    text: "Sit in the car",
    resultingSituation: 3
  },
  3: {
    text: "Call 911",
    resultingSituation: 4
  },
  4: {
    text: "Action 1",
    resultingSituation: 0
  },
  5: {
    text: "Action 2",
    resultingSituation: 0
  },
}
