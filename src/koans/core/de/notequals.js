jshero.koans.add({

  id: 'notequals',

  title: 'Strikte Ungleichtheit',

  lesson: `Mit <code>!==</code> vergleicht man zwei Werte auf strikte Ungleichheit.

<pre><code>let v1 = 'lauf' !== 'Lauf';
let v2 = 10 !== '10';</code></pre>

Beide Vergleiche ergeben <code>true</code>. Der erste, weil sich die beiden
Strings in der Groß- und Kleinschreibung unterscheiden.
Der zweite, weil sich die beiden Werte von Typ her unterscheiden.`,

  task: `Schreibe eine Funktion <code>unequal</code>, die 3 Werte auf strikte Ungleichheit überprüft.
Die Funktion soll nur dann <code>true</code> ergeben, wenn alle drei Parameter unterschiedlich sind.<br><br>Beispiel:
<code>unequal(1, 2, 3)</code> soll <code>true</code> liefern, <code>unequal(1, 1, 2)</code> soll
<code>false</code> ergeben.`,

  hint: `<pre><code>function unequal(a, b, c) {
  return a !== b && ...
}</code></pre>`,

  solution: `<pre><code>function unequal(a, b, c) {
  return a !== b && a !== c && b !== c;
}</code></pre>`,

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('unequal');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('unequal', 3);
    },

    function() {
      return jshero.testutil.assert_functionReturns('unequal(1, 2, 3)', true);
    },

    function() {
      return jshero.testutil.assert_functionReturns('unequal(1, 2, 1)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns('unequal(2, 1, 1)', false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("unequal('2', 2, 2)", false);
    },

    function() {
      return jshero.testutil.assert_functionReturns("unequal('kLein', 'klein', 'kleiN')", true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("unequal('1', 1, true)", true);
    },

    function() {
      return jshero.testutil.assert_functionReturns("unequal('klein', 'klein', 'kIein')", false);
    }
  ]

});
