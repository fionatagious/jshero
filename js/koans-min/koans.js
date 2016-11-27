jshero.koans.add({id:"var",title:"Variablen",lesson:'In der Programmierung ist eine Variable ein Beh\u00e4lter f\u00fcr einen Wert.\x3cbr\x3eMit \x3cpre\x3e\x3ccode\x3evar stadt \x3d "Prag";\x3c/code\x3e\x3c/pre\x3e deklariert man eine Variable mit dem Namen \x3ccode\x3estadt\x3c/code\x3e und initialisiert sie mit dem Wert \x3ccode\x3e"Prag"\x3c/code\x3e. Mit dem Schl\u00fcsselwort \x3ccode\x3evar\x3c/code\x3e wird die Variable deklariert. Mit dem Gleichheitszeichen, dem Zuweisungsoperator, weist man der Variablen einen Wert zu.',
task:'Deklariere eine Variable \x3ccode\x3evorname\x3c/code\x3e und initialisiere sie mit dem Wert \x3ccode\x3e"Franz"\x3c/code\x3e.',beforeTests:function(){"undefined"!==typeof vorname&&(vorname=void 0)},tests:[function(){var a="undefined"!==typeof vorname;return{ok:a,msg:a?"\x3ccode\x3evorname\x3c/code\x3e hat einen Wert.":"\x3ccode\x3evorname\x3c/code\x3e hat keinen Wert."}},function(){var a="Franz"===vorname,b;b=a?'\x3ccode\x3evorname\x3c/code\x3e hat den Wert "Franz".':'\x3ccode\x3evorname\x3c/code\x3e hat nicht den Wert \x3ccode\x3e"Franz"\x3c/code\x3e, sondern den Wert \x3ccode\x3e'+
JSON.stringify(vorname)+"\x3c/code\x3e.";return{ok:a,msg:b}}]});
jshero.koans.add({id:"var2",title:"Mehrere Variablen",lesson:'M\u00f6chte man mehrere Variable deklarieren und initialisieren, so kann man das in zwei Programmzeilen tun:\x3cpre\x3e\x3ccode\x3evar stadt \x3d "Prag";\x3cbr\x3evar land \x3d "Tschechien";\x3c/code\x3e\x3c/pre\x3eJede Anweisung wird dabei mit einem Semikolon abgeschlossen.',task:'Deklariere eine Variable \x3ccode\x3eblume\x3c/code\x3e und weise ihr den Wert \x3ccode\x3e"Rose"\x3c/code\x3e zu. Deklariere eine zweite Variable \x3ccode\x3etier\x3c/code\x3e und weise ihr den Wert \x3ccode\x3e"K\u00e4fer"\x3c/code\x3e zu.',beforeTests:function(){"undefined"!==
typeof blume&&(blume=void 0);"undefined"!==typeof tier&&(tier=void 0)},tests:[function(){var a="undefined"!==typeof blume;return{ok:a,msg:a?"\x3ccode\x3eblume\x3c/code\x3e hat einen Wert.":"\x3ccode\x3eblume\x3c/code\x3e hat keinen Wert."}},function(){var a="Rose"===blume,b;b=a?'\x3ccode\x3eblume\x3c/code\x3e hat den Wert \x3ccode\x3e"Rose"\x3c/code\x3e.':'\x3ccode\x3eblume\x3c/code\x3e hat nicht den Wert \x3ccode\x3e"Rose"\x3c/code\x3e, sondern den Wert \x3ccode\x3e'+JSON.stringify(blume)+"\x3c/code\x3e.";
return{ok:a,msg:b}},function(){var a="undefined"!==typeof tier;return{ok:a,msg:a?"\x3ccode\x3etier\x3c/code\x3e hat einen Wert.":"\x3ccode\x3etier\x3c/code\x3e hat keinen Wert."}},function(){var a="K\u00e4fer"===tier,b;b=a?'\x3ccode\x3etier\x3c/code\x3e hat den Wert \x3ccode\x3e"K\u00e4fer"\x3c/code\x3e.':'\x3ccode\x3etier\x3c/code\x3e hat nicht den Wert \x3ccode\x3e"K\u00e4fer"\x3c/code\x3e, sondern den Wert \x3ccode\x3e'+JSON.stringify(tier)+"\x3c/code\x3e.";return{ok:a,msg:b}}]});
jshero.koans.add({id:"function",title:"Funktionen",lesson:'Eine Funktion ist ein Block von Anweisungen, der beliebig oft ausgef\u00fchrt werden kann. Eine Funktion kann Parameter entgegennehmen und eine Funktion kann einen Wert zur\u00fcckgeben. Funktionen werden mit dem Schl\u00fcsselwort \x3ccode\x3efunction\x3c/code\x3e definiert. Darauf folgen in runden Klammern eingeschlossen die Parameter und anschlie\u00dfend, eingeschlossen in geschweiften Klammern, die Anweisungen. Mit dem Schl\u00fcsselwort \x3ccode\x3ereturn\x3c/code\x3e kann ein Wert zur\u00fcckgegeben werden. Gleichzeitig beendet \x3ccode\x3ereturn\x3c/code\x3e die Funktion. Code nach der \x3ccode\x3ereturn\x3c/code\x3e-Anweisung wird nicht mehr ausgef\u00fchrt. Funktionen kann man Variablen zuodnen. Die Funktion tr\u00e4gt dann den Namen der Variablen. Mit \x3cpre\x3e\x3ccode\x3evar farbe \x3d function() {\x3cbr\x3e  return "gr\u00fcn";\x3cbr\x3e};\x3c/code\x3e\x3c/pre\x3e definieren wir eine Funktion \x3ccode\x3efarbe\x3c/code\x3e, die \x3ccode\x3e"gr\u00fcn"\x3c/code\x3e zur\u00fcckgibt. Die Funktion nimmt keine Paramter entgegen (die runde Klammer ist leer) und sie enth\u00e4lt genau eine Anweisung, die R\u00fcckgabe.\x3cbr\x3e Der Aufruf einer Funktion geschiet \u00fcber ihren Namen. Mit \x3cpre\x3e\x3ccode\x3evar ergebnis \x3d farbe();\x3c/code\x3e\x3c/pre\x3ewird die Funktion \x3ccode\x3efarbe\x3c/code\x3e ausgef\u00fchrt und ihre R\u00fcckgabe der Variablen \x3ccode\x3eergebnis\x3c/code\x3e zugewiesen. \x3ccode\x3eergebnis\x3c/code\x3e hat dann den Wert \x3ccode\x3e"gr\u00fcn"\x3c/code\x3e.',
task:'Schreibe eine Funktion \x3ccode\x3ehallo\x3c/code\x3e, die \x3ccode\x3e"Hallo Welt!"\x3c/code\x3e zur\u00fcckgibt.',beforeTests:function(){"undefined"!==typeof hallo&&(hallo=void 0)},tests:[function(){var a="function"===typeof hallo;return{ok:a,msg:a?"\x3ccode\x3ehallo\x3c/code\x3e ist eine Funktion.":"\x3ccode\x3ehallo\x3c/code\x3e ist keine Funktion."}},function(){var a,b;try{var c=hallo();b=(a="Hallo Welt!"===c)?'\x3ccode\x3ehallo()\x3c/code\x3e gibt \x3ccode\x3e"Hallo Welt!"\x3c/code\x3e zur\u00fcck.':
'\x3ccode\x3ehallo()\x3c/code\x3e gibt nicht \x3ccode\x3e"Hallo Welt!"\x3c/code\x3e, sondern \x3ccode\x3e'+JSON.stringify(c)+"\x3c/code\x3e zur\u00fcck."}catch(d){a=!1,b="Fehler beim Aufruf von \x3ccode\x3ehallo()\x3c/code\x3e."}return{ok:a,msg:b}}]});
jshero.koans.add({id:"parameter",title:"Parameter",lesson:'Nun m\u00f6chten wir Funktionen mit Parametern kennen lernen. Mit \x3cpre\x3e\x3ccode\x3evar gebe \x3d function(eingabe) {\x3cbr\x3e  return eingabe;\x3cbr\x3e}\x3c/code\x3e\x3c/pre\x3edefinieren wir eine Funktion, die den \u00fcbergebenen Parameter \x3ccode\x3eeingabe\x3c/code\x3e einfach wieder zur\u00fcckgibt. Parameter sind Variablen. Sie stehen in der runden Klammer und ben\u00f6tigen nicht das Schl\u00fcsselwort \x3ccode\x3evar\x3c/code\x3e zu ihrer Deklaration. Mit \x3cpre\x3e\x3ccode\x3evar ergebnis \x3d gebe("Apfel");\x3c/code\x3e\x3c/pre\x3erufen wir die Funktion \x3ccode\x3egebe\x3c/code\x3e mit der Wert \x3ccode\x3e"Apfel"\x3c/code\x3e auf. Jetzt wird unsere zuvor definierte Funktion \x3ccode\x3egebe\x3c/code\x3e ausgef\u00fchrt. Dabei wird zun\u00e4chst der Wert \x3ccode\x3e"Apfel"\x3c/code\x3e dem Parameter \x3ccode\x3eeingabe\x3c/code\x3e zugewiesen. \x3ccode\x3eeingabe\x3c/code\x3e hat jetzt den Wert \x3ccode\x3e"Apfel"\x3c/code\x3e. In der einzigen Codezeile der Funktion \x3ccode\x3egebe\x3c/code\x3e wird nun die Variable \x3ccode\x3eeingabe\x3c/code\x3e mit der \x3ccode\x3ereturn\x3c/code\x3e-Anweisung zur\u00fcckgegeben. Diese R\u00fcckgabe wird der Variablen \x3ccode\x3eergebnis\x3c/code\x3e zugewiesen. \x3ccode\x3eergebnis\x3c/code\x3e hat dann ebenfalls den Wert \x3ccode\x3e"Apfel"\x3c/code\x3e.',task:"Schreibe eine Funktion \x3ccode\x3eecho\x3c/code\x3e, die ebenfalls den \u00fcbergebenen Parameter wieder zur\u00fcckgibt.",
beforeTests:function(){"undefined"!==typeof echo&&(echo=void 0)},tests:[function(){var a="function"===typeof echo;return{ok:a,msg:a?"\x3ccode\x3eecho\x3c/code\x3e ist eine Funktion.":"\x3ccode\x3eecho\x3c/code\x3e ist keine Funktion."}},function(){var a=echo.length,b=1===a;return{ok:b,msg:b?"\x3ccode\x3eecho\x3c/code\x3e hat genau einen Parameter.":"\x3ccode\x3eecho\x3c/code\x3e hat nicht einen, sondern "+a+" Parameter."}},function(){var a,b;try{var c=echo("Hallo Welt!");b=(a="Hallo Welt!"===c)?'\x3ccode\x3eecho("Hallo Welt!")\x3c/code\x3e gibt \x3ccode\x3e"Hallo Welt!"\x3c/code\x3e zur\u00fcck.':
'\x3ccode\x3eecho("Hallo Welt!")\x3c/code\x3e gibt nicht \x3ccode\x3e"Hallo Welt!"\x3c/code\x3e, sondern \x3ccode\x3e'+JSON.stringify(c)+"\x3c/code\x3e zur\u00fcck."}catch(d){a=!1,b='Fehler beim Aufruf von \x3ccode\x3eecho("Hallo Welt!")\x3c/code\x3e.',console.log(b,d)}return{ok:a,msg:b}},function(){var a,b;try{var c=echo("Franz");b=(a="Franz"===c)?'\x3ccode\x3eecho("Franz")\x3c/code\x3e gibt \x3ccode\x3e"Franz"\x3c/code\x3e zur\u00fcck.':'\x3ccode\x3eecho("Franz")\x3c/code\x3e gibt nicht \x3ccode\x3e"Franz"\x3c/code\x3e, sondern \x3ccode\x3e'+
JSON.stringify(c)+"\x3c/code\x3e zur\u00fcck."}catch(d){a=!1,b='Fehler beim Aufruf von \x3ccode\x3eecho("Franz")\x3c/code\x3e.',console.log(b,d)}return{ok:a,msg:b}}]});
jshero.koans.add({id:"string",title:"Strings",lesson:'Wir haben gesehen, dass eine Variable ein Beh\u00e4lter f\u00fcr einen Wert ist. Werte besitzen dabei einen Typ. So kann ein Wert eine Zahl wie \x3ccode\x3e7.12\x3c/code\x3e sein. Der Typ von \x3ccode\x3e7.12\x3c/code\x3e ist Zahl. Oder ein Wert kann ein Text wie \x3ccode\x3e"Hallo Welt!"\x3c/code\x3e sein. Der Typ von \x3ccode\x3e"Hallo Welt!"\x3c/code\x3e ist Text. Diesen Typ bezeichnet man auch als Zeichenkette oder String. Strings schreibt man immer in einfachen oder doppelten Anf\u00fchrungszeichen. So ist "Hallo Welt!" derselbe String wie \'Hallo Welt!\'.\x3cbr\x3eMit Strings kann man arbeiten. Man kann sie zum Beispiel verketten. Dies macht man mit dem \x3ccode\x3e+\x3c/code\x3e Zeichen. So liefert \x3ccode\x3e"Java" + "Script"\x3c/code\x3e den String \x3ccode\x3e"JavaScript"\x3c/code\x3e.\x3cbr\x3eDie folgende Funktion h\u00e4ngt an dem \u00fcbergebenen Parameter einen Text an und gibt den zusammengesetzten Text zur\u00fcck: \x3cpre\x3e\x3ccode\x3evar lobe \x3d function(name) {\x3cbr\x3e  return name + " ist toll!";\x3cbr\x3e}\x3c/code\x3e\x3c/pre\x3eSo liefert \x3ccode\x3elobe("JavaScript")\x3c/code\x3e den Wert \x3ccode\x3e"JavaScript ist toll!"\x3c/code\x3e.',task:'Schreibe eine Funktion \x3ccode\x3ebegruesse\x3c/code\x3e, die einen Parameter entgegennimmt und die \x3ccode\x3e"Hallo \x26lt;Parameter\x26gt;!"\x3c/code\x3e zur\u00fcckgibt. \u00dcbergibt man der Funktion \x3ccode\x3e"Maria"\x3c/code\x3e, so sollte die Funktion \x3ccode\x3e"Hallo Maria!"\x3c/code\x3e zur\u00fcckgeben. \u00dcbergibt man der Funktion \x3ccode\x3e"Franz"\x3c/code\x3e, so sollte die R\u00fcckgabe \x3ccode\x3e"Hallo Franz!"\x3c/code\x3e sein.',
beforeTests:function(){"undefined"!==typeof begruesse&&(begruesse=void 0)},tests:[function(){var a="function"===typeof begruesse;return{msg:a?"\x3ccode\x3ebegruesse\x3c/code\x3e ist eine Funktion.":"\x3ccode\x3ebegruesse\x3c/code\x3e ist keine Funktion.",ok:a}},function(){var a,b;try{var c=begruesse("Maria");"Hallo Maria!"===c?(a=!0,b='\x3ccode\x3ebegruesse("Maria")\x3c/code\x3e gibt \x3ccode\x3e"Hallo Maria!"\x3c/code\x3e zur\u00fcck.'):(a=!1,b='\x3ccode\x3ebegruesse("Maria")\x3c/code\x3e gibt nicht \x3ccode\x3e"Hallo Maria!"\x3c/code\x3e, sondern \x3ccode\x3e'+
JSON.stringify(c)+"\x3c/code\x3e zur\u00fcck.")}catch(d){a=!1,b='Fehler beim Aufruf von \x3ccode\x3ehallo("Maria")\x3c/code\x3e.'}return{msg:b,ok:a}},function(){var a,b;try{var c=begruesse("Franz");"Hallo Franz!"===c?(a=!0,b='\x3ccode\x3ebegruesse("Franz")\x3c/code\x3e gibt \x3ccode\x3e"Hallo Franz!"\x3c/code\x3e zur\u00fcck.'):(a=!1,b='\x3ccode\x3ebegruesse("Franz")\x3c/code\x3e gibt nicht \x3ccode\x3e"Hallo Franz!"\x3c/code\x3e, sondern \x3ccode\x3e'+JSON.stringify(c)+"\x3c/code\x3e zur\u00fcck.")}catch(d){a=
!1,b='Fehler beim Aufruf von \x3ccode\x3ehallo("Franz")\x3c/code\x3e.'}return{msg:b,ok:a}}]});
jshero.koans.add({id:"stringlength",title:"String.length",lesson:'Strings besitzen die Eigenschaft \x3ccode\x3elength\x3c/code\x3e. Diese Eigenschaft liefert die Anzahl der Zeichen eines Strings. Dazu muss man dem String  oder der Variablen, die den String enth\u00e4lt, \x3ccode\x3e.length\x3c/code\x3e anh\u00e4ngen:\x3cpre\x3e\x3ccode\x3evar anzahl \x3d "Franz".length;\x3c/code/\x3e\x3c/pre\x3e\x3ccode\x3e"Franz"\x3c/code\x3e hat 5 Zeichen. Also hat \x3ccode\x3eanzahl\x3c/code\x3e jetzt den Wert \x3ccode\x3e5\x3c/code\x3e.\x3cpre\x3e\x3ccode\x3evar stadt \x3d "Prag";\x3cbr\x3eanzahl \x3d stadt.length;\x3c/code/\x3e\x3c/pre\x3e\x3ccode\x3e"Prag"\x3c/code\x3e hat 4 Zeichen. \x3ccode\x3eanzahl\x3c/code\x3e hat jetzt den Wert \x3ccode\x3e4\x3c/code\x3e.\x3cpre\x3e\x3ccode\x3eanzahl \x3d "".length\x3c/code/\x3e\x3c/pre\x3eDer Leerstring besitzt keine Zeichen. Der Wert von \x3ccode\x3eanzahl\x3c/code\x3e ist jetzt \x3ccode\x3e0\x3c/code\x3e.',task:'Schreibe eine Funktion \x3ccode\x3elaenge\x3c/code\x3e, die bei \u00dcbergabe eines Strings die Anzahl der Zeichen dieses Strings zur\u00fcckgibt. \x3ccode\x3elaenge("Franz")\x3c/code\x3e sollte \x3ccode\x3e5\x3c/code\x3e zur\u00fcckgeben.',
beforeTests:function(){"undefined"!==typeof laenge&&(laenge=void 0)},tests:[function(){var a="function"===typeof laenge;return{ok:a,msg:a?"\x3ccode\x3elaenge\x3c/code\x3e ist eine Funktion.":"\x3ccode\x3elaenge\x3c/code\x3e ist keine Funktion."}},function(){var a,b;try{var c=laenge("Hallo Welt!");b=(a=11===c)?'\x3ccode\x3elaenge("Hallo Welt!")\x3c/code\x3e gibt \x3ccode\x3e11\x3c/code\x3e zur\u00fcck.':'\x3ccode\x3elaenge("Hallo Welt!")\x3c/code\x3e gibt nicht \x3ccode\x3e11\x3c/code\x3e, sondern \x3ccode\x3e'+
JSON.stringify(c)+"\x3c/code\x3e zur\u00fcck."}catch(d){a=!1,b='Fehler beim Aufruf von \x3ccode\x3elaenge("Hallo Welt!")\x3c/code\x3e.'}return{ok:a,msg:b}},function(){var a,b;try{var c=laenge("");b=(a=0===c)?'\x3ccode\x3elaenge("")\x3c/code\x3e gibt \x3ccode\x3e0\x3c/code\x3e zur\u00fcck.':'\x3ccode\x3elaenge("")\x3c/code\x3e gibt nicht \x3ccode\x3e0\x3c/code\x3e, sondern \x3ccode\x3e'+JSON.stringify(c)+"\x3c/code\x3e zur\u00fcck."}catch(d){a=!1,b='Fehler beim Aufruf von \x3ccode\x3elaenge("")\x3c/code\x3e.'}return{ok:a,
msg:b}}]});
jshero.koans.add({id:"stringupper",title:"String.toUpperCase()",lesson:'Neben der Eigenschaft \x3ccode\x3elength\x3c/code\x3e besitzen Strings noch eine Reihe von Methoden. Das sind Funktionen, die direkt auf dem String angewendet werden. Wie die Eigenschaft \x3ccode\x3elength\x3c/code\x3e werden diese Methoden mit einem Punkt direkt dem String oder einer Variablen, die einen String enth\u00e4lt, angeh\u00e4ngt. Da Methoden Funktionen sind, folgen in runden Klammern eingeschlossen die Parameter. Zwei dieser String-Methoden sind die parameterlosen Methoden \x3ccode\x3etoUpperCase()\x3c/code\x3e und \x3ccode\x3etoLowerCase()\x3c/code\x3e. Sie geben den String, auf dem sie angewendet werden, in Gro\u00df- bzw. Kleinbuchstaben zur\u00fcck. Wichtig ist, dass der eigentliche String unver\u00e4ndert bleibt. Die R\u00fcckgabe dieser Methoden ist der in Gro\u00df- bzw. Kleinbuchstaben umgewandelte String.\x3cpre\x3e\x3ccode\x3evar stadt \x3d "Prag";\x3cbr\x3evar ausgabe \x3d stadt.toUpperCase();\x3c/code/\x3e\x3c/pre\x3e\x3ccode\x3eausgabe\x3c/code\x3e erh\u00e4lt den Wert \x3ccode\x3e"PRAG"\x3c/code\x3e. \x3ccode\x3estadt\x3c/code\x3e hat weiterhin den Wert \x3ccode\x3e"Prag"\x3c/code\x3e.\x3cpre\x3e\x3ccode\x3eausgabe \x3d stadt.toLowerCase();\x3c/code/\x3e\x3c/pre\x3eJetzt hat \x3ccode\x3eausgabe\x3c/code\x3e den Wert \x3ccode\x3e"prag"\x3c/code\x3e.\x3cpre\x3e\x3ccode\x3eausgabe \x3d "Flug 714".toUpperCase();\x3c/code/\x3e\x3c/pre\x3eHier wird \x3ccode\x3etoUpperCase()\x3c/code\x3e direkt auf einen String angewendet. Der Wert von \x3ccode\x3eausgabe\x3c/code\x3e ist \x3ccode\x3e"FLUG 714"\x3c/code\x3e. Zahlen und auch Sonderzeichen werden nicht ver\u00e4ndert.',task:'Schreibe eine Funktion \x3ccode\x3etoCase\x3c/code\x3e, die bei \u00dcbergabe eines Strings diesen aneinandergeh\u00e4ngt in Klein- und in Gro\u00dfschreibung zur\u00fcckgibt. Das Trennzeichen zwischen der Klein- und Gro\u00dfschreibung soll \x3ccode\x3e-\x3c/code\x3e sein. \x3ccode\x3etoCase("Code")\x3c/code\x3e sollte \x3ccode\x3e"code-CODE"\x3c/code\x3e zur\u00fcckgeben.',
beforeTests:function(){"undefined"!==typeof toCase&&(toCase=void 0)},tests:[function(){var a="function"===typeof toCase;return{ok:a,msg:a?"\x3ccode\x3etoCase\x3c/code\x3e ist eine Funktion.":"\x3ccode\x3etoCase\x3c/code\x3e ist keine Funktion."}},function(){var a,b;try{var c=toCase("Code");b=(a="code-CODE"===c)?'\x3ccode\x3etoCase("Code")\x3c/code\x3e gibt \x3ccode\x3e"code-CODE"\x3c/code\x3e zur\u00fcck.':'\x3ccode\x3etoCase("Code")\x3c/code\x3e gibt nicht \x3ccode\x3e"code-CODE"\x3c/code\x3e, sondern \x3ccode\x3e'+
JSON.stringify(c)+"\x3c/code\x3e zur\u00fcck."}catch(d){a=!1,b='Fehler beim Aufruf von \x3ccode\x3etoCase("Code")\x3c/code\x3e.'}return{ok:a,msg:b}},function(){var a,b;try{var c=toCase("Maria");b=(a="maria-MARIA"===c)?'\x3ccode\x3etoCase("Maria")\x3c/code\x3e gibt \x3ccode\x3e"maria-MARIA"\x3c/code\x3e zur\u00fcck.':'\x3ccode\x3etoCase("Maria")\x3c/code\x3e gibt nicht \x3ccode\x3e"maria-MARIA"\x3c/code\x3e, sondern \x3ccode\x3e'+JSON.stringify(c)+"\x3c/code\x3e zur\u00fcck."}catch(d){a=!1,b='Fehler beim Aufruf von \x3ccode\x3etoCase("Maria")\x3c/code\x3e.'}return{ok:a,
msg:b}}]});
jshero.koans.add({id:"stringcharat",title:"String.charAt()",lesson:'Um aus einem String das Zeichen an einer bestimmten Stelle zu bestimmen, verwendet man die Methode \x3ccode\x3echarAt(index)\x3c/code\x3e. Der Paramter \x3ccode\x3eindex\x3c/code\x3e gibt die Stelle des Zeichens innerhalb der Zeichenkette an. Dabei hat das erste Zeichen einer Zeichenkette den Index 0:\x3cpre\x3e\x3ccode\x3evar n1 \x3d "Maria".charAt(0);\x3cbr\x3evar n2 \x3d "Maria".charAt(1);\x3cbr\x3evar n3 \x3d "Maria".charAt(5);\x3cbr\x3evar n4 \x3d "Maria".charAt();\x3c/code\x3e\x3c/pre\x3e\x3ccode\x3en1\x3c/code\x3e hat den Wert \x3ccode\x3e"M"\x3c/code\x3e und \x3ccode\x3en2\x3c/code\x3e hat den Wert \x3ccode\x3e"a"\x3c/code\x3e. Ist der Index gr\u00f6\u00dfer als der Index des letzten Zeichens, wird der leere String zur\u00fcckgegeben. \x3ccode\x3en3\x3c/code\x3e hat also den Wert \x3ccode\x3e""\x3c/code\x3e. Wird kein Parameter \u00fcbergeben, so wird das Zeichen mit dem Index \x3ccode\x3e0\x3c/code\x3e zur\u00fcckgegeben. Man sagt: der Default-Wert f\u00fcr \x3ccode\x3eindex\x3c/code\x3e ist \x3ccode\x3e0\x3c/code\x3e. Der Wert von \x3ccode\x3en4\x3c/code\x3e ist also auch \x3ccode\x3e"M"\x3c/code\x3e.',task:'Schreibe eine Funktion \x3ccode\x3eabkuerzung\x3c/code\x3e, die zwei Strings als Parameter entgegennimmt und als R\u00fcckgabe die Anfangsbuchstaben dieser Strings zur\u00fcckgibt. \x3ccode\x3eabkuerzung("Hansestadt", "Bremen")\x3c/code\x3e sollte \x3ccode\x3e"HB"\x3c/code\x3e zur\u00fcckliefern.',
beforeTests:function(){"undefined"!==typeof abkuerzung&&(abkuerzung=void 0)},tests:[function(){var a="function"===typeof abkuerzung;return{ok:a,msg:a?"\x3ccode\x3eabkuerzung\x3c/code\x3e ist eine Funktion.":"\x3ccode\x3eabkuerzung\x3c/code\x3e ist keine Funktion."}},function(){var a=2===abkuerzung.length;return{ok:a,msg:a?"\x3ccode\x3eabkuerzung\x3c/code\x3e hat zwei Parameter.":"\x3ccode\x3eabkuerzung\x3c/code\x3e hat nicht 2, sondern "+abkuerzung.length+" Parameter."}},function(){var a,b;try{var c=
abkuerzung("Hansestadt","Bremen");b=(a="HB"===c)?'\x3ccode\x3eabkuerzung("Hansestadt", "Bremen")\x3c/code\x3e gibt \x3ccode\x3e"HB"\x3c/code\x3e zur\u00fcck.':'\x3ccode\x3eabkuerzung("Hansestadt", "Bremen")\x3c/code\x3e gibt nicht \x3ccode\x3e"HB"\x3c/code\x3e, sondern \x3ccode\x3e'+JSON.stringify(c)+"\x3c/code\x3e zur\u00fcck."}catch(d){a=!1,b='Fehler beim Aufruf von \x3ccode\x3eabkuerzung("Hansestadt", "Bremen")\x3c/code\x3e.'}return{ok:a,msg:b}},function(){var a,b;try{var c=abkuerzung("Java","Script");
b=(a="JS"===c)?'\x3ccode\x3eabkuerzung("Java", "Script")\x3c/code\x3e gibt \x3ccode\x3e"JS"\x3c/code\x3e zur\u00fcck.':'\x3ccode\x3eabkuerzung("Java", "Script")\x3c/code\x3e gibt nicht \x3ccode\x3e"JS"\x3c/code\x3e, sondern \x3ccode\x3e'+JSON.stringify(c)+"\x3c/code\x3e zur\u00fcck."}catch(d){a=!1,b='Fehler beim Aufruf von \x3ccode\x3eabkuerzung("Java", "Script")\x3c/code\x3e.'}return{ok:a,msg:b}}]});
jshero.koans.add({id:"number",title:"Zahlen",lesson:"Zahlen werden in JavaScript durch einfache Ziffern dargestellt. Sie k\u00f6nnen einen Dezimalpunkt und ein Minuszeichen besitzen.\x3cpre\x3e\x3ccode\x3evar x1 \x3d 1;\x3cbr\x3evar x2 \x3d 1.0;\x3cbr\x3evar x3 \x3d 3.14;\x3cbr\x3evar x4 \x3d -1;\x3c/code\x3e\x3c/pre\x3e\x3ccode\x3e1\x3c/code\x3e und \x3ccode\x3e1.0\x3c/code\x3e sind dieselbe Zahl. Mit Zahlen kann man rechnen. Die vier Grundrechenarten Addieren, Subtrahieren, Multiplizieren und Dividieren werden durch \x3ccode\x3e+ - *\x3c/code\x3e und \x3ccode\x3e/\x3c/code\x3e dargestellt.\x3cpre\x3e\x3ccode\x3evar x1 \x3d 6;\x3cbr\x3evar x2 \x3d 2;\x3cbr\x3evar x3 \x3d x1 + x2;\x3cbr\x3evar x4 \x3d x1 - x2;\x3cbr\x3evar x5 \x3d x1 * x2;\x3cbr\x3evar x6 \x3d x1 / x2;\x3c/code\x3e\x3c/pre\x3eDie Variablen \x3ccode\x3ex3\x3c/code\x3e bis \x3ccode\x3ex6\x3c/code\x3e haben so die Werte \x3ccode\x3e8\x3c/code\x3e, \x3ccode\x3e4\x3c/code\x3e, \x3ccode\x3e12\x3c/code\x3e und \x3ccode\x3e3\x3c/code\x3e.",task:"Schreibe eine Funktion \x3ccode\x3eadd\x3c/code\x3e, die zwei Zahlen als Parameter entgegennimmt und deren Summe zur\u00fcckgibt. \x3ccode\x3eadd(1, 2)\x3c/code\x3e sollte \x3ccode\x3e3\x3c/code\x3e ergeben.",
beforeTests:function(){"undefined"!==typeof add&&(add=void 0)},tests:[function(){var a="function"===typeof add;return{ok:a,msg:a?"\x3ccode\x3eadd\x3c/code\x3e ist eine Funktion.":"\x3ccode\x3eadd\x3c/code\x3e ist keine Funktion."}},function(){var a=2===add.length;return{ok:a,msg:a?"\x3ccode\x3eadd\x3c/code\x3e hat zwei Parameter.":"\x3ccode\x3eadd\x3c/code\x3e hat nicht 2, sondern "+add.length+" Parameter."}},function(){var a,b;try{var c=add(0,0);b=(a=0===c)?"\x3ccode\x3eadd(0, 0)\x3c/code\x3e ergibt \x3ccode\x3e0\x3c/code\x3e.":
"\x3ccode\x3eadd(0, 0)\x3c/code\x3e ergibt nicht \x3ccode\x3e0\x3c/code\x3e, sondern \x3ccode\x3e"+JSON.stringify(c)+"\x3c/code\x3e."}catch(d){a=!1,b="Fehler beim Aufruf von \x3ccode\x3eadd(0, 0)\x3c/code\x3e."}return{ok:a,msg:b}},function(){var a,b;try{var c=add(2,3);b=(a=5===c)?"\x3ccode\x3eadd(2, 3)\x3c/code\x3e ergibt \x3ccode\x3e5\x3c/code\x3e.":"\x3ccode\x3eadd(2, 3)\x3c/code\x3e ergibt nicht \x3ccode\x3e5\x3c/code\x3e, sondern \x3ccode\x3e"+JSON.stringify(c)+"\x3c/code\x3e."}catch(d){a=!1,
b="Fehler beim Aufruf von \x3ccode\x3eadd(2, 3)\x3c/code\x3e."}return{ok:a,msg:b}}]});
jshero.koans.add({id:"mean",title:"Klammern",lesson:"Ebenso wie in der Mathematik gilt in JavaScript die Punkt-vor-Strichrechnung. Multiplikation und Division werden vor Addition und Subtraktion ausgef\u00fchrt. M\u00f6chte man zuerst die Strichrechnung ausf\u00fchren, verwendet man genauso wie in der Mathematik Klammern.\x3cpre\x3e\x3ccode\x3evar x1 \x3d 3 + 4 * 2;\x3cbr\x3evar x2 \x3d (3 + 4) * 2;\x3c/code\x3e\x3c/pre\x3e\x3ccode\x3ex1\x3c/code\x3e hat den Wert \x3ccode\x3e11\x3c/code\x3e, der Wert von \x3ccode\x3ex2\x3c/code\x3e ist \x3ccode\x3e14\x3c/code\x3e.",task:"Schreibe eine Funktion \x3ccode\x3emittelwert\x3c/code\x3e, die zwei Zahlen als Parameter entgegennimmt und deren Mittelwert zur\u00fcckgibt. \x3ccode\x3emittelwert(1, 2)\x3c/code\x3e sollte \x3ccode\x3e1.5\x3c/code\x3e ergeben.",
beforeTests:function(){"undefined"!==typeof mittelwert&&(mittelwert=void 0)},tests:[function(){var a="function"===typeof mittelwert;return{ok:a,msg:a?"\x3ccode\x3emittelwert\x3c/code\x3e ist eine Funktion.":"\x3ccode\x3emittelwert\x3c/code\x3e ist keine Funktion."}},function(){var a=2===mittelwert.length;return{ok:a,msg:a?"\x3ccode\x3emittelwert\x3c/code\x3e hat zwei Parameter.":"\x3ccode\x3emittelwert\x3c/code\x3e hat nicht 2, sondern "+mittelwert.length+" Parameter."}},function(){var a,b;try{var c=
mittelwert(1,2);b=(a=1.5===c)?"\x3ccode\x3emittelwert(1, 2)\x3c/code\x3e ergibt \x3ccode\x3e1.5\x3c/code\x3e.":"\x3ccode\x3emittelwert(1, 2)\x3c/code\x3e ergibt nicht \x3ccode\x3e1.5\x3c/code\x3e, sondern \x3ccode\x3e"+JSON.stringify(c)+"\x3c/code\x3e."}catch(d){a=!1,b="Fehler beim Aufruf von \x3ccode\x3emittelwert(1, 2)\x3c/code\x3e."}return{ok:a,msg:b}},function(){var a,b;try{var c=mittelwert(0,0);b=(a=0===c)?"\x3ccode\x3emittelwert(0, 0)\x3c/code\x3e ergibt \x3ccode\x3e0\x3c/code\x3e.":"\x3ccode\x3emittelwert(0, 0)\x3c/code\x3e ergibt nicht \x3ccode\x3e0\x3c/code\x3e, sondern \x3ccode\x3e"+
JSON.stringify(c)+"\x3c/code\x3e."}catch(d){a=!1,b="Fehler beim Aufruf von \x3ccode\x3emittelwert(0, 0)\x3c/code\x3e."}return{ok:a,msg:b}}]});
jshero.koans.add({id:"math",title:"Math",lesson:"Viele mathematische Funktionen sind in dem Objekt \x3ccode\x3eMath\x3c/code\x3e zusammengefasst. So gibt \x3ccode\x3eMath.sqrt(x)\x3c/code\x3e die Qudratwurzel (engl.: square root) zur\u00fcck und mit \x3ccode\x3eMath.pow(x, y)\x3c/code\x3e berechnet man die Potenz (engl.: power) x hoch y.\x3cpre\x3e\x3ccode\x3evar y1 \x3d Math.sqrt(9);\x3cbr\x3evar y2 \x3d Math.pow(10, 3);\x3c/code\x3e\x3c/pre\x3e\x3ccode\x3ey1\x3c/code\x3e hat den Wert \x3ccode\x3e3\x3c/code\x3e und \x3ccode\x3ey2\x3c/code\x3e den Wert \x3ccode\x3e1000\x3c/code\x3e (10\x26sup3; \x3d 10 * 10 * 10 \x3d 1000). ",task:"Schreibe eine Funktion \x3ccode\x3ehypotenuse\x3c/code\x3e, die die L\u00e4nge der Hypotenuse eines rechtwinkligen Dreiecks berechnet. \u00dcbergeben wird der Funktion als Parameter die L\u00e4ngen der beiden Katheten. Tipp: In einem rechtwinkligen Dreieck gilt der Satz des Pythagoras. Sind a, b die L\u00e4ngen der beiden Katheten und c die L\u00e4nge der Hypotenuse, so gilt: a\x26sup2; + b\x26sup2; \x3d c\x26sup2;. Da 3\x26sup2; + 4\x26sup2; \x3d 5\x26sup2; gilt, sollte \x3ccode\x3ehypotenuse(3, 4)\x3c/code\x3e den Wert \x3ccode\x3e5\x3c/code\x3e liefern.",
beforeTests:function(){"undefined"!==typeof hypotenuse&&(hypotenuse=void 0)},tests:[function(){var a="function"===typeof hypotenuse;return{ok:a,msg:a?"\x3ccode\x3ehypotenuse\x3c/code\x3e ist eine Funktion.":"\x3ccode\x3ehypotenuse\x3c/code\x3e ist keine Funktion."}},function(){var a=2===hypotenuse.length;return{ok:a,msg:a?"\x3ccode\x3ehypotenuse\x3c/code\x3e hat zwei Parameter.":"\x3ccode\x3ehypotenuse\x3c/code\x3e hat nicht 2, sondern "+hypotenuse.length+" Parameter."}},function(){var a,b;try{var c=
hypotenuse(3,4);b=(a=5===c)?"\x3ccode\x3ehypotenuse(3, 4)\x3c/code\x3e ergibt \x3ccode\x3e5\x3c/code\x3e.":"\x3ccode\x3ehypotenuse(3, 4)\x3c/code\x3e ergibt nicht \x3ccode\x3e5\x3c/code\x3e, sondern \x3ccode\x3e"+JSON.stringify(c)+"\x3c/code\x3e."}catch(d){a=!1,b="Fehler beim Aufruf von \x3ccode\x3ehypotenuse(3, 4)\x3c/code\x3e."}return{ok:a,msg:b}},function(){var a,b;try{var c=hypotenuse(5,12);b=(a=13===c)?"\x3ccode\x3ehypotenuse(5, 12)\x3c/code\x3e ergibt \x3ccode\x3e13\x3c/code\x3e.":"\x3ccode\x3ehypotenuse(5, 12)\x3c/code\x3e ergibt nicht \x3ccode\x3e13\x3c/code\x3e, sondern \x3ccode\x3e"+
JSON.stringify(c)+"\x3c/code\x3e."}catch(d){a=!1,b="Fehler beim Aufruf von \x3ccode\x3ehypotenuse(5, 12)\x3c/code\x3e."}return{ok:a,msg:b}}]});
jshero.koans.add({id:"pi",title:"Math.PI",lesson:"Neben mathematischen Funktionen besitzt \x3ccode\x3eMath\x3c/code\x3e auch einige mathematische Konstanten. \x3ccode\x3eMath.PI\x3c/code\x3e liefert die Kreiszahl \x26pi; (gerundet 3.14) und \x3ccode\x3eMath.E\x3c/code\x3e die Eulersche Zahl. Beachte: Die Konstanten werden im Gegensatz zu Funktionen ohne anschlie\u00dfende Klammern aufgerufen.",task:"Schreibe eine Funktion \x3ccode\x3eflaeche\x3c/code\x3e, die die Fl\u00e4che eines Kreises berechnet. \u00dcbergeben wird der Funktion als Parameter der Radius des Kreises. Tipp: Die Fl\u00e4che eines Kreises ist \x26pi; * r\x26sup2;. Dabei ist r der Radius des Kreises.",
beforeTests:function(){"undefined"!==typeof flaeche&&(flaeche=void 0)},tests:[function(){var a="function"===typeof flaeche;return{ok:a,msg:a?"\x3ccode\x3eflaeche\x3c/code\x3e ist eine Funktion.":"\x3ccode\x3eflaeche\x3c/code\x3e ist keine Funktion."}},function(){var a=1===flaeche.length;return{ok:a,msg:a?"\x3ccode\x3eflaeche\x3c/code\x3e hat einen Parameter.":"\x3ccode\x3eflaeche\x3c/code\x3e hat nicht 1, sondern "+flaeche.length+" Parameter."}},function(){var a,b;try{var c=flaeche(1);b=(a=c===Math.PI)?
"\x3ccode\x3eflaeche(1)\x3c/code\x3e ergibt \x3ccode\x3e"+Math.PI+"\x3c/code\x3e.":"\x3ccode\x3eflaeche(1)\x3c/code\x3e ergibt nicht \x3ccode\x3e"+Math.PI+"\x3c/code\x3e, sondern \x3ccode\x3e"+JSON.stringify(c)+"\x3c/code\x3e."}catch(d){a=!1,b="Fehler beim Aufruf von \x3ccode\x3eflaeche(1)\x3c/code\x3e."}return{ok:a,msg:b}},function(){var a,b;try{var c=flaeche(2);b=(a=c===4*Math.PI)?"\x3ccode\x3eflaeche(2)\x3c/code\x3e ergibt \x3ccode\x3e"+4*Math.PI+"\x3c/code\x3e.":"\x3ccode\x3eflaeche(2)\x3c/code\x3e ergibt nicht \x3ccode\x3e"+
4*Math.PI+"\x3c/code\x3e, sondern \x3ccode\x3e"+JSON.stringify(c)+"\x3c/code\x3e."}catch(d){a=!1,b="Fehler beim Aufruf von \x3ccode\x3eflaeche(2)\x3c/code\x3e."}return{ok:a,msg:b}}]});
jshero.koans.add({id:"bool",title:"Wahrheitswerte",lesson:'Der dritte wichtige Datentyp neben Strings und Zahlen sind Wahrheitswerte. Sie werden auch boolesche Werte genannt. Boolesche Werte kennen nur zwei Zust\u00e4nde: \x3ccode\x3etrue\x3c/code\x3e und \x3ccode\x3efalse\x3c/code\x3e. Mit booleschen Werten kann man \u00e4hnlich "rechnen" wie mit Zahlen. JavaScript kennt drei boolesche Operatoren: \x3ccode\x3e\x26\x26\x3c/code\x3e (und), \x3ccode\x3e||\x3c/code\x3e (oder) und \x3ccode\x3e!\x3c/code\x3e (nicht). Das Ergebnis dieser Operationen ist wieder ein boolescher Wert. \x3ccode\x3e\x26\x26\x3c/code\x3e verkn\u00fcpft zwei boolsche Werte. Sind beide Werte \x3ccode\x3etrue\x3c/code\x3e, ist das Ergebnis auch \x3ccode\x3etrue\x3c/code\x3e. In allen anderen F\u00e4llen ist es \x3ccode\x3efalse\x3c/code\x3e. Bei \x3ccode\x3e||\x3c/code\x3e ist das Ergebnis \x3ccode\x3efalse\x3c/code\x3e, wenn beide Eingangswerte auch \x3ccode\x3efalse\x3c/code\x3e sind. In  allen anderen F\u00e4llen ist das Ergebnis \x3ccode\x3etrue\x3c/code\x3e. \x3ccode\x3e!\x3c/code\x3e wird nur auf einen booleschen Wert angewendet und invertiert diesen Wert: aus \x3ccode\x3etrue\x3c/code\x3e wird \x3ccode\x3efalse\x3c/code\x3e und aus \x3ccode\x3efalse\x3c/code\x3e wird \x3ccode\x3etrue\x3c/code\x3e.\x3cpre\x3e\x3ccode\x3evar x1 \x3d true \x26\x26 false;\x3cbr\x3evar x2 \x3d !x1;\x3cbr\x3evar x3 \x3d x1 || x2;\x3c/code\x3e\x3c/pre\x3e\x3ccode\x3ex1\x3c/code\x3e ist \x3ccode\x3efalse\x3c/code\x3e,  \x3ccode\x3ex2\x3c/code\x3e ist \x3ccode\x3etrue\x3c/code\x3e und \x3ccode\x3ex3\x3c/code\x3e ist ebenfalls \x3ccode\x3etrue\x3c/code\x3e.',task:"Schreibe eine Funktion \x3ccode\x3enand\x3c/code\x3e, die zwei boolesche Werte als Parameter entgegennimmt. Die R\u00fcckgabe der Funktion soll \x3ccode\x3efalse\x3c/code\x3e sein, wenn beide Paramter \x3ccode\x3etrue\x3c/code\x3e sind. In den anderen F\u00e4llen soll die R\u00fcckgabe \x3ccode\x3etrue\x3c/code\x3e sein. \x3ccode\x3enand(true, true)\x3c/code\x3e soll \x3ccode\x3efalse\x3c/code\x3e liefern, \x3ccode\x3enand(true, false)\x3c/code\x3e soll \x3ccode\x3efalse\x3c/code\x3e zur\u00fcckgeben.",
beforeTests:function(){"undefined"!==typeof nand&&(nand=void 0)},tests:[function(){var a="function"===typeof nand;return{ok:a,msg:a?"\x3ccode\x3enand\x3c/code\x3e ist eine Funktion.":"\x3ccode\x3enand\x3c/code\x3e ist keine Funktion."}},function(){var a=2===nand.length;return{ok:a,msg:a?"\x3ccode\x3enand\x3c/code\x3e hat zwei Parameter.":"\x3ccode\x3enand\x3c/code\x3e hat nicht 2, sondern "+nand.length+" Parameter."}},function(){var a,b;try{var c=nand(!0,!0);b=(a=!1===c)?"\x3ccode\x3enand(true, true)\x3c/code\x3e ergibt \x3ccode\x3efalse\x3c/code\x3e.":
"\x3ccode\x3enand(true, true)\x3c/code\x3e ergibt nicht \x3ccode\x3efalse\x3c/code\x3e, sondern \x3ccode\x3e"+JSON.stringify(c)+"\x3c/code\x3e."}catch(d){a=!1,b="Fehler beim Aufruf von \x3ccode\x3enand(true, true)\x3c/code\x3e."}return{ok:a,msg:b}},function(){var a,b;try{var c=nand(!0,!1);b=(a=!0===c)?"\x3ccode\x3enand(true, false)\x3c/code\x3e ergibt \x3ccode\x3etrue\x3c/code\x3e.":"\x3ccode\x3enand(true, false)\x3c/code\x3e ergibt nicht \x3ccode\x3etrue\x3c/code\x3e, sondern \x3ccode\x3e"+JSON.stringify(c)+
"\x3c/code\x3e."}catch(d){a=!1,b="Fehler beim Aufruf von \x3ccode\x3enand(true, false)\x3c/code\x3e."}return{ok:a,msg:b}}]});
jshero.koans.add({id:"equals",title:"Strikte Gleichheit",lesson:'Zwei Werte kann man auf strikte Gleichheit \u00fcberpr\u00fcfen. Das Ergebnis eines solchen Vergleichs ist entweder \x3ccode\x3etrue\x3c/code\x3e, die beiden Werte sind gleich, oder \x3ccode\x3efalse\x3c/code\x3e, die beiden Werte sind ungleich. Der Operator f\u00fcr strikte Gleichheit ist \x3ccode\x3e\x3d\x3d\x3d\x3c/code\x3e.\x3cpre\x3e\x3ccode\x3evar sprache \x3d "JavaScript";\x3cbr\x3evar x \x3d 10;\x3cbr\x3evar v1 \x3d sprache \x3d\x3d\x3d "Java";\x3cbr\x3evar v2 \x3d wert \x3d\x3d\x3d 10;\x3cbr\x3evar v3 \x3d x \x3d\x3d\x3d "10";\x3c/code\x3e\x3c/pre\x3e\x3ccode\x3ev1\x3c/code\x3e bekommt das Ergebnis des Vergleichs der Variablen \x3ccode\x3esprache\x3c/code\x3e mit dem Wert \x3ccode\x3e"Java"\x3c/code\x3e zugewiesen. Da \x3ccode\x3esprache\x3c/code\x3e zuvor den Wert \x3ccode\x3eJavaScript\x3c/code\x3e erhalten hat und diese beiden Werte verschieden sind, hat \x3ccode\x3ev1\x3c/code\x3e den Wert \x3ccode\x3efalse\x3c/code\x3e. \x3ccode\x3ev2\x3c/code\x3e ist \x3ccode\x3etrue\x3c/code\x3e, da der Wert von \x3ccode\x3ex\x3c/code\x3e gleich \x3ccode\x3e10\x3c/code\x3e ist. Bei der strikten Gleichheit kommt es auch darauf an, dass die Datentypen der beiden verglichenen Werte gleich sind. \x3ccode\x3ev3\x3c/code\x3e ist \x3ccode\x3efalse\x3c/code\x3e, da hier unterschiedliche Typen verglichen werden. Auf der linken Seite des Vergleichs steht eine Zahl, auf der rechten Seite ein String.',task:"Schreibe eine Funktion \x3ccode\x3egleich\x3c/code\x3e, die zwei Werte auf strikte Gleichheit \u00fcberpr\u00fcft. \x3ccode\x3egleich(1, 1)\x3c/code\x3e soll \x3ccode\x3etrue\x3c/code\x3e zur\u00fcckgeben, \x3ccode\x3egleich(1, 2)\x3c/code\x3e soll \x3ccode\x3efalse\x3c/code\x3e ergeben.",
beforeTests:function(){"undefined"!==typeof gleich&&(gleich=void 0)},tests:[function(){var a="function"===typeof gleich;return{ok:a,msg:a?"\x3ccode\x3egleich\x3c/code\x3e ist eine Funktion.":"\x3ccode\x3egleich\x3c/code\x3e ist keine Funktion."}},function(){var a=2===gleich.length;return{ok:a,msg:a?"\x3ccode\x3egleich\x3c/code\x3e hat zwei Parameter.":"\x3ccode\x3egleich\x3c/code\x3e hat nicht 2, sondern "+gleich.length+" Parameter."}},function(){var a,b;try{var c=gleich(1,1);b=(a=!0===c)?"\x3ccode\x3egleich(1, 1)\x3c/code\x3e ergibt \x3ccode\x3etrue\x3c/code\x3e.":
"\x3ccode\x3egleich(1, 1)\x3c/code\x3e ergibt nicht \x3ccode\x3etrue\x3c/code\x3e, sondern \x3ccode\x3e"+JSON.stringify(c)+"\x3c/code\x3e."}catch(d){a=!1,b="Fehler beim Aufruf von \x3ccode\x3egleich(1, 1)\x3c/code\x3e."}return{ok:a,msg:b}},function(){var a,b;try{var c=gleich(1,"1");b=(a=!1===c)?'\x3ccode\x3egleich(1, "1")\x3c/code\x3e ergibt \x3ccode\x3efalse\x3c/code\x3e.':'\x3ccode\x3egleich(1, "1")\x3c/code\x3e ergibt nicht \x3ccode\x3efalse\x3c/code\x3e, sondern \x3ccode\x3e'+JSON.stringify(c)+
"\x3c/code\x3e."}catch(d){a=!1,b='Fehler beim Aufruf von \x3ccode\x3egleich(1, "1")\x3c/code\x3e.'}return{ok:a,msg:b}}]});
jshero.koans.add({id:"equals2",title:"Strikte Gleichheit (2)",lesson:"Die folgende Aufgabe soll das Zusammenspiel von strikter Gleichheit und booleschen Operatoren vertiefen.",task:"Schreibe eine Funktion \x3ccode\x3egleich\x3c/code\x3e, die 3 Werte auf strikte Gleichheit \u00fcberpr\u00fcft. \x3ccode\x3egleich(1, 1, 1)\x3c/code\x3e soll \x3ccode\x3etrue\x3c/code\x3e zur\u00fcckgeben, \x3ccode\x3egleich(1, 1, 2)\x3c/code\x3e soll \x3ccode\x3efalse\x3c/code\x3e ergeben.",beforeTests:function(){"undefined"!==
typeof gleich&&(gleich=void 0)},tests:[function(){var a="function"===typeof gleich;return{ok:a,msg:a?"\x3ccode\x3egleich\x3c/code\x3e ist eine Funktion.":"\x3ccode\x3egleich\x3c/code\x3e ist keine Funktion."}},function(){var a=3===gleich.length;return{ok:a,msg:a?"\x3ccode\x3egleich\x3c/code\x3e hat 3 Parameter.":"\x3ccode\x3egleich\x3c/code\x3e hat nicht 3, sondern "+gleich.length+" Parameter."}},function(){var a,b;try{var c=gleich(1,1,1);b=(a=!0===c)?"\x3ccode\x3egleich(1, 1, 1)\x3c/code\x3e ergibt \x3ccode\x3etrue\x3c/code\x3e.":
"\x3ccode\x3egleich(1, 1, 1)\x3c/code\x3e ergibt nicht \x3ccode\x3etrue\x3c/code\x3e, sondern \x3ccode\x3e"+JSON.stringify(c)+"\x3c/code\x3e."}catch(d){a=!1,b="Fehler beim Aufruf von \x3ccode\x3egleich(1, 1, 1)\x3c/code\x3e."}return{ok:a,msg:b}},function(){var a,b;try{var c=gleich(1,1,"1");b=(a=!1===c)?'\x3ccode\x3egleich(1, 1, "1")\x3c/code\x3e ergibt \x3ccode\x3efalse\x3c/code\x3e.':'\x3ccode\x3egleich(1, 1, "1")\x3c/code\x3e ergibt nicht \x3ccode\x3efalse\x3c/code\x3e, sondern \x3ccode\x3e'+JSON.stringify(c)+
"\x3c/code\x3e."}catch(d){a=!1,b='Fehler beim Aufruf von \x3ccode\x3egleich(1, 1, "1")\x3c/code\x3e.'}return{ok:a,msg:b}},function(){var a,b;try{var c=gleich(1,"1",1);b=(a=!1===c)?'\x3ccode\x3egleich(1, "1", 1)\x3c/code\x3e ergibt \x3ccode\x3efalse\x3c/code\x3e.':'\x3ccode\x3egleich(1, "1", 1)\x3c/code\x3e ergibt nicht \x3ccode\x3efalse\x3c/code\x3e, sondern \x3ccode\x3e'+JSON.stringify(c)+"\x3c/code\x3e."}catch(d){a=!1,b='Fehler beim Aufruf von \x3ccode\x3egleich(1, "1", 1)\x3c/code\x3e.'}return{ok:a,
msg:b}}]});
jshero.koans.add({id:"if",title:"if",lesson:"Sehr h\u00e4ufig kommt es vor, dass Code nur dann ausgef\u00fchrt werden soll, wenn eine bestimmte Bedingung erf\u00fcllt ist. Dazu verwendet man die \x3ccode\x3eif\x3c/code\x3e-Anweisung.\x3cpre\x3e\x3ccode\x3e\x3c/code\x3e\x3c/pre\x3e",task:"Schreibe eine Funktion \x3ccode\x3egleich\x3c/code\x3e, die 3 Werte auf strikte Gleichheit \u00fcberpr\u00fcft. \x3ccode\x3egleich(1, 1, 1)\x3c/code\x3e soll \x3ccode\x3etrue\x3c/code\x3e zur\u00fcckgeben, \x3ccode\x3egleich(1, 1, 2)\x3c/code\x3e soll \x3ccode\x3efalse\x3c/code\x3e ergeben.",beforeTests:function(){"undefined"!==
typeof gleich&&(gleich=void 0)},tests:[function(){var a="function"===typeof gleich;return{ok:a,msg:a?"\x3ccode\x3egleich\x3c/code\x3e ist eine Funktion.":"\x3ccode\x3egleich\x3c/code\x3e ist keine Funktion."}},function(){var a=3===gleich.length;return{ok:a,msg:a?"\x3ccode\x3egleich\x3c/code\x3e hat 3 Parameter.":"\x3ccode\x3egleich\x3c/code\x3e hat nicht 3, sondern "+gleich.length+" Parameter."}},function(){var a,b;try{var c=gleich(1,1,1);b=(a=!0===c)?"\x3ccode\x3egleich(1, 1, 1)\x3c/code\x3e ergibt \x3ccode\x3etrue\x3c/code\x3e.":
"\x3ccode\x3egleich(1, 1, 1)\x3c/code\x3e ergibt nicht \x3ccode\x3etrue\x3c/code\x3e, sondern \x3ccode\x3e"+JSON.stringify(c)+"\x3c/code\x3e."}catch(d){a=!1,b="Fehler beim Aufruf von \x3ccode\x3egleich(1, 1, 1)\x3c/code\x3e."}return{ok:a,msg:b}},function(){var a,b;try{var c=gleich(1,1,"1");b=(a=!1===c)?'\x3ccode\x3egleich(1, 1, "1")\x3c/code\x3e ergibt \x3ccode\x3efalse\x3c/code\x3e.':'\x3ccode\x3egleich(1, 1, "1")\x3c/code\x3e ergibt nicht \x3ccode\x3efalse\x3c/code\x3e, sondern \x3ccode\x3e'+JSON.stringify(c)+
"\x3c/code\x3e."}catch(d){a=!1,b='Fehler beim Aufruf von \x3ccode\x3egleich(1, 1, "1")\x3c/code\x3e.'}return{ok:a,msg:b}},function(){var a,b;try{var c=gleich(1,"1",1);b=(a=!1===c)?'\x3ccode\x3egleich(1, "1", 1)\x3c/code\x3e ergibt \x3ccode\x3efalse\x3c/code\x3e.':'\x3ccode\x3egleich(1, "1", 1)\x3c/code\x3e ergibt nicht \x3ccode\x3efalse\x3c/code\x3e, sondern \x3ccode\x3e'+JSON.stringify(c)+"\x3c/code\x3e."}catch(d){a=!1,b='Fehler beim Aufruf von \x3ccode\x3egleich(1, "1", 1)\x3c/code\x3e.'}return{ok:a,
msg:b}}]});