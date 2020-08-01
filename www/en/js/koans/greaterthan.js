jshero.koans.add({id:"greaterthan",title:"Compare numbers",lesson:"Numbers can be compared with the well-known mathematical symbols.\nIn the following examples, all expressions return the value <code>true</code>.\n<pre><code>let v1 = 5 > 4;\nlet v2 = 5 >= 5;\nlet v3 = 5 < 6;\nlet v4 = 5 <= 5;</code></pre>",task:"Write a function <code>isThreeDigit</code> that checks if a number is greater than\nor equal to 100 and less than 1000.<br><br>\nExample: <code>isThreeDigit(500)</code> should return <code>true</code> and <code>isThreeDigit(50)</code>\nshould return <code>false</code>.",tests:[function(){return jshero.testutil.assert_isFunction("isThreeDigit")},function(){return jshero.testutil.assert_functionHasNumOfParameter("isThreeDigit",1)},function(){return jshero.testutil.assert_functionReturns("isThreeDigit(100)",true)},function(){return jshero.testutil.assert_functionReturns("isThreeDigit(999)",true)},function(){return jshero.testutil.assert_functionReturns("isThreeDigit(99)",false)},function(){return jshero.testutil.assert_functionReturns("isThreeDigit(1000)",false)}]});