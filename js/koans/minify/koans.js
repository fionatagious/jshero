jshero.koans.add({id:"var",title:"Variablen",lesson:'In der Programmierung ist eine Variable ein Beh\u00e4lter f\u00fcr einen Wert.<br>Mit <pre><code>var stadt = "Prag";</code></pre> deklariert man eine Variable mit dem Namen <code>stadt</code> und initialisiert sie mit dem Wert <code>"Prag"</code> zu. Mit dem Schl\u00fcsselwort <code>var</code> wird die Variable deklariert. Mit dem Gleichheitszeichen weist man der Variablen einen Wert zu.',task:'Deklariere eine Variable <code>vorname</code> und initialisiere sie mit dem Wert <code>"Franz"</code>.',
beforeTests:function(){"undefined"!==typeof vorname&&(vorname=void 0)},tests:[function(){var a="undefined"!==typeof vorname;return{ok:a,msg:a?"<code>vorname</code> hat einen Wert.":"<code>vorname</code> hat keinen Wert."}},function(){var a="Franz"===vorname,b;b=a?'<code>vorname</code> hat den Wert "Franz".':'<code>vorname</code> hat nicht den Wert <code>"Franz"</code>, sondern den Wert <code>'+JSON.stringify(vorname)+"</code>.";return{ok:a,msg:b}}]});jshero.koans.add({id:"var2",title:"Mehrere Variablen",lesson:'M\u00f6chte man mehrere Variable deklarieren und initialisieren, so kann man das in zwei Programmzeilen tun:<pre><code>var stadt = "Prag";<br>var land = "Tschechien";</code></pre>Jede Anweisung wird dabei mit einem Semikolon (<code>;</code>) abgeschlossen.',task:'Deklariere eine Variable <code>blume</code> und weise ihr den Wert <code>"Rose"</code> zu. Deklariere eine zweite Variable <code>tier</code> und weise ihr den Wert <code>"K\u00e4fer"</code> zu.',
beforeTests:function(){"undefined"!==typeof blume&&(blume=void 0);"undefined"!==typeof tier&&(tier=void 0)},tests:[function(){var a="undefined"!==typeof blume;return{ok:a,msg:a?"<code>blume</code> hat einen Wert.":"<code>blume</code> hat keinen Wert."}},function(){var a="Rose"===blume,b;b=a?'<code>blume</code> hat den Wert <code>"Rose"</code>.':'<code>blume</code> hat nicht den Wert <code>"Rose"</code>, sondern den Wert <code>'+JSON.stringify(blume)+"</code>.";return{ok:a,msg:b}},function(){var a=
"undefined"!==typeof tier;return{ok:a,msg:a?"<code>tier</code> hat einen Wert.":"<code>tier</code> hat keinen Wert."}},function(){var a="K\u00e4fer"===tier,b;b=a?'<code>tier</code> hat den Wert <code>"K\u00e4fer"</code>.':'<code>tier</code> hat nicht den Wert <code>"K\u00e4fer"</code>, sondern den Wert <code>'+JSON.stringify(tier)+"</code>.";return{ok:a,msg:b}}]});jshero.koans.add({id:"function",title:"Funktionen",lesson:'Eine Funktion ist ein Block von Anweisungen, der beliebig oft ausgef\u00fchrt werden kann. Eine Funktion kann Parameter entgegennehmen und eine Funktion kann einen Wert zur\u00fcckgeben. Funktionen werden mit dem Schl\u00fcsselwort <code>function</code> definiert. Darauf folgen in runden Klammern eingeschlossen die Parameter und anschlie\u00dfend, eingeschlossen in geschweiften Klammern, die Anweisungen. Mit dem Schl\u00fcsselwort <code>return</code> kann ein Wert zur\u00fcckgegeben werden. Funktionen kann man Variablen zuodnen. Die Funktion tr\u00e4gt dann den Namen der Variablen. Mit <pre><code>var farbe = function() {<br>  return "gr\u00fcn";<br>};</code></pre> definieren wir eine Funktion <code>farbe</code>, die <code>"gr\u00fcn"</code> zur\u00fcckgibt. Die Funktion nimmt keine Paramter entgegen (die runde Klammer ist leer) und sie enth\u00e4lt genau eine Anweisung, die R\u00fcckgabe.',
task:'Schreibe eine Funktion <code>hallo</code>, die <code>"Hallo Welt!"</code> zur\u00fcckgibt.',beforeTests:function(){"undefined"!==typeof hallo&&(hallo=void 0)},tests:[function(){var a="function"===typeof hallo;return{ok:a,msg:a?"<code>hallo</code> ist eine Funktion.":"<code>hallo</code> ist keine Funktion."}},function(){var a,b;try{var c=hallo();b=(a="Hallo Welt!"===c)?'<code>hallo()</code> gibt <code>"Hallo Welt!"</code> zur\u00fcck.':'<code>hallo()</code> gibt nicht <code>"Hallo Welt!"</code>, sondern <code>'+
JSON.stringify(c)+"</code> zur\u00fcck."}catch(d){a=!1,b="Fehler beim Aufruf von <code>hallo()</code>."}return{ok:a,msg:b}}]});jshero.koans.add({id:"parameter",title:"Parameter",lesson:'Nun m\u00f6chten wir Funktionen mit Parameter kennen lernen. Mit <pre><code>var gebe = function(wert) {<br>  return wert;<br>}</code></pre>definieren wir eine Funktion, die den \u00fcbergebenen Parameter einfach wieder zur\u00fcckgibt. Der Paramter muss eine Variable sein und steht in der runden Klammer. <code>gebe("Schokolade")</code> liefert den Wert <code>"Schokolade"</code>.',task:"Schreibe eine Funktion <code>echo</code>, die ebenfalls den \u00fcbergebenen Parameter wieder zur\u00fcckgibt.",
beforeTests:function(){"undefined"!==typeof echo&&(echo=void 0)},tests:[function(){var a="function"===typeof echo;return{ok:a,msg:a?"<code>echo</code> ist eine Funktion.":"<code>echo</code> ist keine Funktion."}},function(){var a,b;try{var c=echo("Hallo Welt!");b=(a="Hallo Welt!"===c)?'<code>echo("Hallo Welt!")</code> gibt <code>"Hallo Welt!"</code> zur\u00fcck.':'<code>echo("Hallo Welt!")</code> gibt nicht <code>"Hallo Welt!"</code>, sondern <code>'+JSON.stringify(c)+"</code> zur\u00fcck."}catch(d){a=
!1,b='Fehler beim Aufruf von <code>echo("Hallo Welt!")</code>.'}return{ok:a,msg:b}},function(){var a,b;try{var c=echo("Franz");b=(a="Franz"===c)?'<code>echo("Franz")</code> gibt <code>"Franz"</code> zur\u00fcck.':'<code>echo("Franz")</code> gibt nicht <code>"Franz"</code>, sondern <code>'+JSON.stringify(c)+"</code> zur\u00fcck."}catch(d){a=!1,b='Fehler beim Aufruf von <code>echo("Franz")</code>.'}return{ok:a,msg:b}}]});var result;
jshero.koans.add({id:"string",title:"Strings",lesson:'Wir haben gesehen, dass eine Variable ein Beh\u00e4lter f\u00fcr einen Wert ist. Werte besitzen dabei einen Typ. So kann ein Wert eine Zahl wie 7.12 sein. Der Typ von 7.12 ist Zahl. Oder ein Wert kann ein Text wie "Hallo Welt!" sein. Der Typ von "Hallo Welt!" ist Text. Diesen Typ bezeichnet man auch als Zeichenkette oder String. Strings schreibt man immer in einfachen oder doppelten Anf\u00fchrungszeichen. So ist "Hallo Welt!" derselbe String wie \'Hallo Welt\'.<br>Mit Strings kann man arbeiten. Man kann sie zum Beispiel verketten. Dies macht man mit dem <code>+</code> Zeichen. So liefert <code>"Java" + "Script"</code> den String <code>"JavaScript"</code>.<br>Die folgende Funktion h\u00e4ngt an dem \u00fcbergebenen Parameter einen Text an und gibt den zusammengesetzten Text zur\u00fcck: <pre><code>var lobe = function(name) {<br>  return name + " ist toll!";<br>}</code></pre>So liefert <code>lobe("JavaScript")</code> den Wert <code>"JavaScript ist toll!"</code>.',task:'Schreibe eine Funktion <code>begruesse</code>, die als Parameter einen Namen entgegennimmt und die <code>"Hallo &lt;Name&gt;!"</code> zur\u00fcckgibt. \u00dcbergibt man der Funktion <code>"Maria"</code>, so sollte die Funktion <code>"Hallo Maria!"</code> zur\u00fcckgeben. \u00dcbergibt man der Funktion <code>"Franz"</code>, so sollte die R\u00fcckgabe <code>"Hallo Franz!"</code> sein.',
beforeTests:function(){"undefined"!==typeof begruesse&&(hallo=void 0)},tests:[function(){var a="function"===typeof begruesse;return{msg:a?"<code>begruesse</code> ist eine Funktion.":"<code>begruesse</code> ist keine Funktion.",ok:a}},function(){var a,b;try{var c=begruesse("Maria");"Hallo Maria!"===c?(a=!0,b='<code>begruesse("Maria")</code> gibt <code>"Hallo Maria!"</code> zur\u00fcck.'):(a=!1,b='<code>begruesse("Maria")</code> gibt nicht <code>"Hallo Maria!"</code>, sondern <code>'+JSON.stringify(c)+
"</code> zur\u00fcck.")}catch(d){a=!1,b='Fehler beim Aufruf von <code>hallo("Maria")</code>.'}return{msg:b,ok:a}},function(){var a,b;try{var c=begruesse("Franz");"Hallo Franz!"===c?(a=!0,b='<code>begruesse("Franz")</code> gibt <code>"Hallo Franz!"</code> zur\u00fcck.'):(a=!1,b='<code>begruesse("Franz")</code> gibt nicht <code>"Hallo Franz!"</code>, sondern <code>'+JSON.stringify(c)+"</code> zur\u00fcck.")}catch(d){a=!1,b='Fehler beim Aufruf von <code>hallo("Franz")</code>.'}return{msg:b,ok:a}}]});jshero.koans.add({id:"add",title:"Addition",lesson:"Mit <code>+</code> addierst du Zahlen.",task:"Schreibe eine Funktion <code>add</code>, die 2 Zahlen addiert.",beforeTests:function(){"undefined"!==typeof add&&(add=void 0)},tests:[function(){var a="function"===typeof add;return{ok:a,msg:a?"<code>add</code> ist eine Funktion.":"<code>add</code> ist keine Funktion."}},function(){var a=2===add.length;return{ok:a,msg:a?"<code>add</code> hat zwei Parameter.":"<code>add</code> hat nicht zwei Parameter."}},
function(){var a,b;try{var c=add(0,0);b=(a=0===c)?"<code>add(0,0)</code> ergibt <code>0</code>.":"<code>add(0,0)</code> ergibt nicht <code>0</code>, sondern <code>"+JSON.stringify(c)+"</code>."}catch(d){a=!1,b="Fehler beim Aufruf von <code>add(0, 0)</code>."}return{ok:a,msg:b}}]});
