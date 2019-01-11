// Add your Vue.js code
console.log('start script.js');

var app = new Vue({
    el: '#app',
    data: {
      message: 'Task 2',
      people: []
    },
    mounted: function() {
        axios.get("data.json").then(response =>{ // Pulling JSON data using axios
            this.people = response.data; // Assigning the JSON response to the people[] array in data
        }),
        this.sortArray();
    },
    methods: {
        //method to sort people in the list based on last name
        sortArray: function(){
            this.people.sort(function(a, b){
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
    filters: {
        // Filter to format date using MomentJS
        moment: function (date) {
          if(date){
            return moment("2015-11-08T05:50:47+0600").format('MMM Do YYYY [at] h:mm:ss a');
          }
        },
        // Filter to format currency using NumeralJS
        currency: function(curr){
            return numeral(curr).format('$0,0.00');
        }
      }
  });


