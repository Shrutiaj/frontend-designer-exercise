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
        })
    },
    methods: {
        sortArray: function(){
            this.people.sort(function(a, b){
                console.log("Calling sort...");
                var lnameA = a.lname.toUpperCase();
                var lnameB = b.lname.toUpperCase();

                if(lnameA < lnameB){
                    return -1;
                }
                else if(lnameA > lnameB){
                    return 1
                }
                else {
                    return 0;
                }
            })
        }
    },
    created: function(){
        this.sortArray();
    },
    filters: {
        moment: function (date) {
          if(date){
            return moment("2015-11-08T05:50:47+0600").format('MMM Do YYYY [at] h:mm:ss a');
          }
        },
        currency: function(curr){
            return numeral(curr).format('$0,0.00');
        }
      }
  });


