const {sequelize, DataTypes, Model} = require('./sequelize_index');
const {Menu} = require('./Menu')
const {Location} = require('./Location')

class Restaurant extends Model {

}
Restaurant.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

Restaurant.hasMany(Menu, {as: 'menus', foreignKey: 'restaurant_id'})
Menu.belongsTo(Restaurant, {foreignKey: 'restaurant_id'})

Restaurant.hasMany(Location, { foreignKey: 'location_id'})
Location.belongsTo(Restaurant, {foreignKey: 'location_id'})

module.exports = { Restaurant };





