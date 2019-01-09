// Add your Vue.js code
console.log('start script.js');

var app = new Vue({
    el: '#app',
    data: {
      message: 'Task 2',
      people: []
    },
    mounted: function() {
        axios.get("data.json").then(response =>{
            this.people = response.data;
            console.log(this.people);
        })
    },
    methods: {

    },
    filters: {

    }
  });


