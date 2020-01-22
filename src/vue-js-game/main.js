new Vue({
    el: "#app",
    data: {
        title: "Hello",
        link: "http://google.com"
    },
    methods: {
        changeTitle: function(event) {
            this.title = event.target.value;
        },
        sayHello: function() {
            return "Hello,";
        }
    }
}); 