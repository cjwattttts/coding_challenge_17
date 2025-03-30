//TASK 1
class Customer { // defines the customer class
    constructor(name, email) { // initializes properties for the customer
        this.name = name;
        this.email = email;
        this.purchaseHistory = []; // initializes an empty purchase history
    }

    addPurchase(amount) { // adds a purchase amount to the purchaseHistory
        this.purchaseHistory.push(amount);
    }

    getTotalSpent() { // calculates and returns total amount spent
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
    }
}

const customer1 = new Customer('Cam Watts', 'camjwatts@yahoo.com'); // creates a new customer
customer1.addPurchase(500); // adds a purchase of $500
console.log(customer1.getTotalSpent());

//TASK 2
class SalesRep { // defines the salesrep class
    constructor(name) { // initializes the sales rep with a name
        this.name = name;
        this.clients = []; // initializes an empty clients list
    }

    addClient(customer) { // adds a customer to the clients list
        this.clients.push(customer);
    }

    getClientTotal(name) { // finds a client by name and returns total spent
        const client = this.clients.find(client => client.name === name); // searches for the client
        return client ? client.getTotalSpent() : 0; // returns the total spent by the client or 0 if not found
    }
}

const salesRep = new SalesRep('Maxine White'); // creates a sales rep
salesRep.addClient(customer1); // adds a customer to the sales rep's client list
console.log(salesRep.getClientTotal('Cam Watts')); // logs total spent by cam watts
