module.exports = () => {

    const customersDB = require('../data/customers.json');
    const controller = {};

    controller.listCustomers = (req, res) => {
        res.status(200).json(customersDB);
    }

    return controller;

}