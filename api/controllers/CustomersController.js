const uuidv4 = require('uuid/v4');

module.exports = app => {

    const customersDB = app.data.CustomersData;
    const controller = {};

    const {
        customers: customersMock,
    } = customersDB;

    controller.listCustomers = (req, res) => {
        res.status(200).json(customersDB);
    }

    controller.saveCustomers = (req, res) => {
        customersMock.data.push({
            id: uuidv4(),
            parentId: uuidv4(),
            name: req.body.name,             
            birthDate: req.body.birthDate,
            cellphone: req.body.cellphone,
            phone: req.body.phone,
            email: req.body.email,
            occupation: req.body.occupation,
            state: req.body.state,            
        });

        res.status(201).json(customersMock);
    }

    return controller;

}