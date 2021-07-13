const {sequelize, Sequelize, DataTypes, Model} = require('./sequelize_index');


class Location extends Model {
 
}

Location.init({
    location: DataTypes.STRING,
    location_id: DataTypes.INTEGER,
}, {
    sequelize,
    timestamps: false
});

module.exports = {Location};
