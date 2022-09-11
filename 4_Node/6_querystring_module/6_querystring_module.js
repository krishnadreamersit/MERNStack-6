const url = require('url');
const querystring = require('querystring');

let strUrl ='http://127.0.0.1:8000/products/mern?user=admin&pass=asmin';
let parseUrl = url.parse(strUrl);
// console.log(parseUrl);
/*
Url {
  protocol: 'http:',
  slashes: true,    
  auth: null,
  host: '127.0.0.1:8000',
  port: '8000',
  hostname: '127.0.0.1',
  hash: null,
  search: '?user=admin&pass=asmin',
  query: 'user=admin&pass=asmin',
  pathname: '/products/mern',
  path: '/products/mern?user=admin&pass=asmin',
  href: 'http://127.0.0.1:8000/products/mern?user=admin&pass=asmin'
}
*/

/*
var strQueryString = querystring.parse(parseUrl.query);
console.log(strQueryString); //[Object: null prototype] { user: 'admin', pass: 'asmin' }
*/

const q2=querystring.stringify({
    num1:78,
    num2:5,    
}); 
console.log(q2);