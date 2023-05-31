module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('Customer',{
        Customer_Code: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Customer_Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Customer_Email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Customer_Tel:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Customer_Status:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },{
        timestamps: false
    })

    return Customer
}