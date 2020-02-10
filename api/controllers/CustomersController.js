module.exports = app => {

    const customersDB = app.data.CustomersData;
    const controller = {};

    controller.listCustomers = (req, res) => {
        res.status(200).json(customersDB);
    }

    return controller;

}