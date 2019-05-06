var utility = {
  al: function (obj) {
    if (settings.debug) {
      alert(obj);
    }
  },

  cl: function (obj) {
    if (settings.debug) {
      console.log(obj);
    }

  },

  ss: window.sessionStorage || {},

  ls: window.localStorage || {}
}