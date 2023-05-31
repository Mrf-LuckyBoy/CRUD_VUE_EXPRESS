const config = require('../config/config')
const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize (
    config.db.database,
    config.db.user,
    config.db.password, {
            host: config.db.host,
            dialect: config.db.dialect,
            operatorsAliases: false,

            pool: {
                max: config.pool.max,
                min: config.pool.min,
                acquire: config.pool.acquire,
                idle: config.pool.idle
            }
        }
    )

    sequelize.authenticate()
    .then(()=>{
        console.log('connected..')
    })
    .catch(err=>{
        console.log('Error'+err)
    })

    const db = {}

    db.sequelize = sequelize
    db.Sequelize = Sequelize

    db.Customers = require('./Customer.js')(sequelize, DataTypes)

    db.sequelize.sync({force:false})
    .then(()=>{
        console.log('yes re-sync done!')
    })

    module.exports = db 