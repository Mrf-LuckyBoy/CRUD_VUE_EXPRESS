const CustromerController = require('./controller/CustomerController')

module.exports = (app) => {

    app.get('/',
        CustromerController.loot
    )

    app.get('/CMsON',
        CustromerController.showAllCMS1
    )

    app.get('/CMsOff',
        CustromerController.showAllCMS0
    )

    app.get('/showCMs',
        CustromerController.showAllCM
    )

    app.get('/showByCMcode/:CMcode',
        CustromerController.ShowCMBC
    )

    app.post('/createCM/',
        CustromerController.CreateCM
    )

    app.put('/editCM/:CMcode',
        CustromerController.EditCMBC
    )

    app.delete('/delCM/:CMcode',
        CustromerController.DeleteCMBC
    )
}