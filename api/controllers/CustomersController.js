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

    controller.removeCustomers = (req, res) => {
        
        const { customerId } = req.params;

        const foundCustomerIndex = customersMock.data.findIndex( customer => customer.id === customerId);

        if (foundCustomerIndex === -1) {
            
            res.status(404).json({
                message: 'Cliente não encontrado.',
                success: false,
                customers: customersMock,
            });

        } else {
            
            customersMock.data.splice(foundCustomerIndex, 1);

            res.status(200).json({
                message: 'Cliente removido com sucesso.',
                success: true,
                customers: customersMock,
            });

        }
    }

    controller.updateCustomers = (req, res) => {

        const { customerId } = req.params;

        const foundCustomerIndex = customersMock.data.findIndex( customer => customer.id === customerId);

        if (foundCustomerIndex === -1) {
            
            res.status(404).json({
                message: 'Cliente não encontrado.',
                success: false,
                customers: customersMock,
            });

        } else {

            const newCustomer = {
                id: customerId,
                parentId: req.body.parentId,
                name: req.body.name,             
                birthDate: req.body.birthDate,
                cellphone: req.body.cellphone,
                phone: req.body.phone,
                email: req.body.email,
                occupation: req.body.occupation,
                state: req.body.state, 
                createAt: new Date(),
            }
            
            customersMock.data.splice(foundCustomerIndex, 1, newCustomer);

            res.status(200).json({
                message: 'Cliente editado com sucesso.',
                success: true,
                customers: customersMock,
            });
        }
    }

    return controller;

}