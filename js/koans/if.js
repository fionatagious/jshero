jshero.koans.add({

  id: 'if',

  title: 'if',

  lesson: 'Sehr häufig kommt es vor, dass Code nur dann ausgeführt werden soll, wenn eine bestimmte Bedingung erfüllt ist. ' +
    'Dazu verwendet man die <code>if</code>-Anweisung.' +
    '<pre><code></code></pre>',
        
  task: 'Schreibe eine Funktion <code>gleich</code>, die 3 Werte auf strikte Gleichheit überprüft. <code>gleich(1, 1, 1)</code> soll ' +
    '<code>true</code> zurückgeben, <code>gleich(1, 1, 2)</code> soll <code>false</code> ergeben.',

  beforeTests: function() {
    if (typeof gleich !== "undefined") {
      gleich = undefined;
    }
  },

  tests: [
    
    function() {
      var ok = typeof gleich === 'function';
      var msg;
      if (ok) {
        msg = '<code>gleich</code> ist eine Funktion.';
      } else {
        msg = '<code>gleich</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok = gleich.length === 3;
      var msg;
      if (ok) {
        msg = '<code>gleich</code> hat 3 Parameter.';
      } else {
        msg = '<code>gleich</code> hat nicht 3, sondern ' + gleich.length + ' Parameter.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok, msg;
      try {
        var result = gleich(1, 1, 1);
        ok = result === true;
        if (ok) {
          msg = '<code>gleich(1, 1, 1)</code> ergibt <code>true</code>.';
        } else {
          msg = '<code>gleich(1, 1, 1)</code> ergibt nicht <code>true</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(e) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>gleich(1, 1, 1)</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg;
      try {
        var result = gleich(1, 1, "1");
        ok = result === false;
        if (ok) {
          msg = '<code>gleich(1, 1, "1")</code> ergibt <code>false</code>.';
        } else {
          msg = '<code>gleich(1, 1, "1")</code> ergibt nicht <code>false</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(e) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>gleich(1, 1, "1")</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },

    function() {
      var ok, msg;
      try {
        var result = gleich(1, "1", 1);
        ok = result === false;
        if (ok) {
          msg = '<code>gleich(1, "1", 1)</code> ergibt <code>false</code>.';
        } else {
          msg = '<code>gleich(1, "1", 1)</code> ergibt nicht <code>false</code>, sondern <code>' + JSON.stringify(result) + '</code>.';
        }
      } catch(e) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>gleich(1, "1", 1)</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    }

  ]

});
