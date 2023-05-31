const db = require('../models')
const Customer = db.Customers

module.exports = {
    // cm == customer
    //pass
    // show all CM status 1
    async showAllCMS1(req, res) {
        try{
            const customer = await Customer.findAll({
                where: {
                    Customer_Status: 1
                }
            })
            res.send(customer)
        }catch (err) {
            res.sendStatus(500).send({
                error: 'something incorrect'
            })
        }
    },
    //pass
    // show all CM status 0
    async showAllCMS0(req, res) {
        try{
            const customer = await Customer.findAll({
                where: {
                    Customer_Status: 0
                }
            })
            res.send(customer)
        }catch (err) {
            res.sendStatus(500).send({
                error: 'something incorrect'
            })
        }
    },
    //pass
    // show all CM
    async showAllCM(req, res) {
        try{
            const customer = await Customer.findAll()
            res.send(customer)
        }catch (err) {
            res.sendStatus(500).send({
                error: 'something incorrect'
            })
        }
    },
    //pass
    // single READ
    // show cM by CM_code
    async ShowCMBC(req, res) {
        try{
            const customer = await Customer.findAll({
                where: {
                    Customer_Code: req.params.CMcode
                }
            })
            res.send(customer)
        }catch (err) {
            res.sendStatus(500).send({
                error: 'something incorrect'
            })
        }
    },
    //pass
    // single INSERT
    // create CM
    async CreateCM(req, res) {
        try{
            const customer = await Customer.create(req.body)
            res.send(customer)
        }catch (err) {
            res.sendStatus(500).send({
                error: 'Create customer incorrect'
            })
        }
    },
    //pass
    // single EDIT
    // edit CM by CM_code
    async EditCMBC(req, res) {
        try{
            console.log(req.body,req.params.CMcode)
            await Customer.update(req.body,{
                where: {
                    Customer_Code: req.params.CMcode
                }
            })
            res.sendStatus(200)
        }catch (err) { 
            console.log(err)
            res.status(500).send({
                error: 'something incorrect'
            })
        }
    },

    // single DELETE
    // del CM by CM_code
    async DeleteCMBC(req, res) {
        try{
            await Customer.destroy({
                where:{
                    Customer_Code: req.params.CMcode
                }
            })
            res.sendStatus(200)
        }catch(err){
            res.status(500).send({
                error: 'customer info incorrct'
            })
        }
        // try{
        //     const customer = await Customer.destroy({
        //         where: {
        //             Customer_Code: req.params.CMcode
        //         }
        //     })
        //     res.send(customer)
        // }catch (err) {
        //     res.sendStatus(200).send({
        //         error: 'something incorrect'
        //     })
        // }
    },

    async loot(req, res) {
        res.send("you welcum")
    },
}