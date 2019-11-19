//Vue elementet sm skickar vidare från JS script
var vm = new Vue({
    el: '#myID',
    data: {
        arbitraryVariableName: 'Välj en burgare',
        burgersVue: Burgare,

    }
})
/*var shoppinglist = new Vue({
    el: '#orders',
    data:{burgersVueOrder: Burgare,},
    methods: {
        buyButon: function() {
            this.burgersVueOrder.name
        }
    }
});*/

var example1 = new Vue({
    el: '#example-1',
    data: {
        counter: 0
    }
})



var Beställknapp = new Vue({
    el: '#orders',
    methods: {
        markDone: function() {
            console.log("jdhfbds")
            console.log(contaktuppgifter)
        }
    }
});