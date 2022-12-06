const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const { INTEGER, STRING, BOOLEAN, DECIMAL } = DataTypes;
const BikeInfo = sequelize.define(
  "bikeinfo",
  {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    bike_category_id: { type: INTEGER },
    shop_id: { type: INTEGER },
    bike_name: { type: STRING },
    specs: { type: STRING },
    rent_price: { type: DECIMAL },
    availability: { type: BOOLEAN, defaultValue: false },
    user_id: { type: INTEGER },
  },
  {
    freezeTableName: true,
  }
);

module.exports = BikeInfo;
