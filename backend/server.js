/**
 * Express - Express.js is a web application framework for Node.js. It simplifies many 
 *      aspects of Node.js such as routing, middleware configuration, and sending 
 *      responses. You can learn more about express [Reference](https://expressjs.com/)
 * 
 * FS - This is the Node.js built-in module for file system operations. We use it to 
 *      read from and write to files. More information about fs can be found 
 *      [Reference](https://nodejs.org/api/fs.html)
 * 
 * Body-parser - This is a middleware used to extract the body portion of an incoming 
 *      HTTP request and exposes it on `req.body`. This is especially useful when 
 *      you want to read HTTP POST data. More information can be found 
 *      [Reference](https://www.npmjs.com/package/body-parser)
 */
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

// This line sets up our application to use the required middleware
app.use(bodyParser.json());

// Load products from file
let loadProducts = () => {
    let data = fs.readFileSync('./products.json');
    return JSON.parse(data);
}

// load users from file
let loadUsers = () => {
    let data = fs.readFileSync('./users.json');
    return JSON.parse(data);
}

// save products to file
let saveProducts = (products) => {
    let data = JSON.stringify(products);
    fs.writeFileSync('./products.json', data);
}

// save users to file
let saveUsers = (users) => {
    let data = JSON.stringify(users);
    fs.writeFileSync('./users.json', data);
}

// get products - Requests products data from the server
app.get('/products', (req, res) => {
    let products = loadProducts();
    res.send(products);
});

// get users - Requests users data from the server
app.get('/users', (req, res) => {
    let users = loadUsers();
    res.send(users);
});

// post new product
app.post('/products/add', (req, res) => {
    let products = loadProducts();
    let newProduct = req.body;
    products.push(newProduct);
    saveProducts(products);
    res.send(newProduct);
});

// post new user
app.post('/users/add', (req, res) => {
    let users = loadUsers();
    let newUser = req.body;
    users.push(newUser);
    users.push(newUser);
    saveUsers(users);
    res.send(newUser);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// put (update) product
// req - request
// res - response
app.put('/products/:id', (req, res) => {
    let products = loadProducts();
    let id = req.params.id;
    let updatedProduct = req.body;
    let index = products.findIndex(product => product.id === id);
    if (index !== -1) {
        products[index] = updatedProduct;
        saveProducts(products);
        res.send(updatedProduct);
    } else {
        res.status(404).send();
    }
});

// DELETE (remove product) product
// req - request
// res - response
app.delete('/products/:id', (req, res) => {
    let products = loadProducts();
    let id = req.params.id;
    let index = products.findIndex(product => product.id === id);
    if (index !== -1) {
        products.splice(index, 1);
        saveProducts(products);
        res.send();
    } else {
        res.status(404).send();
    }
});