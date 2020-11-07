jshero.koans.add({id:"notequals",title:"Strict inequality",lesson:"With <code>!==</code> two values are compared for strict inequality.\n\n<pre><code>let c1 = 'rose' !== 'Rose';\nlet c2 = 10 !== '10';</code></pre>\n\nBoth comparisons result in <code>true</code>.\nThe first one, because the two strings differ in upper and lower case.\nThe second, because the two values differ in type.",task:"Write a function <code>unequal</code> that checks 3 values for strict inequality. The function\nshould return <code>true</code> if all three parameters are strict unequal. Otherwise <code>false</code>.<br><br>\nExample: <code>unequal(1,&nbsp;2,&nbsp;3)</code> should return <code>true</code> and\n<code>unequal(1,&nbsp;1,&nbsp;2)</code> should return <code>false</code>.",hint:"<pre><code>function unequal(a, b, c) {\n  return a !== b && ...\n}</code></pre>",solution:"<pre><code>function unequal(a, b, c) {\n  return a !== b && a !== c && b !== c;\n}</code></pre>",tests:[function(){return jshero.testutil.assert_isFunction("unequal")},function(){return jshero.testutil.assert_functionHasNumOfParameter("unequal",3)},function(){return jshero.testutil.assert_functionReturns("unequal(1, 2, 3)",true)},function(){return jshero.testutil.assert_functionReturns("unequal(2, 1, 1)",false)},function(){return jshero.testutil.assert_functionReturns("unequal(1, 2, 1)",false)},function(){return jshero.testutil.assert_functionReturns("unequal(1, 1, 2)",false)},function(){return jshero.testutil.assert_functionReturns("unequal('rose', 'Rose', 'ROSE')",true)},function(){return jshero.testutil.assert_functionReturns("unequal('1', 1, true)",true)}]});