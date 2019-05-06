var app = {
  // Application Constructor
  utl: null,

  initialize: function () {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    utl = utility;
    utl.ss.setItem('scores', 0)
    utl.cl("utilities loaded");

  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function () {
    this.receivedEvent('deviceready');
  },

  // Update DOM on a Received Event
  receivedEvent: function (id) {
    console.log('Received Event: ' + id);
  }
};

app.initialize();

