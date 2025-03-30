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

// TASK 2
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

//TASK 3
class VIPCustomer extends Customer { // extends Customer class
    constructor(name, email, vipLevel) { // initializes properties for VIP customer
        super(name, email); // calls the parent class constructor
        this.vipLevel = vipLevel; // assigns VIP level
    }

    getTotalSpent() { // overrides the getTotalSpent method
        const totalSpent = super.getTotalSpent(); // calls the parent class method
        return totalSpent + (totalSpent * 0.1); // adds a 10% bonus
    }
}

const vipCustomer = new VIPCustomer('Alice Williams', 'alice@example.com', 'Platinum'); // creates a VIP customer
vipCustomer.addPurchase(200); // adds a purchase of $200
console.log(vipCustomer.getTotalSpent()); // logs total spent with 10% bonus (should log 220)

//TASK 4
const allCustomers = [customer1, vipCustomer]; // adds customers to the list
const totalRevenue = allCustomers.reduce((acc, customer) => acc + customer.getTotalSpent(), 0); // calculates total revenue
console.log('Total Revenue:', totalRevenue); // logs total revenue

const highSpendingCustomers = allCustomers.filter(customer => customer.getTotalSpent() >= 200); // filters high-spending customers, updated condition
console.log('High-Spending Customers:', highSpendingCustomers); // logs high-spending customers

const customerSummary = allCustomers.map(customer => ({ // creates an array of customer names and their total spent
    name: customer.name,
    totalSpent: customer.getTotalSpent()
}));
console.log('Customer Summary:', customerSummary); // logs customer summary
