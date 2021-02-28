jshero.koans.add({

  id: 'functionexpression',

  title: 'Functionsausdrücke',

  lesson: `Wir haben bisher Funktionsdeklarationen kennen gelernt. Man kann Funktionen aber auch direkt im laufenden
Code definieren. Eine solche Funktionsdefinition im laufende Code nennt man Funktionsausdruck.
So kann man zum Beispiel einer Variablen oder Konstanten direkt eine Funktion zuordnen.

<pre><code>const plusOne = function(x) {
  return x + 1;
};</code></pre>

Hier wurde keine Funktion deklariert, sondern wir haben einen Funktionsausdruck direkt einer Konstanten zugeordnet.
Da es sich hier um eine Variablen-Zuordnung handelt, sollte das Statement mit einem Semikolon abgeschlossen werden.
Im Gegensatz zu einer Funktionsdeklaration kann man bei einem Funktionsausdruck den Namen der Funktion weglassen.
Man spricht in diesem Fall von einer anonymen Funktion. Die Funktion wird über den zugeordneten Variablennamen
aufgerufen:

<pre><code>let foo = 1;
foo = plusOne(foo);
</code></pre>

Eine Funktionsdeklaration und ein Funktionsausdruck mit Variablendeklaration sind praktisch gleichwertig.
Welche Schreibweise man bevorzugt, ist Geschmackssache.
Wie wir noch sehen werden, spielen Funktionsausdrücke in der funktionalen Programmierung eine wichtige Rolle.`,

  task: `Schreibe eine Funktion <code>sperren</code>, die ein Wort entgegennimmt und dieses Wort gesperrt
zurückgibt. Das Sperren soll dabei durch Einfügen von Leerzeichen realisiert werden.<br><br>
Beispiel: <code>sperren("Juni")</code> sollte <code>"J u n i"</code> ergeben.`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('sperren');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('sperren', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('sperren("Juni")', 'J u n i');
    },

    function() {
      return jshero.testutil.assert_functionReturns('sperren("Traum")', 'T r a u m');
    },

    function() {
      return jshero.testutil.assert_functionReturns('double("Blaumeise")', 'B l a u m e i s e');
    }

  ]

});
