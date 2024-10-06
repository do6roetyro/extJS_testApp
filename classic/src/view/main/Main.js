Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    controller: 'main',
    title: 'Test Application',
    layout: {
        type: 'vbox',
        align: 'center'
    },

    items: [
        {
            xtype: 'container',
            layout: {
                type: 'hbox',  // Горизонтальное расположение кнопок
                align: 'middle',
                pack: 'center' // Центрируем кнопки
            },
            margin: 10,
            items: [
                {
                    xtype: 'button',
                    text: 'Изменить текст кнопки',
                    listeners: {
                        click: {
                            fn: 'onUpdateText',
                            scope: 'this'
                        }
                    }
                },
                {
                    xtype: 'button',
                    text: 'Изменить текст кнопки',
                    listeners: {
                        click: {
                            fn: function() {
                                console.log('Это контекст самого компонента: ' + this);
                                console.log(this);
                            },
                            scope: this  // Здесь this указывает на компонент, в котором описан listener
                        }
                    }
                },
                {
                    xtype: 'button',
                    text: 'Показать/Скрыть другую кнопку',
                    listeners: {
                        click: {
                            fn: 'onToggleButtonVisibility',
                            scope: 'controller'
                        }
                    }
                },
                {
                    xtype: 'button',
                    text: 'Вызвать метод контроллера',
                    listeners: {
                        click: {
                            fn: 'onControllerAction',
                            scope: 'controller'
                        }
                    }
                }
            ]
        },
        {
            xtype: 'container',
            layout: {
                type: 'vbox',
                align: 'center'
            },
            items: [
                {
                    xtype: 'button',
                    text: 'Кнопка для скрытия',
                    itemId: 'toggleButton',
                    hidden: false,
                    margin: '20 0 0 0'  // Отступ сверху для разделения
                }
            ]
        }
    ]
});
