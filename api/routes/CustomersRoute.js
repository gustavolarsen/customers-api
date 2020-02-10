module.exports = app => {
    const controller = require('../controllers/CustomersController')();

    app.route('/api/v1/customers').get(controller.listCustomers);

}