const {sequelize, Sequelize, DataTypes, Model} = require('./sequelize_index');
const {MenuCategory} = require('./MenuCategory')

class Menu extends Model {

}

Menu.init({
    title: DataTypes.STRING}, {
    sequelize,
    timestamps: false
});

Menu.hasMany(MenuCategory, {foreignKey: 'menu_id'});
MenuCategory.belongsTo(Menu, {foreignKey: 'menu_id'});

module.exports = {Menu};





