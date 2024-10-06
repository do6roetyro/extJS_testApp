Ext.define('MyApp.view.dynamicButton', {
    extend: 'Ext.button.Button',
    text: 'Hello - my name is dynamic Button',
    xtype: 'dynamicBtn',
    itemId: 'dynamicBtn',
    listeners: {
        render: function(button) {
            button.on('click', 'handleClick');
        }
    }
});