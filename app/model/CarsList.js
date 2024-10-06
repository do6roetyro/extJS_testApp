Ext.define('MyApp.model.CarsList', {
    extend: 'MyApp.model.Base',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'make', type: 'string'},
        { name: 'model', type: 'string'},
        { name: 'year', type: 'string'},
        { name: 'color', type: 'string'},
        { name: 'body', type: 'string'},
    ]
});
