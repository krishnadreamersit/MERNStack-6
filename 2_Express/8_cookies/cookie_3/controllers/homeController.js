import { join } from 'path'

import {UserModel} from '../databases/mongoose_client.js';

const homeController = async (request, response) => {
    response.render(join(process.cwd(), 'views', 'index'));
}

const createController = (request, response) => {
    // Looping in Cookies-2
    var strCookies = JSON.stringify(request.cookies);    
    var objCookies = JSON.parse(strCookies);
    var objResult = {};
    Object.keys(objCookies).forEach(key => {
        if(key==='tmpUser')
        objResult.tmpUser=request.cookies.tmpUser;
        objResult.tmpPass=request.cookies.tmpPass;        
        objResult.tmpPass=request.cookies.status;
    });
    response.render('login', {objCookies:objResult});
    // response.cookie('id', '1');
    // response.cookie('name', 'Raj Rai', {expire: 5*1000 + Date.now()});
    // response.cookie('address', 'Kathmandu, Nepal', {maxAge: 5*1000});
    // // http only, prevents JavaScript cookie access
    // response.cookie('email', 'Raj raj@gmail.com', {maxAge: 5*1000, httpOnly: true});
    // response.send('Cookies create successfully');
}

const displayController = (request, response) => {
    // getting values from form
    var { txtUser, txtPass, chkSave } = request.body;
    console.log(txtUser, txtPass, chkSave);
    var objResult = {};
    if (chkSave === 'on') {
        //Save cookies
        // check whether cookies exists or not
        // if already exist update the password else create new user and password (cookie)
        response.cookie('tmpUser', txtUser, { expire: 5 * 1000 + Date.now() });
        response.cookie('tmpPass', txtPass, { maxAge: 5 * 1000 + Date.now() });
        objResult.user = txtUser;
        objResult.pass = txtPass;
        objResult.status = true;
        console.log(objResult);
    }
    else {
        response.clearCookie('tmpUser', txtUser, { expire: 5 * 1000 + Date.now() });
        response.clearCookie('tmpPass', txtPass, { maxAge: 5 * 1000 + Date.now() });
        objResult.user = txtUser;
        objResult.pass = txtPass;
        objResult.status = false;
        console.log(objResult);
    }
    response.render('result', {'result':objResult});

    // var strCookies = JSON.stringify(request.cookies);
    // console.log(strCookies);
    // var objCookies = JSON.parse(strCookies);

    // // Looping in Cookies-1
    // for (var key in objCookies) {
    //     console.log(key, ":", objCookies[key]);
    // }

    // // Looping in Cookies-2
    // Object.keys(objCookies).forEach(key => {
    //     console.log("key: ", key);
    //     console.log("Value: ", objCookies[key]);
    // });
    // response.clearCookie('email'); //Delete Cookies
    // response.send(objCookies);
    // response.send("Hello");
}

const pageNotFound = (request, response) => {
    response.send(200, "404 Page not found");
}

export { homeController, createController, displayController, pageNotFound };