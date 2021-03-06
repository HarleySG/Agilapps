var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    bindEvents: function() {
        document.addEventListener('deviceready', onDeviceReady, false);
    },
    // deviceready Event Handler
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function checkConnection() {
    
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Conexión invalida';
    states[Connection.ETHERNET] = 'Conexión por Ethernet';
    states[Connection.WIFI]     = 'Conexión por WiFi';
    states[Connection.CELL_2G]  = 'Conexión por 2G';
    states[Connection.CELL_3G]  = 'Conexión por 3G';
    states[Connection.CELL_4G]  = 'Conexión por 4G';
    states[Connection.CELL]     = 'Conexión Generica';
    states[Connection.NONE]     = 'No tiene conexión a la red';

    alert('Tipo de conexion: ' + states[networkState]);
}
