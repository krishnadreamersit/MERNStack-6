Calling Secure API from React
ExpressAPI - 2_Express\10_REST_api\rest_api_6

var credentials = btoa("USER:PASSWORD");
var auth = { "Authorization" : `Basic ${credentials}` };
fetch("http://site.com/protected/", { headers : auth });