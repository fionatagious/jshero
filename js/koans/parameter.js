jshero.koans.add({

  id: "parameter",

  title: "Parameter",

  lesson: 'Nun möchten wir Funktionen mit Parameter kennen lernen. Mit <pre><code>var gebe = function(wert) {<br>  return wert;<br>}</code></pre>' +
    'definieren wir eine Funktion, die den übergebenen Parameter einfach wieder zurückgibt. ' +
    'Der Paramter muss eine Variable sein und steht in der runden Klammer. ' +
    '<code>gebe("Schokolade")</code> liefert den Wert <code>"Schokolade"</code>.',
        
  task: 'Schreibe eine Funktion <code>echo</code>, die ebenfalls den übergebenen Parameter wieder zurückgibt.',

  beforeTests: function() {
    if (typeof echo !== "undefined") {
      echo = undefined;
    }
  },

  tests: [
    function() {
      var ok = typeof echo === 'function';
      var msg;
      if (ok) {
        msg = '<code>echo</code> ist eine Funktion.';
      } else {
        msg = '<code>echo</code> ist keine Funktion.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },
 
    function() {
      var ok, msg;
      try {
        var result = echo('Hallo Welt!');
        ok = result === "Hallo Welt!";
        if (ok) {
          msg = '<code>echo("Hallo Welt!")</code> gibt <code>"Hallo Welt!"</code> zurück.';
        } else {
          msg = '<code>echo("Hallo Welt!")</code> gibt nicht <code>"Hallo Welt!"</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(e) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>echo("Hallo Welt!")</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    },
    
    function() {
      var ok, msg;
      try {
        var result = echo('Franz');
        ok = result === "Franz";
        if (ok) {
          msg = '<code>echo("Franz")</code> gibt <code>"Franz"</code> zurück.';
        } else {
          msg = '<code>echo("Franz")</code> gibt nicht <code>"Franz"</code>, sondern <code>' + JSON.stringify(result) + '</code> zurück.';
        }
      } catch(e) {
        ok = false;
        msg = 'Fehler beim Aufruf von <code>echo("Franz")</code>.';
      }
      return {
        ok: ok,
        msg: msg
      };
    }
  ]

});
