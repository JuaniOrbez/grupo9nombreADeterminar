module.exports = (sequelize, DataTypes) => {

    let alias = "Product";

    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        } ,
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        } ,
        description: {
            type: DataTypes.LONGTEXT,
            allowNull: true,
        } ,
        category_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        },
        size: {
            type: DataTypes.STRING(50),
            allowNull: false,
        } ,
        price: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
        } ,
        inOffer: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        inHome: {
            type: DataTypes.STRING(50),
            allowNull: true,
        } ,
        image: {
            type: DataTypes.STRING(50),
            allowNull: false,
        } ,
    };
    
    let config = {
        tableName: "products",
        timestamps: false,
    };

    const Product = sequelize.define(alias, cols, config);
    return Product;
}