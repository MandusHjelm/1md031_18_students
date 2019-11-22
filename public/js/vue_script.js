//Vue elementet sm skickar vidare från JS script
var vm = new Vue({
    el: '#allVue',
    data: {
        arbitraryVariableName: 'Välj en burgare',
        burgersVue: Burgare,
        counter: 0,
        customerName:'', email:'', street:'', streetnumb:'',payoption:'',gender:'',
        checkburg:[ ],
    },
        methods: {
            markDone: function() {
                console.log("Hej hemskt mycket hej"),
                console.log(contaktuppgifter),
                contaktuppgifter.push(this.customerName),contaktuppgifter.push(this.email), contaktuppgifter.push(this.street),
                contaktuppgifter.push(this.streetnumb), contaktuppgifter.push(this.payoption), contaktuppgifter.push(this.gender)
                checkburg.push(this.checkvalue)
                console.log(checkburg)

            }
        }
});

var contaktuppgifter=[];
var checkburg=[];

/*
function burgerChosen(namnfun) {
    valdaBurgare.push(namnfun);
    console.log(namnfun)
}
*/