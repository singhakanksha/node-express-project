1. Node.js or node is an open source, cross platform javascript runtime environment
2. It is not a language or framwork
3. Capable of excecuting javascript outside browser
It can execute not only standard ECMAScript language but also new features that are made available throigh c++ bindings using the v8 engine

Javascript is synchronous blocking and single threaded 

Hence we need something outside of javascript to help with asynchronous code

for frontend this is where web browsers come into play. for back end this is where Node.js comes into play

Web browsers and Node js define functions and API's that allows us to register functions that should not be executed synchronously and should
instead be invoked asynchromously when some kind of evenet occurs

for example: that could be passage of time(set timeout setInterval) the users interaction with mouse, data being read from file
or arrival of data over netwrok(callback promises async await)

nodejs built in modules:

path
events
fs
stream
http


Semantic versioning rules:

X.Y.Z

X - major
Y - minor
Z - patch

1. when you fix a bug and the code stays backward compatible you increment the patch version ex: 1.1.1 to 1.1.2
2. when you add new functionlaity but  the code stays backward compatible you increment the minor version and reset the patch version to  0
ex: 1.1.1 to 1.2.0
3. when you make changes and the code is no longer backward compatible, increment major version and reset minor and patch to 0
ex: 1.1.1 to 2.0.0 
