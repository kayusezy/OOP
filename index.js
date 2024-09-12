class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Method to calculate the total price of this cart item
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

class ShoppingCart {
    constructor() {
        this.items = []; // Array to hold ShoppingCartItem instances
    }

    // Method to get the total number of items in the cart
    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    // Method to add items to the cart
    addItem(product, quantity) {
        // Check if the item is already in the cart
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity; // Update quantity if item exists
        } else {
            const newItem = new ShoppingCartItem(product, quantity);
            this.items.push(newItem); // Add new item to cart
        }
    }

    // Method to remove items from the cart
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Method to display cart items
    displayCartItems() {
        if (this.items.length === 0) {
            console.log('The cart is empty.');
            return;
        }
        console.log('Shopping Cart Items:');
        this.items.forEach(item => {
            console.log(`${item.product.name} - Quantity: ${item.quantity}, Total Price: $${item.getTotalPrice().toFixed(2)}`);
        });
    }
}

// Create some products
const apple = new Product(1, 'Apple', 0.99);
const banana = new Product(2, 'Banana', 0.59);
const orange = new Product(3, 'Orange', 0.79);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(apple, 3);
cart.addItem(banana, 2);
cart.addItem(orange, 1);

// Display the cart
cart.displayCartItems(); // Should display all items with their total prices

// Display total items in the cart
console.log(`Total items in the cart: ${cart.getTotalItems()}`);

// Remove an item from the cart
cart.removeItem(2); // Remove banana

// Display the cart again
cart.displayCartItems(); // Should display remaining items
console.log(`Total items in the cart: ${cart.getTotalItems()}`);
