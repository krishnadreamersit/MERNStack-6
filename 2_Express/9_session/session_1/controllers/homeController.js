import { join } from 'path';

const homeController = (request, response) => {
    response.render(join(process.cwd(), 'views', 'index'));
    // response.send("Hello");
}
const createController1 = (request, response) => {
    request.session.value1 = 'Hello from createController-1'
    // response.send("Value 1 created!");
    response.render('display', {result:'Value-1 created!'});

}
const createController2 = (request, response) => {
    request.session.value2 = 'Hello from createController-2'
    // response.send("Value 2 created!");
    response.render('display', {result:'Value-2 created!'});
}
const displayController1 = (request, response) => {
    var str1 = 'Value-1: '+request.session.value1 + "<br/>";
    response.render('display', {result:str1});
}
const displayController2 = (request, response) => {
    var str1 = 'Value-2: '+request.session.value2 + "<br/>";
    response.render('display', {result:str1});
}
const displayAllController = (request, response) => {
    console.log(request.session);
    var sessions = request.session;
    var str1 = '';
    for (let key in sessions) {
        if (key !== 'cookie') {
            let value = sessions[key];            
            str1+=sessions[key]+"<br/>";
        }
    }
    // console.log(str1);
    response.render('display', {result:str1});
}
const destroyController = (request, response) => {
    request.session.destroy(null);
    response.render('display', {result:"Remove all sessions"});
}
export { homeController, createController1, createController2, displayController1, displayController2, destroyController, displayAllController }