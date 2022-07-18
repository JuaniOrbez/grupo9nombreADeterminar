module.exports = (sequelize, DataTypes) => {

    let alias = "Product_Category";

    let cols = {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        } ,
        name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        } 
    };

    let config = {
        tableName: "products_category",
        timestamps: false,
    };

    const Product_Category = sequelize.define(alias, cols, config);

    return Product_Category;
}