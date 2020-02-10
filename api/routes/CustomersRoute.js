module.exports = app => {

    const controller = app.controllers.CustomersController;

    app.route('/api/v1/customers').get(controller.listCustomers);

}