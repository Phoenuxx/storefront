module.exports = function (sequelize, DataTypes) {
  var Stock = sequelize.define("Stock", {

    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    picture: DataTypes.STRING,
    description: DataTypes.STRING,
    item_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weight: DataTypes.INTEGER,
    units: DataTypes.INTEGER,
    category: DataTypes.STRING,
    subCategory: DataTypes.STRING,
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false 
    },
    quantity: DataTypes.INTEGER
  });

  return Stock;
};