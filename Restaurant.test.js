const {sequelize} = require('./sequelize_index');
const {Restaurant} = require('./Restaurant')

describe('Restaurant', () => {

    beforeAll(async () => {

        await sequelize.sync({ force: true });
    })

    test('can create a restaurant', async () => {
        await sequelize.sync({ force: true }); 
        const restaurant = await Restaurant.create({ name: 'Dukum Ethiopian', location: 'DC' })
        expect(restaurant.location).toBe('DC')
    })

    test('can create a restaurant', async () => {
        await sequelize.sync({ force: true }); 
        const restaurant = await Restaurant.create({ name: 'Dama Ethiopian', location: 'VA' })
        expect(restaurant.location).toBe('VA')
    })
})