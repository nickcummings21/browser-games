new Vue({
  el: "#app",
  data: {
    title: "Hello",
    link: "http://google.com",
    myLink: "<a href='http://google.com'>Google</a>",
    name: "",
    age: "",
    imgSrc: "https://www.google.com/url?sa=i&url=http%3A%2F%2Fclipart-library.com%2Fwarrior-logo-cliparts.html&psig=AOvVaw0lwvw4DAUp0u5mqHZ3l7cD&ust=1581129180028000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjZ0qyzvucCFQAAAAAdAAAAABAD"
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
    },
    changeName: function(event) {
      this.name = event.target.value;
    },
    changeAge: function(event) {
      this.age = event.target.value;
    },
    sayHello: function() {
      return "Hello,";
    }
  }
});
