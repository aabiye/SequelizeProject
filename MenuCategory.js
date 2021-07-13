const {sequelize, Sequelize, DataTypes, Model} = require('./sequelize_index');


class MenuCategory extends Model {
 
}

MenuCategory.init({
    name: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false
});

module.exports = { MenuCategory};





