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
