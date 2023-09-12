function getTextFile(){

    fetch("example.txt")
    .then(response => console.log(response))
    .catch(err => console.log(err));

}

getTextFile();
// Response {type: 'basic', url: 'http://127.0.0.1:5501/Fetch%20API/example.txt', redirected: false, status: 200, ok: true, …}
/*
Response {type: 'basic', url: 'http://127.0.0.1:5501/Fetch%20API/example.txt', redirected: false, status: 200, ok: true, …}
body
: 
(...)
bodyUsed
: 
false
headers
: 
Headers
[[Prototype]]
: 
Headers
append
: 
ƒ append()
delete
: 
ƒ delete()
entries
: 
ƒ entries()
forEach
: 
ƒ forEach()
get
: 
ƒ ()
getSetCookie
: 
ƒ getSetCookie()
has
: 
ƒ has()
keys
: 
ƒ keys()
set
: 
ƒ ()
values
: 
ƒ values()
constructor
: 
ƒ Headers()
Symbol(Symbol.iterator)
: 
ƒ entries()
Symbol(Symbol.toStringTag)
: 
"Headers"
[[Prototype]]
: 
Object
constructor
: 
ƒ Object()
hasOwnProperty
: 
ƒ hasOwnProperty()
isPrototypeOf
: 
ƒ isPrototypeOf()
propertyIsEnumerable
: 
ƒ propertyIsEnumerable()
toLocaleString
: 
ƒ toLocaleString()
toString
: 
ƒ toString()
valueOf
: 
ƒ valueOf()
__defineGetter__
: 
ƒ __defineGetter__()
__defineSetter__
: 
ƒ __defineSetter__()
__lookupGetter__
: 
ƒ __lookupGetter__()
__lookupSetter__
: 
ƒ __lookupSetter__()
__proto__
: 
(...)
get __proto__
: 
ƒ __proto__()
set __proto__
: 
ƒ __proto__()
ok
: 
true
redirected
: 
false
status
: 
200
statusText
: 
"OK"
type
: 
"basic"
url
: 
"http://127.0.0.1:5501/Fetch%20API/example.txt"
[[Prototype]]
: 
Response
arrayBuffer
: 
ƒ arrayBuffer()
blob
: 
ƒ blob()
body
: 
(...)
bodyUsed
: 
(...)
clone
: 
ƒ clone()
formData
: 
ƒ formData()
headers
: 
(...)
json
: 
ƒ json()
ok
: 
(...)
redirected
: 
(...)
status
: 
(...)
statusText
: 
(...)
text
: 
ƒ text()
type
: 
(...)
url
: 
(...)
constructor
: 
ƒ Response()
Symbol(Symbol.toStringTag)
: 
"Response"
get body
: 
ƒ body()
get bodyUsed
: 
ƒ bodyUsed()
get headers
: 
ƒ headers()
get ok
: 
ƒ ok()
get redirected
: 
ƒ redirected()
get status
: 
ƒ status()
get statusText
: 
ƒ statusText()
get type
: 
ƒ type()
get url
: 
ƒ url()
[[Prototype]]
: 
Object
constructor
: 
ƒ Object()
hasOwnProperty
: 
ƒ hasOwnProperty()
isPrototypeOf
: 
ƒ isPrototypeOf()
propertyIsEnumerable
: 
ƒ propertyIsEnumerable()
toLocaleString
: 
ƒ toLocaleString()
toString
: 
ƒ toString()
valueOf
: 
ƒ valueOf()
__defineGetter__
: 
ƒ __defineGetter__()
__defineSetter__
: 
ƒ __defineSetter__()
__lookupGetter__
: 
ƒ __lookupGetter__()
__lookupSetter__
: 
ƒ __lookupSetter__()
__proto__
: 
(...)
get __proto__
: 
ƒ __proto__()
set __proto__
: 
ƒ __proto__()

*/

