import { join } from 'path'
// import {PersonModel} from '../databases/mongoose_client.js';

const homeController = async (request, response) => {
    response.render(join(process.cwd(), 'views', 'index'));
}

const createController = (request, response) => {
    response.cookie('id', '1');
    response.cookie('name', 'Raj Rai', {expire: 5*1000 + Date.now()});
    response.cookie('address', 'Kathmandu, Nepal', {maxAge: 5*1000});
    // http only, prevents JavaScript cookie access
    response.cookie('email', 'Raj raj@gmail.com', {maxAge: 5*1000, httpOnly: true});
    response.send('Cookies create successfully');
}

const displayController = async (request, response) => {
    var strCookies = JSON.stringify(request.cookies);
    console.log(strCookies);
    var objCookies = JSON.parse(strCookies);
    
    // Looping in Cookies-1
    for (var key in objCookies) {
        console.log(key, ":", objCookies[key]);
    }

    // Looping in Cookies-2
    Object.keys(objCookies).forEach(key => {
        console.log("key: ", key);
        console.log("Value: ", objCookies[key]);
    });
    response.clearCookie('email'); //Delete Cookies
    response.send(objCookies);
}

const pageNotFound = (request, response) => {
    response.send(200, "404 Page not found");
}

export { homeController, createController, displayController, pageNotFound };