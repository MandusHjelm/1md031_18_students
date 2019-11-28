//Vue elementet sm skickar vidare från JS script
var socket = io();
var contaktuppgifter = [];

var vm1 = new Vue({
        el: '#allVue',
        data: {
            arbitraryVariableName: 'Välj en burgare',
            burgersVue: Burgare,
            counter: 0,
            customerName: '', email: '', street: '', streetnumb: '', payoption: '', gender: '',
            checkburg: [],
            burgerOrder: " ",
            orders: {},
            deliveryLocation: {x: 0, y: 0}
        },
        computed: {
            formIncomplete: function () {
                this.burgerOrder = this.checkburg
                return !this.email|| !this.customerName
            },
            placeOrder: function () {
                return this.key;
            }
        },
/*        created: function () {
            socket.on('initialize', function (data) {
                this.orders = data.orders;
            }.bind(this));

            socket.on('currentQueue', function (data) {
                this.orders = data.orders;
            }.bind(this));
        },*/
        methods: {
            //getNext: function () {
            // var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
            //     return Math.max(last, next);
            // }, 0);
            // return lastOrder + 1;
            //},
            displayOrder: function (event) {
                var offset = {
                    x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top

                };
                this.deliveryLocation.x = event.clientX - 10 - offset.x;
                this.deliveryLocation.y = event.clientY - 10 - offset.y;
            },
            addOrder: function (event) {
                console.log("Utskrift från vue vid gbg-knapp tryck"),
                console.log(this.contaktuppgifter),
                contaktuppgifter.push(this.customerName) , contaktuppgifter.push(this.email)

            //var offset = {
                    //x: event.currentTarget.getBoundingClientRect().left,
                   // y: event.currentTarget.getBoundingClientRect().top

           // };
                socket.emit("addOrder", {
                    orderId:this.customerName,              //getNext(),
                    details: {
                      x: this.deliveryLocation.x,
                       y: this.deliveryLocation.y,

                    },
                    orderItems: [this.burgerOrder],
                    ordermail:this.email, ordergender:this.gender, orderpay:this.payoption, orderCustName:this.customerName,
                    //orderItems: [this.customerName+ "    " + this.email+ "    " +this.gender+ "    " +this.payoption+ "    -" +this.burgerOrder]
                })
            },

        }
    })

