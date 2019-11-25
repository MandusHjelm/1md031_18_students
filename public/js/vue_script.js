//Vue elementet sm skickar vidare från JS script
var vm = new Vue({
    el: '#allVue',
    data: {
        arbitraryVariableName: 'Välj en burgare',
        burgersVue: Burgare,
        counter: 0,
        customerName:'', email:'', street:'', streetnumb:'',payoption:'',gender:'',
        checkburg:[],
        burgerOrder: " ",
        //iFylldContact: false,
    },
        methods: {
            markDone: function() {
                console.log("Utskrift från vue vid gbg-knapp tryck"),
                console.log(contaktuppgifter),
                contaktuppgifter.push(this.customerName),contaktuppgifter.push(this.email), contaktuppgifter.push(this.street),
                contaktuppgifter.push(this.streetnumb), contaktuppgifter.push(this.payoption), contaktuppgifter.push(this.gender),
                this.burgerOrder= this.checkburg+"  "+ this.customerName
                console.log(this.burgerOrder)
            }
        }
});
//function för att göra en alert function senare
var contaktuppgifter=[];
var iFylldContact=false;
for (let i = 0; i < contaktuppgifter.length; i++){
    if (contaktuppgifter[i]>1){
        iFylldContact=true}
    else {iFylldContact=false}
}

/*
function burgerChosen(namnfun) {
    valdaBurgare.push(namnfun);
    console.log(namnfun)
}
*/