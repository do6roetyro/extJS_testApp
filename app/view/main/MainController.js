Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    // Метод, который вызывается при нажатии на кнопки с изменением текста
    onUpdateText: function(button) {
        // Используем this для работы с кнопкой, если scope на нее
        console.log('Кнопка: ' + button.getText());
        button.setText('Кнопка нажата');
    },

    // Метод для переключения видимости кнопки
    onToggleButtonVisibility: function() {
        const view = this.getView();
        const toggleButton = view.down('#toggleButton');
        toggleButton.setHidden(!toggleButton.hidden);
    },

    // Метод, который вызывается из контекста контроллера
    onControllerAction: function() {
        console.log('Метод контроллера вызван!');
    }
});
