const {sequelize} = require('./sequelize_index');
const {Restaurant} = require('./Restaurant');
const {Menu} = require('./Menu');
const {MenuCategory} = require('./MenuCategory')


describe('Relationships', () => {
    beforeAll(async () => {
        await sequelize.sync({ force: true });
    })
    
    test('restaurants have menus', async () => {
        const restaurant = await Restaurant.create({name: 'Ethiopian', location: 'DC'})
        const menu = await Menu.create({title: 'set 1'});
        await restaurant.addMenu(menu);
        const menus = await restaurant.getMenus();
        const menuCategory = await MenuCategory.create({name: 'Appetizers'});
        await menus[0].addMenuCategory(menuCategory);
        const menuCategories = await menus[0].getMenuCategories();
        expect(menuCategories.length).toBe(1);
        expect(menus[0].title).toBe('set 1');
    })

})