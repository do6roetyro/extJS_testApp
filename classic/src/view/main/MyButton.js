Ext.define('MyApp.view.Button_2', {
    extend: 'Ext.button.Button',
    text: 'cancel',
    xtype: 'button_2',
    itemId: 'button_2',

    listeners: {
        click: 'onCancel',
        destroyable: true
    }
})
