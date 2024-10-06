Ext.define('MyApp.store.CarsList', {
    extend: 'Ext.data.Store',

    alias: 'store.carsList',

    model: 'MyApp.model.CarsList',

    data: {
        items: [
            { id: 1, make: 'VW', model: 'Polo', year: 2005, color: 'green', body: "sedan" },
            { id: 2, make: 'Lada', model: 'Vesta', year: 2010, color: 'black', body: "sedan" },
            { id: 3, make: 'Skoda', model: 'Octavia', year: 2020, color: 'white', body: "hatchback" },
            { id: 4, make: 'Peugeot', model: 'Traveller', year: 2012, color: 'grey', body: "van" },
            { id: 5, make: 'BMW', model: 'X5', year: 2017, color: 'white', body: "SW" },
        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
