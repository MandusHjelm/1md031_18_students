//Vue elementet sm skickar vidare från JS script
var socket = io();
var contaktuppgifter=[]   ;

var vm1 = new Vue({
    el: '#allVue',
    data: {
        arbitraryVariableName: 'Välj en burgare',
        burgersVue: Burgare,
        counter: 0,
        customerName:'', email:'', street:'', streetnumb:'',payoption:'',gender:'',
        checkburg:[],
        burgerOrder: " ",
        orders: {}
    },
    computed: {
        formIncomplete: function() {
            return !this.email;
        }
    },
    created: function () {
        socket.on('initialize', function (data) {
            this.orders = data.orders;
        }.bind(this));

        socket.on('currentQueue', function (data) {
            this.orders = data.orders;
        }.bind(this));
    },
    methods: {
        markDone: function() {
            console.log("Utskrift från vue vid gbg-knapp tryck"),
                console.log(this.contaktuppgifter),
                contaktuppgifter.push(this.customerName) ,contaktuppgifter.push(this.email),
               // this.contaktuppgifter= this.customerName +"  "+ this.email+"   "+ this.payoption+"   " +this.gender,
                this.burgerOrder= this.checkburg
                console.log(this.burgerOrder)
        },
            getNext: function () {
                var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
                    return Math.max(last, next);
                }, 0);
                return lastOrder + 1;
            },
            addOrder: function (event) {
                var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
                socket.emit("addOrder", { orderId: this.getNext(),
                    details: { x: event.clientX - 10 - offset.x,
                        y: event.clientY - 10 - offset.y },
                    orderItems: [this.customerName,]
                });
        },
    }
});

