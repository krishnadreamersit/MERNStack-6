// url Module
// const url = require("url");
// const reqUrl ="http://127.0.0.1:8000/add?num1=12&num2=32";
// const reqObj = url.parse(reqUrl, true);

// console.log(reqObj.protocol); //http
// console.log(reqObj.host);  //127.0.0.1
// console.log(reqObj.port);  //8000
// console.log(reqObj.pathname); // /add
// console.log(reqObj.search); // ?num1=12&num2=32
// dataObj = reqObj.query;
// console.log(dataObj);
// console.log(dataObj.num1);
// console.log(dataObj.num2);

//querystring Module
// var querystring = require("querystring");
// const reqUrl ="http://127.0.0.1:8000/add?num1=12&num2=32";
// var qstr = url.parse(reqUrl);
// var parsed_queryString = url.parse(qstr.query);
// console.log(parsed_queryString);

import url from 'url'
import querystring from 'querystring'

let exampleUrl ='http://www.company.com:81/a/b/c.html?user=GEEKSFORGEEKS&year=2021#p2';
let parsed_Url = url.parse(exampleUrl);
let parsed_queryString = urquerystring.parse(parsed_Url.query);
console.log("This is parsed URL :",parsed_Url);
console.log("This is parsed Query String :",parsed_queryString);